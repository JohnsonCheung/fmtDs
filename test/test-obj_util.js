const { obj_prpVal_byLvc, obj_prpVal_byAy } = require('../obj_util.js')
let assert_isObj = obj => typeof obj === 'object' ? null : throws('give obj is not an object')
let obj_eq = (act, exp) => { assert_isObj(act);
    assert_isObj(exp) }
let tst_f1_oneCase = (obj, prpNmLvc, exp) => {
    let act = obj_prpVal_byLvc(obj, prpNmLvc);
    obj_eq(act, exp) }
let tst_f2_oneCase = (obj, prpNmAy, exp) => {
    let act = obj_prpVal_byAy(obj, prpNmAy);
    obj_eq(act, exp) }
let t1 = tst_f1_oneCase
let obj, prpNmLvc, prpNmAy, exp
obj = { a: 1, b: 2, c: 3 }
prpLvc = "a,b"
exp = { a: 1, b: 1 }
t1(obj, prpLvc, exp)


describe('test obj_prpVal_byLvc(obj,prpNmLvc).....', function() {

})
describe('test obj_prpVal_byAy(obj,prpNmAy).....', function() {

})