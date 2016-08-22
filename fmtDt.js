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
const LEFT = 1
const CENTRE = 2
const RIGHT = 3
const pad_ovr_flw=(s,l,w) => {
    switch(w) {
        case 1: return '.'
        case 2: return '..'
        case 3: return s.charAt(0)+'..'
        default: return s.substr(0,w-2)+'..'
    }
}
const pad_spc=(l,w) =>' '.repeat(w-l)
const pad_half_len1=(l,w) => ((w-l)/2).toFixed()
const pad_half_len2=(l,w) => w-pad_half_len1(l,w)
const pad_half_spc1=(l,w) => ' '.repeat(pad_half_len1(l,w))
const pad_half_spc2=(l,w) => ' '.repeat(pad_half_len2(l,w))
const pad_left=(s,l,w) => s+pad_spc(l,w)
const pad_right=(s,l,w) => pad_spc(l,w)+s
const pad_centre=(s,l,w) =>{const [h1,h2]=[pad_half_spc1(l,w)]}
const pad = (s, w, align) => {
    s=String(s)
    const l = s.length
    const ovr_flw = l>w
    if(ovr_flw)return pad_ovr_flw(s,l,w)
    switch(align) {
        case CENTRE: return pad_centre(s,l,w)
        case RIGHT: return pad_right(s,l,w)
        default: return pad_left(s,l,w)
    }
}
console.log(pad('sdfdfsdj flsjdf',50)+'<')

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
const SEP_COL = ' | '
const SEP_LIN = '\r\n'
//compute-beg ==========================================================
let fmtDt; {
    const _Inp = (dt, align_ay=[]) => {}
    const _Oup = (lin_h1,lin_h2,lin_bdy) => {const h1=lin_h1; return [h1, lin_h2, h1, lin_bdy, h1].join(SEP_LIN)}
    const bdy_$lin = (dr, wdt_ay, align_ay) => {const fld = bdy_$lin_fld(dr, wdt_ay, align_ay); return lin_$join(fld)}
    const bdy_$lin_fld = (dr, wdt_ay, align_ay) => wdt_ay.map((w,i)=>pad(dr[i],w,align_ay[i]))
    const bdy_linAy = (dta, wdt_ay, align_ay) => dta.map(dr=>bdy_$lin(dr, wdt_ay, align_ay))
    const h1_fld = (wdt_ay) => wdt_ay.map(wdt=>'-'.repeat(wdt))
    const h2_fld = (fld_ay, wdt_ay, align_ay) => fld_ay.map((fldNm,i)=>pad(fldNm, wdt_ay[i], align_ay[i]))
    const lin_$join = (fld) => '| ' + fld.join(SEP_COL) + ' |'
    const lin_bdy = (bdy_linAy) => bdy_linAy.join(SEP_LIN)
    const lin_h1 = (h1_fld) => lin_$join(h1_fld)
    const lin_h2 = (h2_fld) => lin_$join(h2_fld)
    const wdt_ay = (wdt_ay_h2, wdt_ay_col) =>{const h = wdt_ay_h2; return h.map((h,idx)=>max(h,wdt_ay_col[idx]))}
    const wdt_ay_col = (fld_ay, dta) => fld_ay.map((fld,idx)=>wdt_$colI(dta,idx))
    const wdt_ay_h2 = (fld_ay) => fld_ay.map(fld=>fld.length)
    const wdt_$colI_col = (dta,idx) => dta.map(dr=>String(dr[idx]))
    const wdt_$colI = (dta,idx) => ay_maxLen(wdt_$colI_col(dta,idx))
    //compute-mid
    const compute = (dt, align_ay=[]) => {
        const dta$ = dt.dta
        const fld_ay$ = dt.fldNm_ay
        const align_ay$ = align_ay
        const wdt_ay_col$ = wdt_ay_col(fld_ay$, dta$)
        const wdt_ay_h2$ = wdt_ay_h2(fld_ay$)
        const wdt_ay$ = wdt_ay(wdt_ay_h2$, wdt_ay_col$)
        const h1_fld$ = h1_fld(wdt_ay$)
        const h2_fld$ = h2_fld(fld_ay$, wdt_ay$, align_ay$)
        const bdy_linAy$ = bdy_linAy(dta$, wdt_ay$, align_ay$)
        const lin_h1$ = lin_h1(h1_fld$)
        const lin_h2$ = lin_h2(h2_fld$)
        const lin_bdy$ = lin_bdy(bdy_linAy$)
        return _Oup(lin_h1$, lin_h2$, lin_bdy$)
    }
    fmtDt = compute }
//compute-end
exports.fmtDt = fmtDt