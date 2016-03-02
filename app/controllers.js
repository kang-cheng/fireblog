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
        });
    }
]);


fireblogControllers.controller('BlogPostCtrl', ['$scope', "OptionService", "$window",
	function ($scope, OptionService, $window){
		$scope.title = "";
		$(editor.getElement('editor').body).html("");
		$($(editor.getElement('previewer').body).children()[0]).html("");
		$scope.newBlog = function() {
            var raw_content = $(editor.getElement('editor').body).html();
            editor.preview();
            var content = $($(editor.getElement('previewer').body).children()[0]).html();
            if( $scope.title != "" && raw_content != ""){
                var blogsRef = new Firebase("https://github-pages.firebaseio.com/blogs/");
                var date = new Date().getTime();
                var id = date;
                blogsRef.child(""+id).set({
                    title: $scope.title,
                    content: content,
                    raw_content: raw_content,
                    date: date,
                    snippet: ""
                });
                $scope.title = "";
                $(editor.getElement('editor').body).html("")
				$($(editor.getElement('previewer').body).children()[0]).html("");
                $window.location.href = "#/p="+id
            }
	    };
        
        var page_name = "NEW";
        var site_name = OptionService.setSiteTitle(page_name);
    }
]);


fireblogControllers.controller('BlogEditCtrl', ['$scope', "OptionService", "$window", "$firebaseObject", "$sce", "$routeParams",
	function ($scope, OptionService, $window, $firebaseObject, $sce, $routeParams){
        var blogRef = new Firebase("https://github-pages.firebaseio.com/blogs/"+$routeParams.blogId);
        var blog =  $firebaseObject(blogRef);

		blog.$loaded()
		  .then(function(data) {
	  		$scope.blog = data;
			$scope.title = $scope.blog.title;
	        $(editor.getElement('editor').body).html(data.raw_content);

		  })
		  .catch(function(error) {
		    console.error("Error:", error);
		  });
		$scope.editBlog = function() {
            var raw_content = $(editor.getElement('editor').body).html();
            var content = $($(editor.getElement('previewer').body).children()[0]).html();
            if( $scope.title != "" && raw_content != ""){
                var date = new Date().getTime();
                blog.title = $scope.title;
                blog.content = content;
                blog.raw_content = raw_content;
                blog.date = date;
                blog.$save();
                $(editor.getElement('editor').body).html("");
                $window.location.href = "#/p="+blog.$id;
            }
	    };
        
        var page_name = "EDIT";
        var site_name = OptionService.setSiteTitle(page_name);
    }
]);