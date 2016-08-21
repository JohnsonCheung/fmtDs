'use strict';
const { zip, pad, ay_add} = require('./util.js')
const SEP_COL = ' | '
const SEP_LIN = '\r\n'
const bdyLinAy_padded = ()=>['']
const h1_ay = ()=>['']
const h1_fldAy_padded = (wdt_ay)=>['']
const h2_ay = ()=>[""]
const h2_fldAy = ()=>[]
const hdr_val = (i)=>typeof fld_ay(i) === 'string' ? fld_ay(i).length : ''
const lin_bdy = (dr_ay, wdt_ay)=>bdyLinAy_padded(dr_ay, wdt_ay).join(LIN_SEP)
const lin_h1 = (wdt_ay)=>{ const ay = lin_h1_fld_ay; return pad_ay(ay, wdt_ay).join(SEP_COL)}
const lin_h2 = (fldNm_ay, wdt_ay, align_ay)=>pad_ay(fldNm_ay, wdt_ay, align_ay).join(SEP_COL)
const lin_h1_fld_ay = (wdt_ay)=>['']
const wdt_ay_$reduce = (prv, cur)=>{const [col, hdr] = cur; prv.push($max(col, hdr)); return p}
const wdt_ay = (dt)=>$zip(wdt_col_ay(), wdt_hdr_ay()).reduce(wdt_ay_$reduce, [])
const wdt_col_ay = (fldNmAy)=>fldNmAy.map(wdt_col)
const wdt_col_$i = (i)=>1
const wdt_hdr_ay = ()=>hdr_val(i).length
const pad_ay = (ay, wdt_ay, align_ay)=>zip(ay, wdt_ay, align_ay).reduce(pad_ay_$reduce, [])
const pad_ay_$reduce = (p,c)=>{const[v,w,align]=c, padded = pad(v,w,align); p.push(padded); return p}
const fmtDt_$3 = (w,f,d)=>{const h1 = lin_h1(f, w),  h2 = lin_h2(w), x = lin_bdy(d, w); return [h1,h2,x]}
const fmtDt_$2 = dt=>{const w=wdt_ay(dt), f=dt.fldNm_ay, d = dt.dr_ay; return [w,f,d]}
const fmtDt_$1 = dt=>{const [w,f,d] = fmtDt_$2(dt); return fmtDt_$3(w,f,d) }
const fmtDt = dt=>{const[h1,h2,x]=fmtDt_$1(dt); return ay_add(h1, h2, h1, x, h1).join(SEP_LIN)}
exports.fmtDt = fmtDt  