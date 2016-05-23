angular.module('app.controllers', [])

.controller('contactDetailsCtrl', function($scope, $stateParams ) {
  $scope.name = contacts[$stateParams.id].name
  $scope.email = contacts[$stateParams.id].email
  $scope.phone = contacts[$stateParams.id].phone
})

.controller('newContactCtrl', function($scope) {
    $scope.name = "";
    $scope.email = "";
    $scope.phone = "";
    $scope.insert = function() {
      id = contacts.length == undefined ? 1 : contacts.length + 1;
      contacts[id] = {name: this.name, email: this.email, phone: this.phone, id: id}

      this.name = "";
      this.email = "";
      this.phone = "";
  }
})

.controller('contactsCtrl', function($scope) {
  $scope.contacts = contacts
})
