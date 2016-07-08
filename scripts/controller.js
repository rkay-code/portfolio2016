var portfolioApp = angular.module('portfolioApp', ['ui.router']);

portfolioApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: '/templates/welcome.html',
    })

    .state('work', {
      url: '/work',
      templateUrl: '/templates/work.html',
    })

    .state('me', {
      url: '/me',
      templateUrl: '/templates/me.html'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: '/templates/contact.html'
    })

    .state('workDetail', {
      url: '/work/:workId',
      templateUrl: '/templates/work-detail.html'
    });


});

portfolioApp.controller('mainCtrl', function($scope, $timeout, $location) {
  $scope.user = {
    name: ''
  };

  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  function animateDoor() {
    $('.door').addClass('animatedDoor');
    $('.landing-input').addClass('fade');
    $('.door-wrapper').addClass('scale');
    $('.door-wrapper').addClass('fade-door');
  };

  $scope.btnClicked = function($timeout) {
    animateDoor();
  };

  $scope.delayTransition = function() {
    $timeout(function() {
      $location.path("/work");
    }, 3500);
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
        var l = $scope.allWorks.length;
        for(var i=0;i<l;i++) {
            if( $scope.allWorks[i].id === $stateParams.workId) {
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
