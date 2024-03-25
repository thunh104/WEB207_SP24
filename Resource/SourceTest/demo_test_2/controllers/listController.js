window.listController = function ($scope, $http) {
    $scope.titleList = "Danh sách nhân viên";
    const api = 'http://localhost:3000/staff';
    function getAll() {
        $http.get(api).then(function (response) {
            if (response.status == 200) {
                $scope.listStaff = response.data;
            } else {
                alert("Lấy dữ liệu không thành công !");
            }
        })
    };
    getAll();

    $scope.deleteStaff = function (deleteStaffID) {
        let confirm = window.confirm("Bạn có muốn xóa nhân viên này không ?");
        if (confirm) {
            $http.delete(
                `${api}/${deleteStaffID}`
            ).then(function (response) {
                if (response.status == 200) {
                    alert("Xóa nhân viên thành công !");
                    getAll();
                }
            });
        }
    }
}