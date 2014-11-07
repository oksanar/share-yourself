'use strict';

angular.module('myprojApp')
    .factory('news', ['CRUD', function (CRUD) {
        // Service logic
        //



        // Public API here
        var config = {
            'entity_type':'news'
        };
        var entity = CRUD.configure(config);

        return entity;

    }]);
