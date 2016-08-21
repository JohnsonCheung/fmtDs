
'use strict';
const require_itm = require('./require_itm.js')
debugger
const [$zip,$pad] = require_itm('./util.js','$zip,$pad');
debugger
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
let wdt_col_ay = (fldNmAy) => fldNmAy.map(wdt_col)
let wdt_col_$i = (i) => 1
let wdt_hdr_ay = () => hdr_val(i).length
let z_pad_ay = (ay,wdt_ay) => $zip(ay,wdt_ay).reduce(z_pad_ay_reduce,[])   
let z_pad_ay_$reduce = (prv, cur) => { const [v,w]=cur, padded = pad(v,w,align); prvVal.push(padded); return prvVal }
let fmtDt = dt => {const w = wdt_ay(dt), {f=fldNm_ay,d=dr_ay} = dt, h1=lin_h1(f,w), h2=lin_h2(w), x = lin_bdy(d,w); return $ay_add(h1,h2,h1,x,h2) }
let export1 = () => exports = {fmtDt}
let test = () => require('./t/test.js')
module.parent ? export1() : test()