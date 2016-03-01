'use strict';

/* App Module */

var fireblogApp = angular.module('fireblogApp', [
    'ngRoute',
    'firebase',
    
    'fireblogControllers',
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