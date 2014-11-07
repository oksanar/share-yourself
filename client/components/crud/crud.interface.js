'use strict';

angular.module('myprojApp')
    .service('CRUD', ['$http', function ($http) {

        var _that = this;
        _that._entity = _that.entity || {};

        _that.funcs = {
            getConfig: function(){
                return _that._entity;
            }
        };

        _that.configure = function(entity_config){
            _that._entity = entity_config;
            return _that.crud;
        };
        _that.crud = {
            getAll: function () {
                console.log("_that.funcs.getConfig().entity_type",_that.funcs.getConfig().entity_type);
                return $http({"method": "GET", 'url':'/api/'+_that.funcs.getConfig().entity_type, responseType: _that.funcs.getConfig().responseType || "json"});
            },
            getOne: function (id) {
                return $http({"method": "GET", 'url':'/api/'+_that.funcs.getConfig().entity_type+'/'+id, responseType: _that.funcs.getConfig().responseType || "json"});
            },
            create: function (data) {
                return $http({"method": "POST", 'url':'/api/'+_that.funcs.getConfig().entity_type, 'data': data, responseType: _that.funcs.getConfig().responseType || "json"});
            },
            update: function (id, data) {
                return $http({"method": "PUT", 'url':'/api/'+_that.funcs.getConfig().entity_type+'/'+id, 'data': data, responseType: _that.funcs.getConfig().responseType || "json"});
            },
            remove: function (id) {
                return $http({"method": "DELETE", 'url':'/api/'+_that.funcs.getConfig().entity_type+'/'+id, responseType: _that.funcs.getConfig().responseType || "json"});
            }

        };
        return _that;


    }]);
