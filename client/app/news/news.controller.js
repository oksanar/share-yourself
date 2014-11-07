'use strict';

angular.module('myprojApp')
    .controller('NewsCtrl', ['$scope', '$modal', 'Auth', 'news', 'socket', function ($scope, $modal, Auth, news, socket) {
        $scope.title = 'News';

        $scope.isAdmin = Auth.isAdmin;

        $scope.add = function () {
            // window.location = "/news/add";

            var modalInstance = $modal.open({
                templateUrl: 'app/news/cu/cu.html',
                controller: 'NewsCreateCtrl',
                resolve: {
                    form: function () {
                        return $scope.form;
                    }
                }
            });
            modalInstance.result.then(function (data) {
                $scope.news.push(data);
                //getAllNews();
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        }
        $scope.edit = function (id) {
            // window.location = "/news/add";

            var modalInstance = $modal.open({
                templateUrl: 'app/news/cu/cu.html',
                controller: 'NewsEditCtrl',
                resolve: {
                    form: function () {
                        return $scope.form;
                    },
                    news_id: function () {
                        return id;
                    }
                }
            });
            modalInstance.result.then(function (data) {
                getAllNews();
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });

        }

        $scope.remove = function (id) {
            news.remove(id).success(function (data) {
                console.log(data);
                getAllNews();
            });
        }
        function getAllNews() {
            news.getAll().success(function (data) {
                console.log(data);
                $scope.news = data;
            });
        }

        getAllNews();


    }])
    .controller('NewsEditCtrl', ['$scope', '$modalInstance', 'news_id', 'Auth', 'news', 'socket', function ($scope, $modalInstance, news_id, Auth, news, socket) {
        $scope.title = 'News Edit';

        $scope.isAdmin = Auth.isAdmin;
        var news_id = $scope.news_id = news_id;
        $scope.init = function () {
            news.getOne(news_id).success(function (data) {
                $scope.form = data;
            });

        }
        $scope.save = function () {
            news.update(news_id, angular.copy($scope.form)).success(function (data) {
                console.log(data);
                $modalInstance.close(data);
            });
        }


    }])
    .controller('NewsCreateCtrl', ['$scope', '$modalInstance', 'Auth', 'news', 'socket', function ($scope, $modalInstance, Auth, news, socket) {
        $scope.title = 'News Create';

        $scope.isAdmin = Auth.isAdmin;


        $scope.init = function () {
            $scope.form = {
                title: "",
                body: ""
            };
        }
        $scope.save = function () {
            news.create(angular.copy($scope.form)).success(function (data) {
                console.log(data);
                $modalInstance.close(data);

            });


        }

    }]);
