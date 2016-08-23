// generate *.js from *.compute.js
const opt_normalize = (opt) => opt
const opt_add_auto_fld = (opt) => opt
const opt_process = (opt) => ffn_ay(opt).foreach(ffn_foreach_fnMaker(opt))
const ffn_foreach_fnMakerr = (opt) = ((ffn)=>ffn_process(ffn,opt))
const ffn_ay = (opt) = []
const ffn_process = (ffn,opt) => {}
const ffn_each = (ffn) => ffn_process(ffn,opt)
const compute_gen_js = ({opt}) => pipe(opt, opt_normalize, opt_add_auto_fld, opt_process)

