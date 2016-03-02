'use strict';

/* Controllers */

var fireblogControllers = angular.module('fireblogControllers', []);

fireblogControllers.controller('OptionCtrl', ['$scope', "OptionService", 
	function ($scope, OptionService){
        $scope.option =  OptionService.basic();
    }
]);

fireblogControllers.controller('BlogListCtrl', ['$scope', "BlogService", "OptionService",
	function ($scope, BlogService, OptionService){
        $scope.current_page = 1;
        $scope.count = 0;
        $scope.perpage = 10;
        
        $scope.blogs = BlogService.getAll();
        
        $scope.blogs.$loaded().then(function () {
            //to make sure that $scope.blogs is already loaded, otherwise length doesn't exist
            $scope.count = $scope.blogs.length;
        });
        
        $scope.totalPage = function() {
            //if $scope.count==0, means at this moment the data hasn't been loaded.
            return $scope.count==0?1:Math.ceil($scope.count/$scope.perpage);
        }
        
        //currentN is the number of articles of the current page.
        $scope.currentN = function() {
            var n = $scope.count - ($scope.current_page-1)*$scope.perpage;
            return n>=10?10:n;
        }
        
        $scope.hasPrev = function() {
            return $scope.current_page==1?false:true;
        }
        
        $scope.hasNext = function() {
            return $scope.totalPage()==$scope.current_page?false:true;
        }
        
        $scope.prevPage = function() {
            if(($scope.current_page--)<1){
                $scope.current_page = 1;
            }
        }
        
        $scope.nextPage = function() {
            if(($scope.current_page++)>$scope.totalPage()){
                $scope.current_page = $scope.totalPage();
            }
        }
        
        $scope.range = function(n) {
            return new Array(n);
        };
        
        $scope.BlogService = BlogService;
        
        var page_name = "HOME";
        var site_name = OptionService.setSiteTitle(page_name);
        OptionService.setCurrentNav("home");
    }
]);


fireblogControllers.controller('BlogDetailCtrl', ['$scope', "BlogService", "OptionService", "$sce", "$routeParams",
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


fireblogControllers.controller('BlogPostCtrl', ['$scope', "OptionService", "BlogService", "$window",
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
                var date = new Date().getTime();
                var id = date;
                
                $scope.clearTags();
                $scope.clearTags();
                var cat = $scope.cat==""?"uncategorized":$scope.cat;
                var tags = $scope.tags;
                blogsRef.child(""+id).set({
                    title: $scope.title,
                    content: content,
                    raw_content: raw_content,
                    date: date,
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


fireblogControllers.controller('BlogEditCtrl', ['$scope', "OptionService", "BlogService", "$window", "$firebaseObject", "$sce", "$routeParams",
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
                var date = new Date().getTime();
                
                $scope.clearTags();
                $scope.clearTags();
                var cat = $scope.cat==""?"uncategorized":$scope.cat;
                var tags = $scope.tags;
                blog.title = $scope.title;
                blog.content = content;
                blog.raw_content = raw_content;
                blog.date = date;
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


fireblogControllers.controller('CatAllCtrl', ['$scope', "BlogService", "OptionService",
	function ($scope, BlogService, OptionService){
        $scope.cats = BlogService.getAllCats();
        
        var page_name = "CATEGORIES";
        var site_name = OptionService.setSiteTitle(page_name);
        OptionService.setCurrentNav("cats");
    }
]);
fireblogControllers.controller('TagAllCtrl', ['$scope', "BlogService", "OptionService",
	function ($scope, BlogService, OptionService){
        $scope.tags = BlogService.getAllTags();
        
        var page_name = "TAGS";
        var site_name = OptionService.setSiteTitle(page_name);
        OptionService.setCurrentNav("tags");
    }
]);
fireblogControllers.controller('ArchiveCtrl', ['$scope', "BlogService", "OptionService",
	function ($scope, BlogService, OptionService){
        $scope.blogs = BlogService.getAll();
        
        var page_name = "ARCHIVES";
        var site_name = OptionService.setSiteTitle(page_name);
        OptionService.setCurrentNav("archives");
    }
]);