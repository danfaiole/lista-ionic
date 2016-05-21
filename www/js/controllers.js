angular.module('app.controllers', [])

.controller('contactDetailsCtrl', function($scope) {

})

.controller('newContactCtrl', function($scope) {
  $scope.createContact = function(contact){
    var query = "insert into contato(name, email, phone) values ('"+contact.name+"', '"+contact.email+"', '"+contact.phone+"')";
    db.transaction(function (tx) {
        tx.executeSql(query, [], function(tx, res) {
          console.log('inseriu')
        });
    });
  }
})

.controller('contactsCtrl', function($scope) {
  $scope.contacts = [];

  db.transaction(function (tx) {
      tx.executeSql("select name from contato", [], function(tx, results) {
          if(results.rows.length > 0) {
              for(var i = 0; i < results.rows.length; i++) {
                $scope.contacts.push(
                  {name: results.rows.item(i).name}
                )
              }
          }
      });
  });
})
