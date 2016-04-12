/**
 * Created by ashu on 6/4/16.
 */
app.service('mainService',['$http', function($http){



    var urlBase = 'http://localhost:10000/convert';

    this.sendUrl = function (weburl) {

      console.log('service called' ,  weburl)

      return $http({
          method: 'GET',
          url: urlBase,
          params : {
            weburl : weburl
          }
        }
      )
    }



}]);
