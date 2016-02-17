var esssApp = angular.module('esssApp', []);

esssApp.controller('HeadCtrl', function ($scope) {
  $scope.navLinks = [
    {'ref': '/esss-website/events.html',
     'title': 'Events'},
    {'ref': '/esss-website/about.html',
     'title': 'About us'},
    {'ref': '/esss-website/involved.html',
     'title': 'Get involved'},
    {'ref': '/esss-website/essef.html',
     'title': 'ESSEF'},
    {'ref': '/esss-website/opfair.html',
     'title': 'opFair'},
    {'ref': '/esss-website/merch.html',
	 'title': 'Merchandise'}
  ];
});