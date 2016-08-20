exports = {fmtDs};
'use strict';
var _ds;
/**
 * return array of string
 */
function fmtDs(ds) {
    _ds = ds;
    let H2="";
    let fld_padded = ['']
    let fld_ = fld_padded.join(' | ');
    let H1 = '| ' + fld_ + ' |';
    let H3 = H1;
    let Lines =["a","b"];
    let O = [];
    O.push(H1,H2,H3,Lines);
    return O;
}

var a = fmtDs([[1,2,3],[3,4,5],[3,4,"sdfsdf"]]);
debugger;