var storyApp = angular.module('storyApp', ['ui.router'])

storyApp.config([
  '$stateProvider',
  '$urlRouteProvider',
  function($stateProvider, $urlRouteProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'StoryCtrl'
      });

    $urlRouteProvider.otherwise('home');
  }
])

storyApp.controller('StoryCtrl', [
  '$scope',
  'stories',
  function($scope, stories){
    $scope.stories = stories.stories;
    $scope.addStory = function(){
      if($scope.title === '' || !$scope.title){return;}
      $scope.stories.push({title: $scope.title, upvotes: 0})
      $scope.title = '';
    };
    $scope.incrementUpvotes = function(story){
      story.upvotes += 1;
    };
}]);

storyApp.factory('stories', [function(){
  var storyfuncs = {
    stories: []
  }
  return storyfuncs;
}]);
