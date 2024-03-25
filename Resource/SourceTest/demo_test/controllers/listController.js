window.listController = function($scope, $http, $routeParams){
    $scope.titleList = "Danh sách bài viết";
    const apiPost = 'http://localhost:3000/post';
    function getAll(){
        $http.get(apiPost).then(function(response){
            if(response.status == 200){
                $scope.listPost = response.data
            } else {
                alert("Lấy dữ liệu không thành công !");
            }
        });
    }
    getAll();

    $scope.deletePost = function(deletePostID){
        let confirm = window.confirm("Bạn có chắc chắn muốn xóa bài viết này không ?");
        if(confirm){
            $http.delete(
                `${apiPost}/${deletePostID}`
            ).then(function(response){
                if(response.status == 200){
                    alert("Xóa thành công bài viết !");
                    getAll();
                }
            })
        }
    }
}