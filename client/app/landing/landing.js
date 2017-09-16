(function () {

  'use strict';

  angular
    .module('app')
    .controller('landingController', landingController)

  landingController.$inject = ['authService'];

  function landingController($scope, authService) {
    var vm = this;
    vm.auth = authService;
  };

})();