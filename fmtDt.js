exports = {fmtDt};
'use strict';
const sep_lin = '\r\n'
const sep_col = ' | '
const wdt_ay = (dt) => [0];
const z_pad_ay = (ay,wdt_ay) => {
    return ['']} // sldkf sldf
const lin_h1 = (fld_ay,wdt_ay) => h1_fldAy_padded(fld_ay,wdt_ay).join(sep_lin)
const lin_h2 = (fld_ay,wdt_ay) => h2_fldAy_padded(fld_ay,wdt_ay).join(sep_lin)
const lin_bdy = (dr_ay,wdt_ay) => bdyLinAy_padded(dr_ay,wdt_ay).join(sep_lin)
const bdyLinAy_padded = () => ['']
const h2_fldAy = () => []
const a = (1,2,3);
const z_pad_val = (v,w,align) => {let a=1,b=2; return''}
const c = z_pad_val(1,2,3)
const dt_fldAy = () => $dt.fldAy
const bdy_ay = () => {}
const h1_ay =() => ['']
const h2_ay = () => [""]
const max = (...p) => {let n = p.length; if(n===0||n===1) return; var o=p[0]; for(var i=1;i<n;i++) o = o>p[i]?o:p[i]; return o }
const hdr_val = (i) => typeof fld_ay(i) ==='string' ? fld_ay(i).length : ''
const wdt_hdr = (i) => hdr_val(i).length
const wdt_col = (i) => max( wdt_hdr(i), wdt_dtaCol(i))
// return array of string
function fmtDt(dt) {
    const wdt = wdt_ay(dt)
    const fld = dt.fld_ay;
    const quote = (s) => '| ' + s + ' |'
    let h1 = lin_h1(fld,wdt); h1 = quote(h1)
    let h2 = lin_h2(fld,wdt); h2 = quote(h2)
    const x = lin_bdy(fld,wdt); 
    const o = [];
    o.push(h1, h2, h1, x, h2);
    return o
}
function test() {
    let fld_ay = ['col-a','col-b', 'col-c']
    fld_ay = ['col-a']
    let dr1 = [1,2,3]
    let dr2 = [3,4,5]
    let dr3 = ["sdf","skldf","lksd"]
    let dr_ay = [dr1,dr2,dr3]
    let a = fmtDt({fld_ay, dr_ay})
    debugger;
}
test();