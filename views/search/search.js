angular.module('searchModule',[])
    .controller('searchCtrl',['$scope','$http','myService','$routeParams','$location',
        function($scope,$http,myService,$routeParams,$location){
            //page 当前页
            var page=Number($routeParams.page);
            console.log(page);
            var count=10;
            var start=(page-1)*count;
            var totalPage=0;
            var keyword=$routeParams.keyword;
            myService.myJsonp(myService.url+"v2/movie/search",{
                start: start,
                count: count,
                q: keyword
            },function(res){
                $scope.result=res;
                totalPage=Math.ceil(res.total/count);
                $scope.$apply();
            });
            $scope.changePage= function (type) {
                if(type=='next'){
                    //下一页
                    page=page-0+1;
                    if(page>totalPage){
                        page=totalPage;
                    }

                }else{
                    //上一页
                    page=page-1;
                    if(page<1){
                        page=1;
                    }

                }
                $location.path('/search/'+keyword+'/'+page);
            }

        }])




















//angular.module('searchModule',[])
//    .controller('searchCtrl',['$scope','$http','myService','$routeParams','$location',
//        function($scope,$http,myService,$routeParams,$location){
//            // $http({
//            // 	url: 'js/in_theaters.json',
//            // 	method: 'get',
//            // }).then(function(res){
//            // 	console.log(res);
//            // 	$scope.result=res.data;
//            // })
//
//            //start 起始元素
//            //count 返回结果的数量
//            // 当前页  每页显示条数      每页显示的信息
//            // 1       10              0-9
//            // 2       10              10-19
//            // 3       10              20-29
//            //page 当前页
//            var page=Number($routeParams.page);
//            var count=10;
//            var start=(page-1)*count;
//            var totalPage=0;
//            var keyword=$routeParams.keyword;
//            myService.myJsonp(myService.url+"/v2/movie/search",{
//                start: start,
//                count: count,
//                q:keyword
//            },function(res){
//                $scope.result=res;
//                totalPage=Math.ceil(res.total/count);
//                console.log(totalPage);
//                $scope.$apply();
//            });
//            $scope.changePage= function (type) {
//                if(type=='next'){
//                    //下一页
//                    page=page+1;
//                    console.log(page);
//                    if(page>totalPage){
//                        page=totalPage;
//                    }
//                    $location.path('/search/'+ keyword + '/' + page);
//
//                }else{
//                    //上一页
//                    page=page-1;
//                    if(page<1){
//                        page=1;
//                    }
//                    $location.path('/search/'+ keyword + '/' + page);
//
//                }
//                //$location.path('/search/'+keyword+'/'+page);
//
//            }
//
//        }])
