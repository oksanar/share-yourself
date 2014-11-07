'use strict';

angular.module('myprojApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('news', {
                url: '/news',
                templateUrl: 'app/news/news.html',
                controller: 'NewsCtrl'
            })
            .state('newsCreate', {
                url: '/news/add',
                templateUrl: 'app/news/cu/cu.html',
                controller: 'NewsCreateCtrl'
            })
            .state('newsEdit', {
                url: '/news/edit/:id',
                templateUrl: 'app/news/cu/cu.html',
                controller: 'NewsEditCtrl'
            });
    });