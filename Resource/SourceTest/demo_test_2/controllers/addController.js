window.addController = function($scope, $http, $location){
    $scope.titleAdd = "Thêm mới nhân viên";
    const api = 'http://localhost:3000/staff';
    $scope.createStaff = function(){
        let flag = true;
        $scope.check = {
            hoTen: false,
            sdt: false,
            email: false,
            chuc_vu: false,
            ngay_sinh: false
        }

        if(!$scope.staff || !$scope.staff.hoTen){
            flag = false,
            $scope.check.hoTen = true;
        }
        if(!$scope.staff || !$scope.staff.sdt){
            flag = false,
            $scope.check.sdt = true;
        }
        if(!$scope.staff || !$scope.staff.email){
            flag = false,
            $scope.check.email = true;
        }
        if(!$scope.staff || !$scope.staff.chuc_vu){
            flag = false,
            $scope.check.chuc_vu = true;
        }
        if(!$scope.staff || !$scope.staff.ngay_sinh){
            flag = false,
            $scope.check.ngay_sinh = true;
        }

        let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        let checkEmail = regexEmail.test($scope.check.email);
        if(!checkEmail){
            flag = false,
            $scope.check.email = true;
        }

        let regexPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        let checkPhone = regexPhone.test($scope.check.sdt);
        if(!checkPhone){
            flag = false,
            $scope.check.sdt = true;
        }

        if(flag){
            let newStaff = {
                hoTen: $scope.staff.hoTen,
                sdt: $scope.staff.sdt,
                email: $scope.staff.email,
                chuc_vu: $scope.staff.chuc_vu,
                ngay_sinh: $scope.staff.ngay_sinh
            }
    
            $http.post(
                api,
                newStaff
            ).then(function(response){
                if(response.status == 201){
                    alert("Thêm nhân viên mới thành công !");
                    $location.path('/list');
                }
            });
        }
    }
}