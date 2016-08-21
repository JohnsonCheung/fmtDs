'use strict'
exports = requireItm;
const $obj_prpVal = require('./obj_util.js')
function requireItm(file,reqStr) {const o = require(file); return $obj_prpVal(o,reqStr)}