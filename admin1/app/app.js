'use strict';

/* App Module */

var fireblogAdminApp = angular.module('fireblogAdminApp', [
    'ngRoute',
    'firebase',
    
    'fireblogAdminControllers',
    'fireblogAdminServices',
]);

fireblogAdminApp.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: '../../admin/template/archives.html',
			controller: 'ArchiveCtrl',
			resolve: {
          		permission: function (AuthService) {
            		return AuthService.permissionCheck();
            	}
          	},
		}).
		when('/login', {
			templateUrl: '../../admin/template/login.html',
			controller: 'LoginCtrl',
		}).
		when('/p=:blogId', {
			templateUrl: '../../admin/template/blog-detail.html',
			controller: 'BlogDetailCtrl',
			resolve: {
          		permission: function (AuthService) {
            		return AuthService.permissionCheck();
            	}
          	},
		}).
		when('/archives', {
			templateUrl: '../../admin/template/archives.html',
			controller: 'ArchiveCtrl',
			resolve: {
          		permission: function (AuthService) {
            		return AuthService.permissionCheck();
            	}
          	},
		}).
		when('/edit=:blogId', {
			templateUrl: '../../admin/template/blog-edit.html',
			controller: 'BlogEditCtrl',
			resolve: {
          		permission: function (AuthService) {
            		return AuthService.permissionCheck();
            	}
          	},
		}).
		when('/post', {
			templateUrl: '../../admin/template/blog-post.html',
			controller: 'BlogPostCtrl',
			resolve: {
          		permission: function (AuthService) {
            		return AuthService.permissionCheck();
            	}
          	},
		}).
		otherwise({
			redirectTo: '/'
		});
});