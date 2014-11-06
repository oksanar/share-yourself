'use strict';

angular.module('myprojApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'app/contacts/contacts.html',
        controller: 'ContactsCtrl'
      });
  });