'use strict';

angular.module('myprojApp')
  .controller('ProductsCtrl', ["$scope", "products", function ($scope, products) {
        $scope.title = 'Products';

        $scope.products = products.getAll();
    }]);
