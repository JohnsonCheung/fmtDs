exports = {fmtDt};
var $zip2,$max; { let a = require('./util.js'); var {$zip2,$max} = a }
'use strict';
//let $zip2 = (ay1,ay2) => []
//let $max = (...p) => {let n=p.length; if(n===0||n===1)return; var o=p[0]; for(var i=1;i<n;i++) o = o>p[i]?o:p[i]; return o }
let ALIGN_LEFT = 1
let ALIGN_CENTRE = 2
let ALIGN_RIGHT = 3
let bdyLinAy_padded = () => ['']
let h1_ay =() => ['']
let h1_fldAy_padded = (wdt_ay) => ['']
let h2_ay = () => [""]
let h2_fldAy = () => []
let hdr_val = (i) => typeof fld_ay(i) ==='string' ? fld_ay(i).length : ''
let lin_bdy = (dr_ay,wdt_ay) => bdyLinAy_padded(dr_ay,wdt_ay).join(sep_lin())
let lin_h1 = (wdt_ay) => {const ay = lin_h1_fld_ay; return z_pad_ay(ay,wdt_ay).join(sep_col); }
let lin_h2 = (fldNm_ay, wdt_ay) => z_pad_ay(fldNm_ay,wdt_ay).join(sep_col())
let lin_h1_fld_ay = (wdt_ay) => ['']
let sep_col =() =>' | '
let sep_lin =() => '\r\n'
let wdt_ay_$reduce = (prv,cur) => { const [col,hdr] = cur; prv.push($max(col,hdr)); return p}
let wdt_ay = (dt) => $zip(wdt_col_ay(), wdt_hdr_ay()).reduce(wdt_ay_$reduce,[]) 
let wdt_col_ay = () => fldNmAy().map(wdt_col)
let wdt_col_$i = (i) => 1
let wdt_hdr_ay = () => hdr_val(i).length
let z_pad_ay = (ay,wdt_ay) => $zip2(ay,wdt_ay).reduce(z_pad_ay_reduce,[])   
let z_pad_ay_$reduce = (prv, cur) => { const [v,w]=cur, padded = pad(v,w,align); prvVal.push(padded); return prvVal }
let z_pad_val = (v,w,align) => {let a=1,b=2; return''}
let z_pad_val_$normalize_align = (align) => typeof align==='string' ? z_pad_val_$normalize_align1(align) : ALIGN_LEFT
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
if(!module.parent) test();