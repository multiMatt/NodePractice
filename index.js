var _ = require('lodash');
var jsonfile = require('jsonfile');

var file = 'data.json'

jsonfile.readFile(file, function(err, obj) {
  _.forEach(obj, value => {
    console.log(value);
  });
});