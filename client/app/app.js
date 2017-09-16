(function () {


  angular.module('app', [
    'auth0.auth0',
    'ui.router',
    'app.landing'
  ])

  .config(config);

  config.$inject = [
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    'angularAuth0Provider'
  ];

  function config(
    $stateProvider,
    $locationProvider,
    $urlRouterProvider,
    angularAuth0Provider
  ) {

  $stateProvider
    .state('landing', {
      url: '/landing',
      controller: 'landingController',
      templateUrl: './landing/landing.html',
      controllAs: 'vm'
    })

    .state('home', {
      url: '/home',
      template: '<h3>home</h3>'
    })
  }
})();

