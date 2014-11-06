'use strict';

angular.module('myprojApp')
    .factory('products', function () {
        // Service logic
        // ...
        var products = [
            {
                title: "Product Title 1",
                body: "products products products products",
                create_date: "2014-10-26",
                update_date: "2014-10-26",
                author: 1,
                active: true
            },
            {
                title: "Product Title 2",
                body: "products products products",
                create_date: "2014-10-27",
                update_date: "2014-10-29",
                author: 1,
                active: true
            }


        ];

        // Public API here
        return {
            getAll: function () {
                return products;
            }
        };
    });
