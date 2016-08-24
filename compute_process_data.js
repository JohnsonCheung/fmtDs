const pipe = (i,...f) => f.reduce((p,f)=>f(p),i)
const ay_toSet = (ay) = ay.reduce((set,itm)=>{set.add(itm); return set}, new Set())
//compute-beg do_bld_part4
let do_bld_part4; {
    const _inp = (part2) => []
    const _oup = (srt) => srt.map(i=>make_$lin(i))
    const make_$lin = (itm) => {const [a,b]=make_$lin_ab(itm); return `const ${a}$ = ${a}(${b})`}
    const make_$lin_ab =(itm) => [itm.par, make_$lin_prmList(itm.chd)]
    const make_$lin_prmList = (chd) = chd.map(i=>i+'$').join(', ')
    const part2a = (part2) => part2.filter(lin=>is_valLin(lin))
    const srt_map = (linDta) => linDta.reduce((map,x)=>{map.add(x.par,x.chd);return map},new Map())
    const srt_$1 = (srt_map) => {const o=[]; for(let i=0;srt_map.length<i;i++) srt_$2(srt_map,o); return o}
    const srt_$2 = (map, o) => o.push(srt$3_shift(map))
    const srt_$3shift = (map) => {const keys=map.keys; for (i of map) if(is_leaf(i[1],keys)) {map.delete(i);return i}}
    const is_$leaf = (itm,keys) => true
    const linDta = (part2a) => part2a.map(lin=>linDta_$brk(lin))
    const linDta_$brk = (lin) => pipe(lin,linDta_$brk0,linDta_$brk1)
    const linDta_$brk0 = (lin) =>lin.match(/\s*const\s+([a-zA-Z\_][a-zA-Z0-9\_]*)\s*\=\s*\((.*)\)/) 
    const linDta_$brk1 = (a) => {const par = a[1], chd = a[2].trim().split(/\s*\,\s*/); return {par,chd}}
//compute-mid
    const run = (part2) => {
//        return (srt_idx_ay$, part2$) = srt_idx_ay$.map(idx=>part2$[2])
    }
    
} 
//compute-end do_bld_part4

//compute-beg compute_process_data
let compute_process_data; {
    const SEP_LIN = '\r\n'
    const _inp = (part) => {}
    const _oup = (part_new).join(SEP_LIN)
    const partAy = (linAy, blkAy) => []
    const partAy_new = (partAy) => partAy.map(part=>part.isCompute?part_$compute(part.linAy):part.linAy)
    const part_$compute = (partLinAy) =>{const [a,b,c,d] = part_$brk(partLinAy); return part_$compute1(a,b,c,d)}
    const part_$compute1 = (a,b,c,d) => {[b1,d1]=[part2_$srt(b),part4_$gen(b)]; return [a,b1,c,d1].join(SEP_COL)}
    const part_$srtP2 = (part2) => []
    const part_$genP4 = (part2) => []
    const blk_ay_$reduce = (rslt,beg,i)=>{rslt.push({nm:nmAy[i],beg:begAy[i],mid:midAy[i],end:endAy[i]}); return rslt}
    const blk_ay = (blk_begAy, blk_midAy, blk_endAy, blk_nmAy) => begAy.reduce(blk_ay_$reduce)
    const blk_nmAy = (linAy, blk_begAy) => blk_begAy.map(beg=>1)
    const blk_begAy = (linAy) => linAy.reduce((rslt,l,i)=>{if(is_begLin(l))rslt.push(i);return rslt})
    const blk_midAy = (linAy, blk_begAy) => blk_begAy.reduce((rslt,beg,begIdx)=>blk_midAy_$reduce(beg,blk_begAy,linAy,begIdx,rslt))
    const blk_midAy_$reduce = (beg,begAy,linAy,begIdx,rslt) => {const [fm,to]=[blk_midAy_$fmTo(beg,begAy,linAy)]; return blk_midAy_$rslt(fm,to,linAy,rslt)}
    const blk_midAy_$fmTo = (begAy,beg,linAy)=>[begAy[beg],beg=begAy.length-1?linAy.length-1:begAy[beg+1]-1]
    const blk_midAy_$rslt = (fm,to,linAy,rslt) =>{const m=blk_midAy_$midLin(fm,to,linAy); if(m!==null)rslt.push(m); return rslt}
    const blk_endAy = (linAy, blk_midAy) => {}
    const is_begLin = (l) => /^\/\/compute-beg/.test(l)
    const is_endLin = (l) => /^\/\/compute-end/.test(l)
    //compute-mid
    const run = (data, opt) => {
        return _oup(no_chg$, new_data$)
    }
    compute_process_data = run}
//compute-end compute_process_data
const fs = require('fs')
const data = fs.readFileSync(__filename,'utf8')
const linAy1 = data.split('\r\n')
debugger 
const assert = require('assert')
assert(blk_midAy_$midLin(0,2,["//compute-mid sldkfj"])===0)
assert(blk_midAy_$midLin(0,2,["","//compute-mid sldkfj"])===1)
assert(blk_midAy_$midLin(0,2,["","","//compute-mid sldkfj"])===2)
assert(blk_midAy_$midLin(0,2,["","","","//compute-mid sldkfj"])===undefined)
assert(blk_midAy_$midLin(0,2,["","//compute-m1id sldkfj"])===undefined)