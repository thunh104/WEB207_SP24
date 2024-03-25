window.detailController = function($scope, $http, $routeParams){
    $scope.titleDetail = "Xem thông tin nhân viên";
    const api = 'http://localhost:3000/staff';
    let staffID = $routeParams.id;
    $http.get(
        `${api}/${staffID}`
    ).then(function(response){
        if(response.status == 200){
            $scope.staff = {
                id: response.data.id,
                hoTen: response.data.hoTen,
                sdt: response.data.sdt,
                email: response.data.email,
                chuc_vu: response.data.chuc_vu,
                ngay_sinh: new Date(response.data.ngay_sinh)
            }
        }
    });
}