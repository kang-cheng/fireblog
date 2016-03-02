'use strict';

/* Services */

var fireblogServices = angular.module('fireblogServices', []);

fireblogServices.factory("BlogService", ["$firebaseArray", "$firebaseObject",
    function($firebaseArray, $firebaseObject) {
        var cacheData;
        var allTags = {};
        
        function setAllTags(cacheData){
            var tags;
            cacheData.$loaded().then(function () {
                for(var j=0;j<cacheData.length;j++){
                    console.log(cacheData[j].tags);
                    if('tags' in cacheData[j]){
                        tags = cacheData[j].tags.split(" ");
                        console.log(tags);
                        for (var i=0; i<tags.length; i++){
                            if(tags[i] in allTags){
                                allTags[tags[i]]++;
                            }else{
                                allTags[tags[i]] = 1;
                            }
                        }
                    }
                }
            console.log(allTags);
            });
        }
        
        function getData(){
            if(cacheData){
                return cacheData;
            }else{
                var ref = new Firebase("https://github-pages.firebaseio.com/blogs");
                cacheData =  $firebaseArray(ref);
                
                setAllTags(cacheData);
                
                return cacheData;
            }
        }
        
        function getObjectByID(id){
            var ref = new Firebase("https://github-pages.firebaseio.com/blogs/"+id);
            return $firebaseObject(ref);
        }

        return {
            getAll: function() {
                return getData();
            },
            getRecord: function(id) {
                return getData().$getRecord(id);
            },
            getObjectByID: function(id) {
                return getObjectByID(id);
            },
            getAllTags: function(tags) {
                return allTags;
            },
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