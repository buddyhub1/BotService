'use strict'
var checkEmpty = function(arg) {
    if (typeof(arg) == 'undefined' || arg == null || arg == '') {
        return true
    } else {
        return false;
    }
}
module.exports.checkEmpty = checkEmpty;