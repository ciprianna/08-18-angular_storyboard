var storyApp = angular.module('storyApp', ['ui.router'])

storyApp.config([
  '$stateProvider',
  '$urlRouteProvider',
  function($stateProvider, $urlRouteProvider) {
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
    $urlRouteProvider.otherwise('home');
  }
])

storyApp.controller('TopStoriesCtrl', [
  '$scope',
  'stories',
  function($scope, stories){
    $scope.stories = stories.stories;
    $scope.addStory = function(){
      if($scope.title === '' || !$scope.title){return;}
      $scope.stories.push({title: $scope.title, upvotes: 0,
      comments: [
        {author: 'Cats McGats', body: 'Great story!'},
        {author: 'Kittens McJittens', body: 'Love this one!'}
      ]})
      $scope.title = '';
    };
    $scope.incrementUpvotes = function(story){
      story.upvotes += 1;
    };
}]);

storyApp.controller('StoryCtrl', [
  '$scope',
  '$stateParams',
  'stories',
  function($scope, $stateParams, stories){
    $scope.story = stories.stories[$stateParams]
  }
]);

storyApp.factory('stories', [function(){
  var storyfuncs = {
    stories: []
  }
  return storyfuncs;
}]);
