/**
 * Created by ashu on 6/4/16.
 */

app.controller('mainController' , ['$http','$scope','mainService' , 'scheduleService' ,  function($http , $scope , mainService , scheduleService){

  $scope.url;
  var weburl = '';
  var data = {};
  $scope.response = 'false'
  var filename  = ' '
  $scope.downloadlink = "http://localhost:10000/convert/download?name="
  $scope.viewlink = "http://localhost:10000/convert/view?name="
  $scope.scheduledate = new Date();
  $scope.showscheduler = false;
  var emailid = '';

  $scope.printdate = function (){

    console.log('date is ' , $scope.scheduledate);

  }


  $scope.getUrl = function(){

    weburl = $scope.url;
    console.log('this is the url' , weburl);




    mainService.sendUrl(weburl)
      .success(function(response){
        console.log('this is response' ,response);
        $scope.response = response;
        filename = response;

          $scope.response = 'true';
        $scope.downloadlink= $scope.downloadlink + filename
        $scope.viewlink= $scope.viewlink + filename
        console.log($scope.downloadlink);
      })



  }

  $scope.setConversion = function(){

   $scope.showscheduler = true;

  }


  $scope.schedulepdf = function(){

    data.url = $scope.url;
    data.email = $scope.emailid;
    data.time = $scope.scheduledate && $scope.scheduledate.toString();

  console.log('this is the object before' , data);
  console.log('this is the object after ' , data.time.toString());

    scheduleService.schedulepdf(data)
      .success(function(data){

        console.log('done');
      })
  }




}])

