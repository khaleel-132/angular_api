var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/data", {
        templateUrl : "api/data.php"
    })
   
});
function getResultsPage(){
    $http({
        url: URL + 'api/data.php',
        method: 'GET'
     }).then(function(res){
        $scope.data = res.data.data;
     });
}