'use strict';

angular.module('myprojApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('news', {
        url: '/news',
        templateUrl: 'app/news/news.html',
        controller: 'NewsCtrl'
      });
  });