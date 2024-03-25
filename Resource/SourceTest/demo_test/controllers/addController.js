window.addController = function($scope, $http, $location){
    $scope.titleAdd = "Thêm bài viết mới";
    $scope.createPost = function(){
        let flag = true;
        const apiPost = 'http://localhost:3000/post';
        $scope.check = {
            tieu_de: false,
            noi_dung: false,
            tac_gia: false,
            the_loai: false,
            ngay_dang: false
        }
        if(!$scope.post || !$scope.post.tieu_de){
            flag = false;
            $scope.check.tieu_de = true;
        }
        if(!$scope.post || !$scope.post.noi_dung){
            flag = false;
            $scope.check.noi_dung = true;
        }
        if(!$scope.post || !$scope.post.tac_gia){
            flag = false;
            $scope.check.tac_gia = true;
        }
        if(!$scope.post || !$scope.post.the_loai){
            flag = false;
            $scope.check.the_loai = true;
        }
        if(!$scope.post || !$scope.post.ngay_dang){
            flag = false;
            $scope.check.ngay_dang = true;
        }
        if(flag){
            let newPost = {
                tieu_de: $scope.post.tieu_de,
                noi_dung: $scope.post.noi_dung,
                tac_gia: $scope.post.tac_gia,
                the_loai: $scope.post.the_loai,
                ngay_dang: $scope.post.ngay_dang
            }
            $http.post(
                apiPost,
                newPost
            ).then(function(response){
                if(response.status == 201){
                    alert("Thêm bài viết mới thành công !");
                    $location.path('/list');
                }
            });
        }
    }
}