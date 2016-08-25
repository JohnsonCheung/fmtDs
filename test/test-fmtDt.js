const {fmtDt} = require('../fmtDt.js')
const {readCsv}=require('util1')
let fld = ['col-a','col-b', 'col-c','a','b','c lsdkfj lsjd flkjs fljdf']
let dr1 = [1,2,3]
let dr2 = [3,'lksdfj lksdjf sdf',5,,2343]
let dr3 = ["sdf","skldf","lksdd dfdf",3434,,"df"]
let dta = [dr1,dr2,dr3]
let a = fmtDt({fld, dta},[3,2,2,3,2,2])
console.log(a)

a = fmtDt(readCsv(__dirname+'/a.csv'))
console.log(a)