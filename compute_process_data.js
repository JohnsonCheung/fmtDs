//compute-beg compute_process_data
class Blk { constructor(nm,beg,mid,end) { Object.assign(this,{nm,beg,mid,end}) } }
const _inp = (data) => {}
const _oup = (no_chg, new_data) => {no_chg, new_data}
const linAy = (data) => split_line(data)
const blk_ay_$reduce = (rslt,beg,i)=>{rslt.push(new Blk(nmAy[i],begAy[i],midAy[i],endAy[i])); return rslt}
const blk_ay = (blk_begAy, blk_midAy, blk_endAy, blk_nmAy) => begAy.reduce(blk_ay_$reduce)
const blk_nmAy = (linAy, blk_begAy) => {}
const blk_begAy = (linAy) => linAy.reduce((rslt,l,i)=>{if(is_begLin(l))rslt.push(i);return rslt})
const blk_midAy = (linAy, blk_begAy) => blk_begAy.reduce((rslt,beg,begIdx)=>blk_midAy_$reduce(beg,blk_begAy,linAy,begIdx,rslt))
const blk_midAy_$reduce = (beg,begAy,linAy,begIdx,rslt) => {const [fm,to]=[blk_midAy_$fmTo(beg,begAy,linAy)]; return blk_midAy_$rslt(fm,to,linAy,rslt)}
const blk_midAy_$fmTo = (begAy,beg,linAy)=>[begAy[beg],beg=begAy.length-1?linAy.length-1:begAy[beg+1]-1]
const blk_midAy_$rslt = (fm,to,linAy,rslt) =>{const m=blk_midAy_$midLin(fm,to,linAy); if(m!==null)rslt.push(m); return rslt}
const blk_midAy_$midLin = (fm,to,linAy) =>{for(i=fm;i<=to;i++) if(is_midLin(linAy[i]))return i}

const blk_endAy = (linAy, blk_midAy) = {}
const is_begLin = (l) => true
const is_midLin = (l) => true
const is_endLin = (l) => true

//compute-mid
//compute-end
