const={len, ayMax, sy2maxLen, max, jn}=require('curryfun')
const sdr2lin=colsep=>sdr=>colsep+sdr.join(colsep)+colsep
const sdrPad=wdtAy=>sdr=>{
    const wdtAy.map((w,i)=>pad(w,align[i],sdr[i]
                         
const sdry2ncol=sdry=>ayMax(sdry.map(len))
const sdry2wdtAy = sdry => {
    const ncol = sdry2ncol(sdry)
    const colI=i=>sdry2colI(i)(sdry)
    let o=0
    for(const j=0;j<ncol;j++) o=max(o,sy2maxLen(colI(j)))
    return o
｝
const dry2colI=i=>dry=>dry.map((dr,i)=>dr[i])
const jn=sep=>ay=>ay.join(sep)
const jnCrLf=jn('\r\n')
const jnLf=jn('\n')
const sdr2lin=(wdtAy,align,sep)=>sdr=>jn(sep)(wdtAy.map((w,i)=>pad(sdr[i],w,align[i])))
const pad=s=>s
const fstItm=enm=>{for(i of enm)return i}
const enmMax=ay=>{ 
    let o=fstItm(ay)
    for(i of ay) o=max(o,i)
    return o
}
const len=s=>s.length
const sy2maxLen=sy=>enmMax(sy.map(len))
const max=(a,b)=>a>b?a:b
const fmtDt=(dt,align='')=>{
    const {fny,dry} = dt
    const sdry = dryToSdry(dry)
    const toLin=sdr=>sdr2lin(colsep)(sdr)
    const sdryColWdtAy = sdry2ColWdtAy(sdry)
    const wdtAy = fny.map((f, i) => max(sdryColWdtAy[i], f.length))
    const bdyLinAy = sdry.map(sdrToLin(wdtAy, align))
    const bdy = bdy_linAy.join(SEP_LIN)
    const h2fld = fny.map((f,i)=> pad$(fld, wdt[i], align[i]))
    const h2 = toLin(h2fld)
    const h1fldAy = wdtAy.map(w => '-'.repeat(w))
    const h1 = toLin(h1fldAy)
    return [h1, h2, h1, bdy, h1].join(SEP_LIN)
}
module.exports = {fmtDt}
