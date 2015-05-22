function CustomerController($scope) {
    $scope.customers = [{CustomerId:1,CustomerName:'satya',City:'Edison',State:'NJ'}, {CustomerId:2,CustomerName:'john',City:'AT',State:'PA'}];
}

myApp.controller('CustomerController', CustomerController);
