window.detailController = function ($scope, $http, $routeParams) {
    $scope.titleDetail = "Chi tiết thông tin";
    let PostID = $routeParams.id;
    const apiPost = 'http://localhost:3000/post';
    $http.get(
        `${apiPost}/${PostID}`
    ).then(function (response) {
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
}