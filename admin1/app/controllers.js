'use strict';

/* Controllers */

var fireblogAdminControllers = angular.module('fireblogAdminControllers', []);

fireblogAdminControllers.controller('OptionCtrl', ['$scope', "OptionService", "AuthService", 
	function ($scope, OptionService, AuthService){
        $scope.option =  OptionService.basic();
        $scope.AuthService = AuthService;
    }
]);

fireblogAdminControllers.controller('BlogDetailCtrl', ['$scope', "BlogService", "OptionService", "$sce", "$routeParams",
    function ($scope, BlogService, OptionService, $sce, $routeParams){
        $scope.trustAsHtml = $sce.trustAsHtml;
        $scope.blogs =  BlogService.getAll();
        
        $scope.blogs.$loaded().then(function () {
            $scope.blog = $scope.blogs.$getRecord($routeParams.blogId);
            var page_name = $scope.blog.title;
            var site_name = OptionService.setSiteTitle(page_name);
            OptionService.setCurrentNav("");
        });
    }
]);

fireblogAdminControllers.controller('BlogPostCtrl', ['$scope', "OptionService", "BlogService", "$window",
	function ($scope, OptionService, BlogService, $window){
        $scope.allCats = BlogService.getAllCats();
        $scope.allTags = BlogService.getAllTags();
        
		$scope.title = "";
		$scope.cat = "";
		$scope.tags = "";
		$(editor.getElement('editor').body).html("");
		$($(editor.getElement('previewer').body).children()[0]).html("");
        
        $scope.selectCat = function(catname) {
            $scope.cat = catname;
        }
        
        $scope.addTag = function(tagname) {
            $scope.tags += " "+tagname;
        }
        
        $scope.clearCat = function() {
            $scope.cat = $scope.cat.split(' ')[0].toLowerCase();
        }
        
        $scope.clearTags = function() {
            $scope.tags = $.trim($scope.tags.toLowerCase());
        }
        
		$scope.newBlog = function() {
            var raw_content = $(editor.getElement('editor').body).html();
            editor.preview();
            var content = $($(editor.getElement('previewer').body).children()[0]).html();
            if( $scope.title != "" && raw_content != ""){
                var blogsRef = new Firebase("https://github-pages.firebaseio.com/blogs/");
                var timestamp = new Date().getTime();
                var id = timestamp;
                
                $scope.clearTags();
                $scope.clearTags();
                var cat = $scope.cat==""?"uncategorized":$scope.cat;
                var tags = $scope.tags;
                blogsRef.child(""+id).set({
                    title: $scope.title,
                    content: content,
                    raw_content: raw_content,
                    date: timestamp,
                    snippet: "",
                    cat: cat,
                    tags: tags,
                });
                $scope.title = "";
                $(editor.getElement('editor').body).html("")
				$($(editor.getElement('previewer').body).children()[0]).html("");
                $window.location.href = "#/p="+id
            }
	    };
        
        var page_name = "NEW";
        var site_name = OptionService.setSiteTitle(page_name);
        OptionService.setCurrentNav("");
    }
]);


fireblogAdminControllers.controller('BlogEditCtrl', ['$scope', "OptionService", "BlogService", "$window", "$firebaseObject", "$sce", "$routeParams",
	function ($scope, OptionService, BlogService, $window, $firebaseObject, $sce, $routeParams){
        var blogRef = new Firebase("https://github-pages.firebaseio.com/blogs/"+$routeParams.blogId);
        var blog =  $firebaseObject(blogRef);
        
        
        $scope.allCats = BlogService.getAllCats();
        $scope.allTags = BlogService.getAllTags();
        
        $scope.selectCat = function(catname) {
            $scope.cat = catname;
        }
        
        $scope.addTag = function(tagname) {
            $scope.tags += " "+tagname;
        }
        
        $scope.clearCat = function() {
            $scope.cat = $scope.cat.split(' ')[0].toLowerCase();
        }
        
        $scope.clearTags = function() {
            $scope.tags = $.trim($scope.tags.toLowerCase());
        }
        
		blog.$loaded()
		  .then(function(data) {
	  		$scope.blog = data;
			$scope.title = $scope.blog.title;
			$scope.cat = $scope.blog.cat;
			$scope.tags = $scope.blog.tags;
	        $(editor.getElement('editor').body).html(data.raw_content);

		  })
		  .catch(function(error) {
		    console.error("Error:", error);
		  });
        
		$scope.editBlog = function() {
            var raw_content = $(editor.getElement('editor').body).html();
            editor.preview();
            var content = $($(editor.getElement('previewer').body).children()[0]).html();
            if( $scope.title != "" && raw_content != ""){
                var timestamp = new Date().getTime();
                
                $scope.clearTags();
                $scope.clearTags();
                var cat = $scope.cat==""?"uncategorized":$scope.cat;
                var tags = $scope.tags;
                blog.title = $scope.title;
                blog.content = content;
                blog.raw_content = raw_content;
                blog.date = timestamp;
                blog.cat = cat;
                blog.tags = tags;
                blog.$save();
                $(editor.getElement('editor').body).html("");
                $window.location.href = "#/p="+blog.$id;
            }
	    };
        
        var page_name = "EDIT";
        var site_name = OptionService.setSiteTitle(page_name);
        OptionService.setCurrentNav("");
    }
]);


fireblogAdminControllers.controller('ArchiveCtrl', ['$scope', "BlogService", "OptionService",
    function ($scope, BlogService, OptionService){
        $scope.blogs = BlogService.getAll();

        $scope.deleteBlog = function(blog) {
            $scope.blogs.$remove(blog);
        }
        
        var page_name = "ARCHIVES";
        var site_name = OptionService.setSiteTitle(page_name);
        OptionService.setCurrentNav("archives");
    }
]);

fireblogAdminControllers.controller('LoginCtrl', ['$scope', "$window", "AuthService", "OptionService",
    function ($scope, $window, AuthService, OptionService){
        $scope.isLoggedIn = AuthService.isLoggedIn();
        $scope.AuthService = AuthService;

        if($scope.isLoggedIn){
            $window.location.href = "#/";
        }

        
        var page_name = "LOGIN";
        var site_name = OptionService.setSiteTitle(page_name);
        OptionService.setCurrentNav("");
    }
]);