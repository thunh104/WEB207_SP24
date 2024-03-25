window.updateController = function ($scope, $http, $location, $routeParams) {
    $scope.titleUpdate = "Chỉnh sửa thông tin sản phẩm";
    const apiProduct = 'http://localhost:3000/product';
    let productID = $routeParams.id;
    $http.get(
        `${apiProduct}/${productID}`
    ).then(function (response) {
        if (response.status == 200) {
            $scope.product = {
                id: response.data.id,
                ma_sp: response.data.ma_sp,
                ten: response.data.ten,
                loai: response.data.loai,
                gia: response.data.gia
            }
        }
    });

    $scope.updateProduct = function () {
        let flag = true;
        $scope.check = {
            ma_sp: false,
            ten: false,
            loai: false,
            gia: false
        }
        if (!$scope.product || !$scope.product.ma_sp) {
            flag = false;
            $scope.check.ma_sp = true;
        }
        if (!$scope.product || !$scope.product.ten) {
            flag = false;
            $scope.check.ten = true;
        }
        if (!$scope.product || !$scope.product.loai) {
            flag = false;
            $scope.check.loai = true;
        }
        if (!$scope.product || !$scope.product.gia) {
            flag = false;
            $scope.check.gia = true;
        }

        let regex = /^\d+$/;
        let checkNum = regex.test($scope.product.gia);
        if (!checkNum) {
            flag = false;
            $scope.check.gia = true;
        }
        if (flag) {
            let editProduct = {
                ma_sp: $scope.product.ma_sp,
                ten: $scope.product.ten,
                loai: $scope.product.loai,
                gia: $scope.product.gia
            }
            $http.put(
                `${apiProduct}/${productID}`,
                editProduct
            ).then(function (response) {
                if (response.status == 200) {
                    alert("Chỉnh sửa thông tin sản phẩm thành công !");
                    $location.path('/list-product');
                }
            })
        }
    }
}