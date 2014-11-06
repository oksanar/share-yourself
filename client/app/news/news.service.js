'use strict';

angular.module('myprojApp')
    .factory('news', function () {
        // Service logic
        // ...
        var news = [
            {
                title: "Title 1",
                body: "jfdvfdvljfdovjfdobofhbofhbo uhbvobhufbhfdhb yyyjfvkf",
                create_date: "2014-10-26",
                update_date: "2014-10-26",
                author: 1,
                active: true
            },
            {
                title: "Title 2",
                body: "jfdvfdvljfdovjfdobofhbofhbo fibdfiiduiduududu;;vvvvvvvvvvvvvv yyyjfvkf",
                create_date: "2014-10-27",
                update_date: "2014-10-29",
                author: 1,
                active: true
            }


        ];

        // Public API here
        return {
            getAll: function () {
                return news;
            }
        };
    });
