angular.module("joinCIApp",["selectboxCtrl"]).controller('selectboxCtrl', function ($scope) {
$scope.titlelist = [{
"name": "HR-Manager"
}, {
"name": "HR-Staff"
}];
$scope.checkselection = function () {
if ($scope.userSelect != "" && $scope.userSelect != undefined)
$scope.msg = 'Selected Value: '+$scope.userSelect;
else
$scope.msg = 'Please Select Dropdown Value';
}
$scope.competencylist = [{
"name": "CI Web"
}, {
"name": "CI RIA"
}];
$scope.checkselection = function () {
if ($scope.competencySelect != "" && $scope.competencySelect != undefined)
$scope.msg = 'Selected Value: '+$scope.competencySelect;
else
$scope.msg = 'Please Select Dropdown Value';
}

});