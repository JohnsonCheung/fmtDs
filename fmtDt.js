'use strict';
// const { zip, pad, ay_add} = require('./util.js')
const max = (...p) => {
    let n = p.length;
    if (n === 0 || n === 1) return;
    var o = p[0];
    for (var i = 1; i < n; i++) o = o > p[i] ? o : p[i];
    return o
}

//===========
const pad_ovr_flw=(s,l,w) => {}
const pad_spc=(l,w) => {}
const pad_half_spc1=(l,w) => {}
const pad_left=(s,l,w) => {}
const pad_right=(s,l,w) => {}
const pad_centre=(s,l,w) =>{}
const pad = (s, w, align) => {
    const l = s.length
    const ovr_flw = l>w
    if(ovr_flw)return pad_ovr_flw(s,l,w)
    switch(align) {
        case CENTRE: return pad_centre(s,l,w)
        case RIGHT: return pad_right(s,l,w)
        default: return pad_left(s,l,w)
    }
}
const zip = (...ay) => {
    const ay1 = ay.map(ay=>Array.isArray(ay)?ay:[]) // 
    const nEle = ay1.reduce((rslt,ay)=>max(rslt,ay.length),0)
    const ele = (idx) => ay.map(ay=>ay[idx])
    const a = []
    a[nEle-1]=null
    return a.map((_,idx)=>ele(idx))
}

const ay_maxLen=(strAy) =>  strAy.reduce((rslt,itm)=> max(rslt,itm.length),0)
const pipe = (i,...f) => f.reduce((c,p)=>c(p),i)
const branch = (i, ...f) => f.reduce((c, p) => p.push(c(i), []))
//=================================================================
const SEP_COL = ' | '
const SEP_LIN = '\r\n'
const bdy_$lin = (zip) => {const [val_ay, wdt_ay, align_ay] = zip; return bdy_$lin_bld(val_ay, wdt_ay, align_ay)}
const bdy_$lin_bld = (val_ay, wdt_ay, align_ay) => {const {v,w,a}=arguments; v.map((v,i)=>pad(v,w(i),a(i)))}
const bdy_linAy = (bdy_zipAy) => bdy_zipAy.map(bdy_$lin)
const bdy_zipAy = (dta, wdt_ay, align_ay) => dta.map(dr=>zip(dr,wdt_ay,align_ay))
const h1_fld = (wdt_ay) => wdt_ay.map(wdt=>'-'.repeat(wdt))
const h2_fld = (h2_zip) => h2_zip.map((padArg)=>pad.apply(null,padArg))
const h2_zip = (fld_ay,wdt_ay,align_ay) => {const [f,w,a]=arguments; return zip(f,w,a)}
const lin_$join = (fld) => fld.join(SEP_COL)
const lin_bdy = (bdy_linAy) => bdy_linAy.join(SEP_LIN)
const lin_h1 = (h1_fld) => $join(h1_fld)
const lin_h2 = (h2_fld) => $join(h2_fld)
const wdt_ay = (wdt_ay_h2, wdt_ay_col) => {const [h,c]=arguments; return h.map((h,idx)=>max(h,c(idx)))}
const wdt_ay_col = (fld_ay, dta) => fld_ay.map((fld,idx)=>wdt_$colI(dta,idx))
const wdt_ay_h2 = (fld_ay) => fld_ay.map(fld=>fld.length)
const wdt_$colI_col = (dta,idx) => dta.map(dr=>dr[idx])
const wdt_$colI = (dta,idx) => ay_maxLen(wdt_$colI_col(dta,idx))
const z = (lin_h1,lin_h2,lin_bdy) => {const [h1,h2,bdy]=arguments; return [h1,h2,h1,bdy,h1].join(SEP_LIN)}

const fmtDt = (dt, align_ay) => {
    const dta$ = dt.dta
    const fld_ay$ = dt.fldNm_ay
    const align_ay$ = align_ay || []
    const wdt_ay_col$ = wdt_ay_col(fld_ay$, dta$)
    const wdt_ay_h2$ = wdt_ay_h2(fld_ay$)
    const wdt_ay$ = wdt_ay(fld_ay$, dta$)
    const h1_fld$ = h1_fld(wdt_ay)
    const h2_zip$ = h2_zip(fld_ay$, wdt_ay$, align_ay$)
    const h2_fld$ = h2_fld(h2_zip$)
    const bdy_zipAy$ = bdy_zipAy(dta$, wdt_ay$, align_ay$)
    const bdy_linAy$ = bdy_linAy(bdy_zipAy$)
    const lin_h1$ = lin_h1(h1_fld$)
    const lin_h2$ = lin_h2(h2_fld$)
    const lin_bdy$ = lin_bdy(bdy_linAy$)
    return oup(lin_h1$, lin_h2$, lin_bdy$)
}
exports.fmtDt = fmtDt