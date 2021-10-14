const app = angular.module('myApp', []);
app.service('ageService', function () {
    this.check = function (x) {
        if (isNaN(x)) {
            return "";
        }
    }
});


app.directive("hhh", function() {
    return {
        template : "<p>Услуги клиники </p>"
    };
});

app.filter('myFilterAge', ['ageService', function (ageService) {
    return function (x) {
        return ageService.check(x);
    };
}]);

