'use strict';
let $$$;
// const { zip, pad, ay_add} = require('./util.js')
const max = (...p) => {
    const n = p.length
    if(n==0)return
    if(n==1)return p[0]
    let o = p[0]
    for (let i = 1; i < n; i++) o = o > p[i] ? o : p[i]
    return o}
const spc = (n) => ' '.repeat(n)
{
    const spc$=spc
    const LEFT = 1
    const CENTRE = 2
    const RIGHT = 3
    const $v_o = (s,w) => {
        if(w<=1)return'.'
        if(w==2)return'..'
        if(w==3)return s.charAt(0)+'..'
        return s.substr(0,w-2)
    }
    const _l1 = (w, n) => Number.parseInt(((w - n) / 2).toFixed())
    const _s1_s2 = (w, n) => {const l1=_l1(w, n), l2=w-l1-n; return [spc$(l1), spc$(l2)]}
    const $v_L = (s, w, n) => s + spc$(w-n)
    const $v_R = (s, w, n) => spc$(w-n) + s
    const $v_C = (s, w, n) => { const [s1, s2] = _s1_s2(w, n); return s1 + s + s2}
    const pad = (s, w, align) => {
        s = String(s)
        const n = s.length
        if(n>w)return $v_ovr(s,w)
        if(align===RIGHT)return $v_R(s,w,n)
        if(align===CENTRE)return $v_C(s,w,n)
        return $v_L(s,w,n)       
    }
    Object.assign(pad, {LEFT,RIGHT,CENTRE})
    $$$=pad}

const pad=$$$
const zip = (...ay) => {
    const ay1 = ay.map(ay=>Array.isArray(ay)?ay:[]) // 
    const nEle = ay1.reduce((rslt,ay)=>max(rslt,ay.length),0)
    const ele = (idx) => ay.map(ay=>ay[idx])
    const a = []
    a[nEle-1]=null
    return a.map((_,idx)=>ele(idx))}


const ay_maxLen=(strAy) =>  strAy.reduce((rslt,itm)=> max(rslt,itm.length),0)
const pipe = (i,...f) => f.reduce((c,p)=>c(p),i)
const branch = (i, ...f) => f.reduce((c, p) => p.push(c(i), []))

{
    const [maxLen$,max$,pad$] = [ay_maxLen,max,pad]
    const SEP_COL = ' | '
    const SEP_LIN = '\r\n'
    const $join_fld = (fld) => '| ' + fld.join(SEP_COL) + ' |'
    const $col_w = (dta, i) => maxLen$(_col_i(dta, i))
    const _col_i = (dta, i) => dta.map(dr => String(dr[i]))
    const $bdy_lin = (dr, wdt, align) => $join_fld(wdt.map((w, i) => pad$(dr[i], w, align[i])))
    $$$ = (dt, align = []) => {
        const fld = dt.fld
        const dta = dt.dta
        const wdt = fld.map((_, i) => max$($col_w(dta, i), fld[i].length))
        const bdy_linAy = dta.map(dr => $bdy_lin(dr, wdt, align))
        const bdy = bdy_linAy.join(SEP_LIN)
        const h2fld = fld.map((fld, i) => pad$(fld, wdt[i], align[i]))
        const h2 = $join_fld(h2fld)
        const h1fld = wdt.map(w => '-'.repeat(w))
        const h1 = $join_fld(h1fld)
        return [h1, h2, h1, bdy, h1].join(SEP_LIN)
    }}; 
const fmtDt1=$$$
{
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
    const fmtDt = (dt, align_ay=[]) => {
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
        return _Oup(lin_h1$, lin_h2$, lin_bdy$)}
    $$$ = fmtDt }
const fmtDt=$$$
module.exports = {fmtDt,fmtDt1}