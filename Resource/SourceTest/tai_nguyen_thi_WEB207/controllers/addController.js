window.addController = function ($scope, $http, $location) {
    $scope.titleAdd = "Chỉnh sửa thông tin sản phẩm";
    const apiProduct = 'http://localhost:3000/product';
    $scope.createProduct = function () {
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
            let newProduct = {
                ma_sp: $scope.product.ma_sp,
                ten: $scope.product.ten,
                loai: $scope.product.loai,
                gia: $scope.product.gia
            }
            $http.post(
                apiProduct,
                newProduct
            ).then(function (response) {
                if (response.status == 201) {
                    alert("Thêm sản phẩm mới thành công !");
                    $location.path('/list-product');
                }
            })
        }
    }
}