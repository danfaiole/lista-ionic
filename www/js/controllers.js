angular.module('app.controllers', [])

.controller('contactDetailsCtrl', function ($scope, $stateParams) {
    $scope.id =  contacts[$stateParams.id].id
    $scope.name = contacts[$stateParams.id].name
    $scope.email = contacts[$stateParams.id].email
    $scope.phone = contacts[$stateParams.id].phone
})

    .controller('newContactCtrl', function($scope) {
    $scope.name = "";
    $scope.email = "";
    $scope.phone = "";
    $scope.insert = function() {
      id = contacts.length;
      contacts.push({name: this.name, email: this.email, phone: this.phone, id: id})

      this.name = "";
      this.email = "";
      this.phone = "";
  }
})

.controller('contactsCtrl', function ($scope) {
    $scope.contacts = contacts
})

.controller('contactEditCtrl', function ($scope, $stateParams) {
    $scope.insert = function () {
        contacts[$stateParams.id].name = this.name;
        contacts[$stateParams.id].email = this.email;
        contacts[$stateParams.id].phone = this.phone;
    }

    this.name = "";
    this.email = "";
    this.phone = "";
})