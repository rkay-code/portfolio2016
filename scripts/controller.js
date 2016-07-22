var portfolioApp = angular.module('portfolioApp', ['ui.router', 'ngSanitize']);

// portfolioApp.config(function($stateProvider, $urlRouterProvider, $provide) {
//
//   $urlRouterProvider.otherwise('/');
//
//   $stateProvider
//
//     .state('home', {
//     url: '/',
//     templateUrl: '/templates/landing.html',
//   })
//
//   .state('work', {
//     url: '/work',
//     templateUrl: '/templates/work.html',
//   })
//
//   .state('desk', {
//     url: '/mydesk',
//     templateUrl: '/templates/desk.html'
//   })
//
//   .state('room', {
//     url: '/myroom',
//     templateUrl: '/templates/room.html'
//   })
//
//   .state('contact', {
//     url: '/contact',
//     templateUrl: '/templates/contact.html'
//   })
//
//   .state('workDetail', {
//     url: '/work/:workId',
//     templateUrl: '/templates/work-detail.html'
//   });
//
// });

portfolioApp.filter('capitalize', function() {
  return function(input, all) {
    var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
    return (!!input) ? input.replace(reg, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }) : '';
  }
});


portfolioApp.controller('mainCtrl', function($scope, $timeout, $location) {
  $scope.user = {
    name: ''
  };

  function titleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  $scope.sbmtName = function() {
    $(" #sbmt ").click();
    console.log('clicked!');
  };

  function animateDoor() {
    $('.door-wrapper').addClass('door-wrapper-hover');
    $('.landing-input').addClass('fadeInput');
    $('.landing-welcome').addClass('show');
    $('.door-wrapper').addClass('scale');
    $('.landing-wrapper').addClass('fadeOut');
  };

  $scope.btnClicked = function($timeout) {
    animateDoor();
  };

  $scope.delayTransition = function() {
    $timeout(function() {
      $location.path("/work");
    }, 3000);
  };

  $scope.templates = [{
    name: 'work',
    url: '/templates/work.html'
  }, {
    name: 'desk',
    url: '/templates/desk.html'
  }, {
    name: 'room',
    url: '/templates/room.html'
  }, {
    name: 'work-detail',
    url: '/templates/work-detail.html'
  }, {
    name: 'contact',
    url: '/templates/contact.html'
  }];
  $scope.template = $scope.templates[0];
});


portfolioApp.controller('workCtrl', ['$scope', '$stateParams', '$http', '$location',
  function($scope, $stateParams, $http, $location) {

    $http.get('/data/projects.json').success(function(data) {
      $scope.works = data;
    });

    $http.get('/data/' + $stateParams.workId + '.json').success(function(data) {
      $scope.work = data;

      $http.get('/data/projects.json').success(function(data) {
        $scope.allWorks = data;
        var currentWorkIndex;
        var l = $scope.allWorks.length;
        for (var i = 0; i < l; i++) {
          if ($scope.allWorks[i].id === $stateParams.workId) {
            currentWorkIndex = i;
            break;
          }
        }
        var prevWorkIndex = (currentWorkIndex !== 0) ? (currentWorkIndex - 1) : (l - 1);
        var nextWorkIndex = (currentWorkIndex !== l - 1) ? (currentWorkIndex + 1) : (0);
        $scope.prevWork = $scope.allWorks[prevWorkIndex].id;
        $scope.nextWork = $scope.allWorks[nextWorkIndex].id;
      });
    });
  }
]);

portfolioApp.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      var idToScroll = attrs.href;
      $elm.on('click', function() {
        var $target;
        if (idToScroll) {
          $target = $(idToScroll);
        } else {
          $target = $elm;
        }
        $("body").animate({scrollTop: $target.offset().top}, "slow");
      });
    }
  }
});
