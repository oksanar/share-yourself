'use strict';

angular.module('myprojApp')
    .controller('NavbarCtrl', function ($scope, $location, Auth) {
        $scope.menu = [
            {
                'title': 'Home',
                'link': '/'
            },
            {
                'title': 'About',
                'link': '/about'
            },
            {
                'title': 'News',
                'link': '/news'
            },
            {
                'title': 'Portfolio',
                'link': '/portfolio'
            },
            {
                'title': 'Products',
                'link': '/products'
            },
            {
                'title': 'Contacts',
                'link': '/contacts'
            }
        ];

        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function () {
            Auth.logout();
            $location.path('/login');
        };

        $scope.isActive = function (route) {
            return route === $location.path();
        };
    });