angular.module('directivePractice').controller("lessonCtrl",function($scope){
    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
    // $scope.test="two-way data binding!";
    $scope.announceDay = function(lesson,day){
        alert(`${lesson} is active on ${day}.`)
    };
    $scope.deleteLesson = function(index){
        console.log(index)
        $scope.lessons.splice(index, 1)
    }

});




// angular.module('directivePractice')
// .controller('lessonCtrl', function( $scope ) {

// 	$scope.announceDay = function( lesson, day ) {
// 		alert(lesson + ' is active on ' + day + '.');
// 	}

// 	$scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

// });
