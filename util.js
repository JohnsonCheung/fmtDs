let $zip = (ay1,ay2) => []
let brk_quote = q => {
    if (typeof q !=='string') return ['','']
    let n = q.length;
    if(n===0)return['','']
    if(n===1)return[q,q]
    if(n===2)return[q.charAt(0),q.charAt(1)]

}
let $quote = (s,q) => {const [q1,q2] = brk_quote(q); return q1+s+q2 }
let $max = (...p) => {let n=p.length; if(n===0||n===1)return; var o=p[0]; for(var i=1;i<n;i++) o = o>p[i]?o:p[i]; return o }
let ALIGN_LEFT = 1
let ALIGN_CENTRE = 2
let ALIGN_RIGHT = 3
let z_pad_val = (v,w,align) => {let a=1,b=2; return''}
let z_pad_val_$normalize_align = (align) => typeof align==='string' ? z_pad_val_$normalize_align1(align) : ALIGN_LEFT
let z_pad_val_$normalize_align1 = (align) => align==='R' ? ALIGN_RIGHT : (align==='C' ? ALIGN_CENTRE : ALIGN_LEFT)
let lin_quote = s => $quote(s,'| * |')
