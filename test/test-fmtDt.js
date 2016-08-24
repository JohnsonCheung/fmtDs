const {fmtDt1} = require('../fmtDt.js')
let fld = ['col-a','col-b', 'col-c','a','b','c lsdkfj lsjd flkjs fljdf']
let dr1 = [1,2,3]
let dr2 = [3,'lksdfj lksdjf sdf',5]
let dr3 = ["sdf","skldf","lksdd dfdf"]
let dta = [dr1,dr2,dr3]
let a = fmtDt1({fld, dta},[3,3])
console.log(a)
debugger