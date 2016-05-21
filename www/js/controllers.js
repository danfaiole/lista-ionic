angular.module('app.controllers', [])

.controller('contactDetailsCtrl', function($scope) {

})

.controller('newContactCtrl', function($scope) {
  $scope.createContact = function(contact){
    var query = "insert into contato(name, email, phone) values ('"+contact.name+"', '"+contact.email+"', '"+contact.phone+"')";
    //$scope.contact['name'] = '';
    //console.log(query)
    $cordovaSQLite.execute(db, query, []).then(function(res) {
        console.log("INSERT ID -> " + res.insertId);
    }, function (err) {
        alert(err);
    });
  }
})

.controller('contactsCtrl', function($scope) {
  $scope.contacts = [];

  $cordovaSQLite.execute(db, 'select name from contato', []).then(function(res) {
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        $scope.contacts.push(
          {name: res.rows.item(i).name}
        )
      }
    }
  }, function (err) {
    alert(err)
  });
})
