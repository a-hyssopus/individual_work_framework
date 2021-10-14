app.controller('productsCtrl', function($scope) {
    $scope.services = [
        { "title": "Консультация терапевта", "price": 250, "image": "images/services/terapevt.jpg" },
        { "title": "Хирургические услуги", "price": 800, "image": "images/services/surgery.jpg" },
        { "title": "Стоматологические услуги", "price": 2500, "image": "images/services/dentist.jpg" },
        { "title": "Гигиеническая стрижка", "price": 800, "image": "images/services/groomer.jpg" },
        { "title": "Стационар-гостиница", "price": 3000, "image": "images/services/hostel.jpg" },
        { "title": "Лабораторные исследования", "price": 2000, "image": "images/services/analises.jpeg" },
        { "title": "УЗИ сердца", "price": 1500, "image": "images/services/usg.jpg" },
        { "title": "ЭхоКГ сердца", "price": 1550, "image": "images/services/usg.jpg" },
        { "title": "ЭКГ", "price": 1450, "image": "images/services/ecg.jpg" },
          ];

    $scope.inputLogin = "";
    $scope.inputPass = "";

    $scope.login = "Dasha";
    $scope.password = "goshakar";
    $scope.isSignIn = false;
    $scope.editing = false;

    $scope.signIn = function() {
        if ($scope.inputLogin === $scope.login) {
            if ($scope.inputPass === $scope.password) {
                $scope.isSignIn = true;
                document.getElementById('myModal').style.display = "none"
            }
        }
    };

    $scope.removeProduct = function(itemTitle) {
        const index = $scope.services.findIndex(x => x.title === itemTitle);
        $scope.services.splice(index, 1);
    }

    $scope.addNewService = function() {
        newService = {
            title: "Unknown",
            price: 0,
            image: "images/logo/logo.jpg"
        }
        $scope.services.push(newService);
    }

    $scope.orderByMe = function(item) {
        $scope.myOrderBy = item;
        $scope.reverseOrder();
    }

    $scope.myReverseBy = false;
    $scope.reverseOrder = function() {
        $scope.myReverseBy = !($scope.myReverseBy);
    }
});
