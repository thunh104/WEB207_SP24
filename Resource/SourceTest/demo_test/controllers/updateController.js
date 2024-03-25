window.updateController = function ($scope, $http, $routeParams, $location) {
    $scope.titleUpdate = "Chỉnh sửa thông tin bài viết";
    const apiPost = 'http://localhost:3000/post';
    let PostID = $routeParams.id;
    $http.get(`${apiPost}/${PostID}`).then(function (response) {
        if (response.status == 200) {
            $scope.post = {
                id: response.data.id,
                tieu_de: response.data.tieu_de,
                noi_dung: response.data.noi_dung,
                tac_gia: response.data.tac_gia,
                the_loai: response.data.the_loai,
                ngay_dang: new Date(response.data.ngay_dang)
            }
        }
    });

    $scope.updatePost = function () {
        let flag = true;
        $scope.check = {
            tieu_de: false,
            noi_dung: false,
            tac_gia: false,
            the_loai: false,
            ngay_dang: false
        }
        if (!$scope.post || !$scope.post.tieu_de) {
            flag = false;
            $scope.check.tieu_de = true;
        }
        if (!$scope.post || !$scope.post.noi_dung) {
            flag = false;
            $scope.check.noi_dung = true;
        }
        if (!$scope.post || !$scope.post.tac_gia) {
            flag = false;
            $scope.check.tac_gia = true;
        }
        if (!$scope.post || !$scope.post.the_loai) {
            flag = false;
            $scope.check.the_loai = true;
        }
        if (!$scope.post || !$scope.post.ngay_dang) {
            flag = false;
            $scope.check.ngay_dang = true;
        }

        if (flag) {
            let updateP = {
                tieu_de: $scope.post.tieu_de,
                noi_dung: $scope.post.noi_dung,
                tac_gia: $scope.post.tac_gia,
                the_loai: $scope.post.the_loai,
                ngay_dang: $scope.post.ngay_dang
            }
            $http.put(
                `${apiPost}/${PostID}`,
                updateP
            ).then(function (response) {
                if (response.status == 200) {
                    alert("Chỉnh sửa thông tin bài viết mới thành công !");
                    $location.path('/list');
                }
            });
        }
    }
}