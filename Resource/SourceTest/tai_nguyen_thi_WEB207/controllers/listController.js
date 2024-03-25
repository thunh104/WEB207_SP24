window.listController = function($scope, $http){
    $scope.titleList = "Danh sách sản phẩm";
    const apiProduct = 'http://localhost:3000/product';
    function getAll(){
        $http.get(apiProduct).then(function(response){
            if(response.status == 200){
                $scope.listProduct = response.data;
            } else {
                alert("Lấy dữ liệu không thành công !");
            }
        })
    }
    getAll();

    $scope.deleteProduct = function(deleteProductID){
        let confirm = window.confirm("Bạn có muốn xóa sản phẩm này không ?");
        if(confirm){
            $http.delete(
                `${apiProduct}/${deleteProductID}`
            ).then(function(response){
                if(response.status == 200){
                    alert("Xóa sản phẩm thành công !");
                    getAll();
                }
            })
        }
    }
}