graphApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/index', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/activity', {
            templateUrl: 'pages/activity.html',
            controller: 'activityController'
        })
        .when('/net-promoter', {
            templateUrl: 'pages/net-promoter.html',
            controller: 'netPromoterController'
        })
        .when('/reports', {
            templateUrl: 'pages/reports.html',
            controller: 'reportsController'
        })
        .when('/understanding', {
            templateUrl: 'pages/understanding.html',
            controller: 'understandingController'
        })
        .when('/devices', {
            templateUrl: 'pages/devices.html',
            controller: 'devicesController'
        })
        .when('/support', {
            templateUrl: 'pages/support.html',
            controller: 'supportController'
        })
});