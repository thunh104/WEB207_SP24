window.updateController = function($scope, $http, $location, $routeParams){
    $scope.titleUpdate = "Chỉnh sửa thông tin nhân viên";
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

    $scope.updateStaff = function(){
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
        let checkEmail = regexEmail.test($scope.staff.email);
        if(!checkEmail){
            flag = false;
            $scope.check.email = true;
        }

        let regexPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        let checkPhone = regexPhone.test($scope.staff.sdt);
        if(!checkPhone){
            flag = false,
            $scope.check.sdt = true;
        }

        if(flag){
            let updateStaffs = {
                hoTen: $scope.staff.hoTen,
                sdt: $scope.staff.sdt,
                email: $scope.staff.email,
                chuc_vu: $scope.staff.chuc_vu,
                ngay_sinh: $scope.staff.ngay_sinh
            }
    
            $http.put(
                `${api}/${staffID}`,
                updateStaffs
            ).then(function(response){
                if(response.status == 200){
                    alert("Chỉnh sửa thông tin nhân viên thành công !");
                    $location.path('/list');
                }
            });
        }
    }
}