'use strict';

/* Services */

var fireblogServices = angular.module('fireblogServices', []);

fireblogServices.factory("BlogService", ["$firebaseArray", "$firebaseObject",
    function($firebaseArray, $firebaseObject) {
        var cacheData;
        
        function getAll(){
            if(cacheData){
                return cacheData;
            }else{
                var ref = new Firebase("https://github-pages.firebaseio.com/blogs");
                cacheData =  $firebaseArray(ref);
                
                return cacheData;
            }
        }
        
        function getOne(id){
            var ref = new Firebase("https://github-pages.firebaseio.com/blogs/"+id);
            return $firebaseObject(ref);
        }

        return {
            getAll: function() {
                return getAll();
            },
            getRecord: function(id) {
                return getAll().$getRecord(id);
            },
            getObjectByID: function(id) {
                return getOne(id);
            }
        };
    }
]);


fireblogServices.factory("OptionService", ["$firebaseObject",
    function($firebaseObject) {
        var cacheBasic;
        
        function getBasic(){
            if(cacheBasic){
                return cacheBasic;
            }else{
                var ref = new Firebase("https://github-pages.firebaseio.com/options/basic");
                cacheBasic =  $firebaseObject(ref);
                
                return cacheBasic;
            }
        }

        return {
            basic: function() {
                return getBasic();
            },
            setSiteTitle: function(page_name) {
                var basic = getBasic();
                basic.$loaded().then(function () {
                    $('title').text(page_name+" - "+basic.sitename);
                });
            }
        };
    }
]);