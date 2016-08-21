const { obj_prpVal_byLvc, obj_prpVal_byAy } = require('../obj_util.js')
debugger
let assert_isObj = obj => typeof obj === 'object' ? null : throws('give obj is not an object')
let tst_f1_oneCase = (obj, prpNmLvc, exp) => {
    let act = obj_prpVal_byLvc(obj, prpNmLvc);
    obj_eq(act, exp) }
let tst_f2_oneCase = (obj, prpNmAy, exp) => {
    let act = obj_prpVal_byAy(obj, prpNmAy);
    obj_eq(act, exp) }
let t1 = tst_f1_oneCase
describe('test obj_prpVal_byLvc(obj,prpNmLvc).....', function() {

    it('should return only specified properties', function() {
        let obj, prpNmLvc, prpNmAy, exp
        obj = { a: 1, b: 2, c: 3 }
        prpNmLvc = "a,b"
        exp = { a: 1, b: 2 }
        act = run(obj, prpNmLvc)

        expect(act).to.eql(exp)
    })
    it('should return undefined')

    it('')
})
describe('test obj_prpVal_byAy(obj,prpNmAy).....', function() {

})