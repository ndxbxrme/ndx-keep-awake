(function() {
  'use strict';
  var http;

  http = require('http');

  module.exports = function(ndx) {
    if (ndx.host) {
      ndx.app.get('/api/keep-awake', function(req, res) {
        return res.end('hi');
      });
      return setInterval(function() {
        return http.get('http://' + ndx.host + '/api/keep-awake');
      }, 5 * 60 * 1000);
    }
  };

}).call(this);

//# sourceMappingURL=index.js.map
