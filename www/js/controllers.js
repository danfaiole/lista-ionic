angular.module('app.controllers', [])

.controller('contactDetailsCtrl', function($scope, $stateParams ) {
  console.log($stateParams.id)
})

.controller('newContactCtrl', function($scope) {
    /*$scope.name = "";
    $scope.email = "";
    $scope.phone = "";
    $scope.insert = function() {
    var query = "INSERT INTO contatos (name, email, phone) VALUES (?, ?, ?)";
    $cordovaSQLite.execute(db, query, [$scope.name, $scope.email, $scope.phone]).then(function(result) {
      console.log("INSERTED ---> " + result.insertId);
    }, function(error) {
      console.log(error);
    })
  }*/
})

.controller('contactsCtrl', function($scope) {
  
})
