var app = angular.module('directiveWorkshop');

 app.directive('pending', function(){
    return {

    // 	restrict: 'AE',
    // 	scope: {},
    // 	link: function(){
    //   //Code Here
    // }
    	restrict: 'A',
    	scope: {
    		request: '&'
    	},
    	link: function(scope, elem, attrs){
      	elem.click(function () {
      		angular.element('#loading').show();
      		scope.request().then(function() {
      			angular.element('#loading').hide();
      		})
      	});
    	}
  	}
  });

