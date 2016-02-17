var esssApp = angular.module('esssApp', []);

esssApp.controller('SliderCtrl', function ($scope) {
  $scope.slides = [
    {'img': '/esss-website/banner1.jpg',
     'align': 'center-align',
     'title': 'Welcome',
     'description': 'We are the Engineering Science Student Society of SFU.'},
    {'img': '/esss-website/banner2.jpg',
     'align': 'left-align',
     'title': 'Get involved',
     'description': 'Our Spring semester meetings are held Mondays at 1:30 in ASB 9705.'}
  ];
});