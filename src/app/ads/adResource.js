
app.factory('AdResource',['$resource', 'apiUrl', function ($resource, apiUrl) {
      var url = apiUrl + '/ads/:id';

      var AdResource = $resource(url, {adId:'@id'}, { queryAll: {method: 'GET', isArray: false}} );

      return AdResource;
  }]);
