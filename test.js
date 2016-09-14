/**
 * Created by jabbar on 9/14/16.
 */
var coord = require('./coord');

var mecator = require("./mercator");

var lnglat = mercatorToLngLat({lat: 4825923.77, lng:12958175});
console.log(lnglat);