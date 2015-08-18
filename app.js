var storyApp = angular.module('storyApp', [])

storyApp.controller('StoryCtrl', function($scope){
  $scope.stories = [
    {title: 'Chamber', author: 'JK', upvotes: 5},
    {title: 'Goblet', author: 'JK', upvotes: 15},
    {title: 'Prince', author: 'JK', upvotes: 25}
  ];
  $scope.addStory = function(){
    if($scope.title === '' || !$scope.title){return;}
    $scope.stories.push({title: $scope.title, upvotes: 0})
    $scope.title = '';
  };
  $scope.incrementUpvotes = function(story){
    story.upvotes += 1;
  }
})
