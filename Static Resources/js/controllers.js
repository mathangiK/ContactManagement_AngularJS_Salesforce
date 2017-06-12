var myModule = angular.module('app.controllers', ['app.factory']);

myModule.controller('listViewController',function($scope, $location, VFRemotingFactory){  
  $scope.mcm = {};
  $scope.getFilteredData = function($event){
     if($scope.mcm.searchText.length > 1){
         var searchTxt = $scope.mcm.searchText;
         VFRemotingFactory.getData(searchTxt).then(function(result){  
             $scope.ContactData = result;  
         });
     }else{
         var searchTxt = $scope.mcm.searchText;
         VFRemotingFactory.getData().then(function(result){  
             $scope.ContactData = result;  
         });
     }
  };       

  VFRemotingFactory.getData().then(function(result){  
     $scope.ContactData = result;  
  });

  $scope.openDetail = function(recordId){
        $location.path('/detailView/'+recordId);
        console.log($location.path());
        $location.replace();
  }
});

myModule.controller('detailController',function($scope, $routeParams, VFRemotingFactory){  
  var recordId = $routeParams.recordID;
  VFRemotingFactory.getContactResultById(recordId).then(function(result){  
    $scope.contactResult = result;  
  });

  $scope.saveChanges = function(){
    VFRemotingFactory.saveContactChanges($scope.contactResult).then(function(result){  
      /*$ionicLoading.show({
        template: 'Successfully updated'
      });
      $timeout(function() {
        $ionicLoading.hide();
      }, 1000);*/
    });
  }
});
