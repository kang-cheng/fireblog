'use strict';

/* App Module */

var fireblogApp = angular.module('fireblogApp', [
    'ngRoute',
    'firebase',
    
    'fireblogControllers',
    'fireblogServices',
]);

fireblogApp.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: '../template/blog-list.html',
			controller: 'BlogListCtrl'
		}).
		when('/p=:blogId', {
			templateUrl: '../template/blog-detail.html',
			controller: 'BlogDetailCtrl'
		}).
		when('/archives', {
			templateUrl: '../template/archives.html',
			controller: 'ArchiveCtrl'
		}).
		when('/cats', {
			templateUrl: '../template/cat-all.html',
			controller: 'CatAllCtrl'
		}).
		when('/tags', {
			templateUrl: '../template/tag-all.html',
			controller: 'TagAllCtrl'
		}).
		when('/edit=:blogId', {
			templateUrl: '../template/blog-edit.html',
			controller: 'BlogEditCtrl'
		}).
		when('/post', {
			templateUrl: '../template/blog-post.html',
			controller: 'BlogPostCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
});