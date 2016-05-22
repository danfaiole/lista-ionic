angular.module('app.controllers', [])

.controller('contactDetailsCtrl', function($scope, $cordovaSQLite) {


})

.controller('newContactCtrl', function($scope, $cordovaSQLite) {
    $scope.name = "";
    $scope.email = "";
    $scope.phone = "";
    $scope.insert = function() {
    var query = "INSERT INTO contatos (name, email, phone) VALUES (?, ?, ?)";
    $cordovaSQLite.execute(db, query, [$scope.name, $scope.email, $scope.phone]).then(function(result) {
      console.log("INSERTED ---> " + result.insertId);
    }, function(error) {
      console.log(error);
    })
  }
})

.controller('contactsCtrl', function($scope, $cordovaSQLite) {
  $scope.contacts = []
  $cordovaSQLite.execute(db, 'select name from contatos', []).then(function(result) {
    if (result.rows.length > 0) {
      for(var i = 0; i < result.rows.length; i++) {
        $scope.contacts.push(
          {name: resuls.rows.item(i).name}
        )
      }
    }
  })
})
