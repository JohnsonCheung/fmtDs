'use strict';
const $join_fld = fld => '| ' + fld.join(SEP_COL) + ' |'
const $col_w = (dta, i) => maxLen$(_col_i(dta, i))
const _col_i = (dta, i) => dta.map(dr => String(dr[i]))
const jn=sep=>ay=>ay.join(sep)
const jnCrLf=jn('\r\n')
const jnLf=jn('\n')
const sdr2lin = (wdtAy, align, sep) => sdr => jn(sep)(wdtAy.map((w, i) => pad(sdr[i], w, align[i])))
const pad = s => s
const ayMax = ay => { 
    let o
    for(i of ay) {
        if(o===undefined) {
            o = i
        } else {
            if(i>o) {
                o = i
            }
        }
    }
    return o
}
const len = i => i.length
const ay_maxLen = ay => ayMax(ay.map(len))
const max = (a,b) => a>b ? a : b
const fmtDt = (dt, align = []) => {
    const {fny,dry} = dt
    Const sdry = dryToSdry(dry)
    const sdryColWdtAy = sdry2ColWdtAy(sdry)
    const wdtAy = fny.map((f, i) => max(sdryColWdtAy[i], f.length))
    const bdyLinAy = sdry.map(sdrToLin(wdtAy, align))
    const bdy = bdy_linAy.join(SEP_LIN)
    const h2fld = fld.map((fld, i) => pad$(fld, wdt[i], align[i]))
    const h2 = $join_fld(h2fld)
    const h1fld = wdt.map(w => '-'.repeat(w))
    const h1 = $join_fld(h1fld)
    return [h1, h2, h1, bdy, h1].join(SEP_LIN)
}
module.exports = {fmtDt}
