'use strict';

angular.module('myprojApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'app/portfolio/portfolio.html',
        controller: 'PortfolioCtrl'
      });
  });