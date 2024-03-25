var app = angular.module('my_app', ['ngRoute']);
app.controller('homeProductCtrl', function ($scope, $http) {
    
    var url =  'http://localhost:3000/chuyenbay';

    $scope.danhsachchuyenbay = [];
    $http({
        method: 'GET',
        url
    }).then(function (response) {
        console.log(response)
        $scope.danhsachchuyenbay = response.data;
    })

    // $scope.confirmclickdelete = function(id){
    //     let check = confirm("Bạn có muốn xóa không");
    //     if(check){
    //         $http({
    //             method:"DELETE",
    //             url: url + "/"+id
    //         }).then(function(){
    //             alert("Xóa Thành công")
    //         }).catch(function(){
    //             console.log("Lỗi APi")
    //         })
    //     }
    // }
})