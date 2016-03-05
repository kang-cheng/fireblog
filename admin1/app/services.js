'use strict';

/* Services */

var fireblogAdminServices = angular.module('fireblogAdminServices', []);

fireblogAdminServices.factory("BlogService", ["$firebaseArray", "$firebaseObject",
    function($firebaseArray, $firebaseObject) {
        var cacheData;
        var allTags = {};
        var allCats = {};
        var tagMax = 1;
        var catMax = 1;
        var allBlogByTag = {};
        var allBlogByCat = {};
        
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
                            
                            if(tags[i] in allBlogByTag){
                                allBlogByTag[tags[i]][cacheData[j].$id] = cacheData[j].title;
                            }else{
                                allBlogByTag[tags[i]] = {};
                                allBlogByTag[tags[i]][cacheData[j].$id] = cacheData[j].title;
                            }
                            
                            if(tags[i] in allTags){
                                allTags[tags[i]]['count']++;
                                allTags[tags[i]]['id'].push(cacheData[j].$id);
                                
                                if(allTags[tags[i]]['count']>tagMax){
                                    tagMax = allTags[tags[i]]['count'];
                                }
                            }else{
                                allTags[tags[i]] = {'count':1, 'id': [cacheData[j].$id]};
                            }
                        }
                    }
                    
                    if('cat' in cacheData[j]){
                        cat = cacheData[j].cat;
                        
                        if(cat in allBlogByCat){
                            allBlogByCat[cat][cacheData[j].$id] = cacheData[j].title;
                        }else{
                            allBlogByCat[cat] = {};
                            allBlogByCat[cat][cacheData[j].$id] = cacheData[j].title;
                        }
                        
                        if(cat in allCats){
                            allCats[cat]['count']++;
                            allCats[cat]['id'].push(cacheData[j].$id);
                            
                            if(allCats[cat]['count']>catMax){
                                catMax = allCats[cat]['count'];
                            }
                        }else{
                            allCats[cat] = {'count':1, 'id': [cacheData[j].$id]};
                        }
                    }
                }
//            console.log(allTags);
//            console.log(allCats);
//                console.log(allBlogByCat);
//                console.log("allblogbycat");
//                console.log(allBlogByTag);
//                console.log("allblogbytag");
            });
        }
        
        function getData(){
            if(cacheData){
                console.log("cachedData");
                return cacheData;
            }else{
                var ref = new Firebase("https://github-pages.firebaseio.com/blogs");
                cacheData =  $firebaseArray(ref);
                
                setAllTagsAndCats(cacheData);
                console.log("NewData");
                
                return cacheData;
            }
        }
        
        function getObjectByID(id){
            var ref = new Firebase("https://github-pages.firebaseio.com/blogs/"+id);
            return $firebaseObject(ref);
        }
        
        function getAllByTag(cacheData, tagname){
            var result = [];
            cacheData.$loaded().then(function () {
                if(tagname in allTags){
                    for(var i=0;i<allTags[tagname]['id'].length;i++){
                        result.push(cacheData.$getRecord(allTags[tagname]['id'][i]));
                    }
                }
                console.log(result);
                return result;
            });
        }
        
        function getAllByCat(data, catname){
            var result = {};
            if(catname in allCats){
                for(var i=0;i<allCats[catname].id.length;i++){
                    var blog = data.$getRecord(allCats[catname]['id'][i]);
                    result[blog.$id] = blog.title;
                }
            }
            console.log(result);
            return result;
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
                console.log(allCats);
                return allCats;
            },
            getAllByTag: function(tagname) {
                getData();
                return allBlogByTag;
            },
            getAllByCat: function(catname) {
                getData();
                return allBlogByCat;
            },
            getTagMax: function() {
                console.log("tagMax:"+tagMax);
                return tagMax;
            },
            getCatMax: function() {
                console.log("catMax:"+catMax);
                return catMax;
            }
        };
    }
]);


fireblogAdminServices.factory("OptionService", ["$firebaseObject",
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

fireblogAdminServices.factory("AuthService", ["$q", "$window", "$location", "$firebaseObject", "$firebaseAuth",
    function($q, $window, $location, $firebaseObject, $firebaseAuth) {
        var isLoggedIn = false;
        var uid = '';

        var ref = new Firebase("https://github-pages.firebaseio.com/");
        var authObj = $firebaseAuth(ref);

        init();

        function init() {
            authObj.$onAuth(authDataCallback);
            if(authObj.$getAuth()){
                isLoggedIn = true;
            }
        }

        function authDataCallback(authData) {
            if(authData){
                console.log("User "+authData.uid+" is logged in with "+authData.provider);
                isLoggedIn = true;
                var user = $firebaseObject(ref.child('users').child(authData.uid));
                user.$loaded().then(function(){
                    if(user.name == undefined){
                        var timestamp = new Date().getTime();
                        var newUser = {
                            name: authData.github.username,
                            blogs: [],
                            options: {
                                basic: {
                                    username: "新用户",
                                    sitename: "MY FIRE BLOG",
                                    motto: "Let's make some noise.",
                                    navbar_text: "NEW USER",
                                    github: authData.github.username,
                                    facebook: "",
                                    twitter: "",
                                    weibo: "",
                                    weibo_link: "",
                                }
                            }
                        };

                        user.$ref().set(newUser);
                        user.$ref().child('blogs').child(""+timestamp).set({
                            title: "My First Blog",
                            snippet: "",
                            cat: "UNCATEGORIZED",
                            tag: "",
                            content: "<p>HELLO WORLD!!!\n\n</p>\n<p>Welcome to My <code>Blog</code>!!!</p>\n",
                            raw_content: "HELLO WORLD!!!<div><br><div>Welcome to My `Blog`!!!</div></div>",
                            date: timestamp,
                        });
                    }
                });
            }else{
                console.log("User is logged out.");
                isLoggedIn = false;
            }
        }
        
        function logout() {
            ref.unauth();
            $location.path('/login');
        }

        function firebaseAuthLogin(provider) {
            authObj.$authWithOAuthPopup(provider).then(function(authData){
                console.log("Authenticated successfully with provider "+provider+" with payload:",authData);
                $location.path('/');
            }).catch(function(error){
                console.error("Authentication failed:",error);
            });
        }

        function githubLogin(){
            firebaseAuthLogin('github');
        }

        return {
            isLoggedIn: function() {
                return isLoggedIn;
            },
            getUid: function() {
                return uid;
            },
            githubLogin: function() {
                githubLogin();
            },
            logout: function() {
                logout();
            },
            permissionCheck: function() {
                var deferred = $q.defer();

                if (isLoggedIn) {
                    console.log("resolve");
                    deferred.resolve();
                } else {
                    console.log("reject");
                    deferred.reject();
                    $window.location.href = "#/login";
                }

                return deferred.promise;
            },
        };
    }
]);