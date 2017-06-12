var myModule = angular.module('app.factory', []);

myModule.factory('VFRemotingFactory',function($q,$rootScope){  
  var factory = {};  
  factory.getData = function(searchText){  
     var deferred = $q.defer();      
      if(searchText == undefined){
        searchText = '';
      }
      Visualforce.remoting.Manager.invokeAction(  
        _remoteActions.getAllContactsByFilter, searchText, function(result){
            $rootScope.$apply(function(){  
              deferred.resolve(result);  
            }); 
          },{escape: false
        });
     return deferred.promise;  
  }  

  factory.getContactResultById = function(recordID){  
     var deferred = $q.defer();      
      if(recordID == undefined){
        return null;
      }
      Visualforce.remoting.Manager.invokeAction(  
        _remoteActions.getContactResultById, recordID, function(result){
            $rootScope.$apply(function(){  
              deferred.resolve(result);  
            }); 
          },{escape: false
        });
     return deferred.promise;  
  }  

  factory.saveContactChanges = function(record){  
     var deferred = $q.defer();      
      if(record == undefined){
        return null;
      }
      var recordJson = JSON.stringify(record);
      console.log(recordJson);
      Visualforce.remoting.Manager.invokeAction(  
        _remoteActions.saveContactChanges, recordJson, function(result){
            $rootScope.$apply(function(){  
              deferred.resolve(result);  
            }); 
          },{escape: false
        });
     return deferred.promise;  
  }  
  return factory;  
});