var storyApp = angular.module('storyApp', [])

storyApp.controller('StoryCtrl', function($scope){
  $scope.stories = [
    {title: 'Chamber', author: 'JK', upvotes: 5},
    {title: 'Goblet', author: 'JK', upvotes: 15},
    {title: 'Prince', author: 'JK', upvotes: 25}
  ];
  $scope.addStory = function(){
    $scope.stories.push({title: 'Deathly', author: 'JK', upvotes: 0})
  };
})
