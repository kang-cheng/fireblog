'use strict';

/* Services */

var fireblogServices = angular.module('fireblogServices', []);

fireblogServices.factory("BlogService", ["$firebaseArray", "$firebaseObject",
    function($firebaseArray, $firebaseObject) {
        var cacheData;
        var allTags = {};
        var allCats = {};
        
        function setAllTagsAndCats(cacheData){
            var tags;
            var cat;
            cacheData.$loaded().then(function () {
                for(var j=0;j<cacheData.length;j++){
                    if('tags' in cacheData[j]){
                        tags = cacheData[j].tags.split(" ");
                        for (var i=0; i<tags.length; i++){
                            if(tags[i]==""){
                                continue;
                            }
                            if(tags[i] in allTags){
                                allTags[tags[i]]['count']++;
                                allTags[tags[i]]['id'].push(cacheData[j].$id);
                            }else{
                                allTags[tags[i]] = {'count':1, 'id': [cacheData[j].$id]};
                            }
                        }
                    }
                    
                    if('cat' in cacheData[j]){
                        cat = cacheData[j].cat;
                        if(cat in allCats){
                            allCats[cat]['count']++;
                            allCats[cat]['id'].push(cacheData[j].$id);
                        }else{
                            allCats[cat] = {'count':1, 'id': [cacheData[j].$id]};
                        }
                    }
                }
//            console.log(allTags);
//            console.log(allCats);
            });
        }
        
        function getData(){
            if(cacheData){
                return cacheData;
            }else{
                var ref = new Firebase("https://github-pages.firebaseio.com/blogs");
                cacheData =  $firebaseArray(ref);
                
                setAllTagsAndCats(cacheData);
                
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
            getAllTags: function() {
                getData();
                return allTags;
            },
            getAllCats: function() {
                getData();
                return allCats;
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
            },
            setCurrentNav: function(page_name) {
                $("#home_link").css("font-size","12px");
                $("#archives_link").css("font-size","12px");
                $("#cats_link").css("font-size","12px");
                $("#tags_link").css("font-size","12px");
                
                $("#"+page_name+"_link").css("font-size","20px");
            }
        };
    }
]);