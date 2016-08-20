exports = {fmtDs};
var _ds;
/**
 * return array of string
 */
function fmtDs(ds) {
    _ds = ds;
    let h1 = fnd_h1();
    let h2 = fnd_h2();
    let h3 = h1;
    let lines = fnd_lines();
    let o = [];
    o.push(h1,h2,h3,lines);
    return o;
}

function fnd_h1() {
    return "";
}

function fnd_h2() {
    return "";
}

function fnd_lines() {
    return "";
}

var a = fmtDs([[1,2,3],[3,4,5],[3,4,"sdfsdf"]]);
debugger;