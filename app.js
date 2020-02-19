
(function(){
'use strict';

//this binds my angular application
//with the html in index.html file
  angular.module('NameCalculator',[])

  .controller('NameCalculatorController',function($scope){
      $scope.name="";
      $scope.total=0;

      $scope.countVal=function(){
            var totalval=calCount(  $scope.name);
            $scope.total=totalval;
      };

function calCount(str){
    var totalstrval=0;
    for(var i=0;i<str.length;i++){

totalstrval+=str.charCodeAt(i);
    }
    return totalstrval;

}


  });
})();


(function(){
'use strict';

//this binds my angular application
//with the html in index.html file
  angular.module('project1',[])

  .controller('divController',function($scope){
      $scope.name="Punam";
      $scope.fun1=function(){

        return "hello!!!";
      }



  });
})();
