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
        console.error(err);
    });
  }
})

.controller('contactsCtrl', function($scope) {

})
