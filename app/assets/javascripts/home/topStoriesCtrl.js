angular.module('storyApp')
.controller('TopStoriesCtrl', [
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
