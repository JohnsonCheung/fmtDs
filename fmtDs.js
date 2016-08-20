exports = {fmtDt};
'use strict';
let sep_lin = '\r\n'
let sep_col = ' | '
let wdt_ay = (dt) => [0];
let z_pad_ay_reduce = (prvVal, curVal) => { const v=curVal[0],w=curVal[1], padded = pad(v,w,align); prvVal.push(padded); return prvVal }
let $zip2 = (ay1,ay2) => []
let z_pad_ay = (ay,wdt_ay) => $zip2(ay,wdt_ay).reduce(z_pad_ay_reduce,[])   
let lin_h1 = (fld_ay,wdt_ay) => h1_fldAy_padded(fld_ay,wdt_ay).join(sep_lin)
let lin_h2 = (wdt_ay) => {let f = lin_h2_fld_ay(wdt_ay); return z_pad_ay(f).join(sep_lin) }
let lin_h2_fld_ay = (wdt_ay) => ['']
let lin_bdy = (dr_ay,wdt_ay) => bdyLinAy_padded(dr_ay,wdt_ay).join(sep_lin)
let bdyLinAy_padded = () => ['']
let h2_fldAy = () => []
let a = (1,2,3);
let z_pad_val = (v,w,align) => {let a=1,b=2; return''}
let bdy_ay = () => {}
let h1_ay =() => ['']
let h2_ay = () => [""]
let max = (...p) => {let n=p.length; if(n===0||n===1)return; var o=p[0]; for(var i=1;i<n;i++) o = o>p[i]?o:p[i]; return o }
let hdr_val = (i) => typeof fld_ay(i) ==='string' ? fld_ay(i).length : ''
let wdt_hdr = (i) => hdr_val(i).length
let wdt_col = (i) => max( wdt_hdr(i), wdt_dtaCol(i))
// return array of string
function fmtDt(dt) {
    let wdt = wdt_ay(dt)
    let fld = dt.fldNm_ay
    let quote = (s) => '| ' + s + ' |'
    let h1 = lin_h1(fld,wdt)
    let h2 = lin_h2(wdt)
    let o1 = quote(h2)
    let o2 = quote(h1)
    let ox = lin_bdy(fld,wdt); 
    let o = [];
    o.push(o1, o2, o1, ox, o1);
    return o
}
function test() {
    let fldNm_ay = ['col-a','col-b', 'col-c']
    let dr1 = [1,2,3]
    let dr2 = [3,4,5]
    let dr3 = ["sdf","skldf","lksd"]
    let dr_ay = [dr1,dr2,dr3]
    let a = fmtDt({fldNm_ay, dr_ay})
    debugger;
}
test();