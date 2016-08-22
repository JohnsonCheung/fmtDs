const {fmtDt} = require('../fmtDt.js')
let fldNm_ay = ['col-a','col-b', 'col-c','a','b','c']
let dr1 = [1,2,3]
let dr2 = [3,'lksdfj lksdjf sdf',5]
let dr3 = ["sdf","skldf","lksdd dfdf"]
let dta = [dr1,dr2,dr3]
let a = fmtDt({fldNm_ay, dta})
console.log(a)
debugger