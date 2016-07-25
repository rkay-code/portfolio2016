var portfolioApp = angular.module('portfolioApp', ['ui.router', 'ngSanitize']);

portfolioApp.config(function($stateProvider, $urlRouterProvider, $provide) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
    url: '/',
    views: {
      '': {
          templateUrl: '/templates/home.html',
      },
      'work@home': {
        templateUrl: '/templates/work.html',
      },
      'desk@home': {
        templateUrl: '/templates/desk.html',
      },
      'room@home': {
        templateUrl: '/templates/room.html',
      },
      'contact@home': {
        templateUrl: '/templates/contact.html',
      },
    }
  })

  .state('workDetail', {
    url: '/work/:workId',
    templateUrl: '/templates/work-detail.html'
  });

});

portfolioApp.filter('capitalize', function() {
  return function(input, all) {
    var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
    return (!!input) ? input.replace(reg, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }) : '';
  }
});


portfolioApp.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;
}]);


portfolioApp.controller('mainCtrl', function($scope, $timeout, $location, $state, $anchorScroll) {

  $scope.user = {
    name: ''
  };

  $scope.$state = $state;

  function titleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  $scope.gotoWork = function() {
    $location.hash('work');
    $anchorScroll();
  };

  $scope.gotoDesk = function() {
    $location.hash('desk');
    $anchorScroll();
  };

  $scope.gotoRoom = function() {
    $location.hash('room');
    $anchorScroll();
  };

  $scope.gotoContact = function() {
    $location.hash('contact');
    $anchorScroll();
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
        var l = 4;
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
