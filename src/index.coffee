'use strict'
http = require 'http'

module.exports = (ndx) ->
  if ndx.host
    ndx.app.get '/api/keep-awake', (req, res) ->
      res.end 'hi'
    setInterval ->
      http.get ndx.host + '/api/keep-awake'
    , 5 * 60 * 1000