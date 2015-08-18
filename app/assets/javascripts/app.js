angular.module('storyApp', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'TopStoriesCtrl'
      })
      .state('stories', {
        url: '/stories/{id}',
        templateUrl: 'story/_stories.html',
        controller: 'StoryCtrl'
      })

    $urlRouterProvider.otherwise('home');
  }
]);
