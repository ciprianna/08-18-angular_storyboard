angular.module('storyApp')
.controller('StoryCtrl', [
  '$scope',
  '$stateParams',
  'stories',
  function($scope, $stateParams, stories){
    $scope.story = stories.stories[$stateParams];
    $scope.addComment = function(){
      if($scope.body === ''){return;}
      $scope.story.comments.push({
        body: $scope.body,
        author_id: 'person'
      })
    }

  }
]);
