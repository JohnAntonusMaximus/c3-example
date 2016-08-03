graphApp.controller('mainController',['$scope','$log', function($scope, $log){
    $scope.model = 'Main Controller';
    $log.info($scope.model);
}]);

graphApp.controller('activityController',['$scope', '$log', function($scope, $log){
    $scope.model = 'Activity Controller';
    $log.info($scope.model);
}]);

graphApp.controller('netPromoterController',['$scope', '$log', function($scope, $log){
    $scope.model = 'Net Promoter Controller';
    $log.info($scope.model);
}]);

graphApp.controller('reportsController',['$scope', '$log', function($scope, $log){
    $scope.model = 'Reports Controller';
    $log.info($scope.model);
}]);

graphApp.controller('understandingController',['$scope', '$log', function($scope, $log){
    $scope.model = 'Understanding Controller';
    $log.info($scope.model);
}]);

graphApp.controller('devicesController',['$scope', '$log', function($scope, $log){
    $scope.model = 'Devices Controller';
    $log.info($scope.model);
}]);

graphApp.controller('supportController',['$scope', '$log', function($scope, $log){
    $scope.model = 'Support Controller';
    $log.info($scope.model);
}]);