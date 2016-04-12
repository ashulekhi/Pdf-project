/**
 * Created by ashu on 7/4/16.
 */

app.service('scheduleService' , ['$http' , function($http){

  var urlBase = '/generatelater';

  this.schedulepdf = function(data){

    return $http.post(urlBase,data)

  }


}])
