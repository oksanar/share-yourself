'use strict';

angular.module('myprojApp')
    .controller('NewsCtrl', ["$scope", "news", function ($scope, news) {
        $scope.title = 'News';

        $scope.news = news.getAll();
    }]);
