'use strict';
exports = { obj_prpVal_byLvc, obj_prpVal_byAy }
let ay_trim = (ay) => ay.map(i => i.trim())
let split_lvc = (s) => ay_trim(s.split(','))

function obj_prpVal_byLvc(obj, prpNmLvc) {
    let ay = split_lvc(prpLvc);
    obj_prpVal_byAy(obj, ay) }

function obj_prpVal_byAy(obj, prpNmAy) {
    let f = (prpNm) => obj[prpNm];
    return prpNmAy.map(f) }