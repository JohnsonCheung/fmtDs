const {fmtDt} = require('../fmtDt.js')
let fldNm_ay = ['col-a','col-b', 'col-c']
let dr1 = [1,2,3]
let dr2 = [3,4,5]
let dr3 = ["sdf","skldf","lksd"]
let dta = [dr1,dr2,dr3]
let a = fmtDt({fldNm_ay, dta})
debugger