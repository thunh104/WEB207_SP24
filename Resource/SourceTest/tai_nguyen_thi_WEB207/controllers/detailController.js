window.detailController = function($scope, $http, $routeParams){
    $scope.titleDetail = "Thông tin chi tiết sản phẩm";
    const apiProduct = 'http://localhost:3000/product';
    let productID = $routeParams.id;
    $http.get(
        `${apiProduct}/${productID}`
    ).then(function(response){
        if(response.status == 200){
            $scope.product = {
                id: response.data.id,
                ma_sp: response.data.ma_sp,
                ten: response.data.ten,
                loai: response.data.loai,
                gia: response.data.gia
            }
        }
    });
}