const fs = require('fs')
const process_data = require('./compute_process_data.js')
//===
const ffn_er_msg = (ffn,er) = er_str()
const ffn_do_cb_ok = (cb,ffn) => cb(null,)
const ffn_do_cb_er = () => []
const ffn_read_cbMaker = (ffn,opt) => ((err,data)=>err? rdFile_do_cb_er(er) : data_do_process(data,opt,ffn,cb))
const compute_gen_one_ffn = (ffn,opt,cb) => fs.readFile(ffn, 'utf8', rdFile_cbMaker(ffn,opt))
const data_do_process = (data,opt,ffn,cb) => {const {no_chg,new_data,msg}=process_data(data); no_chg?data_do_noChg(msg):data_do_wrt_newData(data,ffn,msg,cb)}
const data_do_wrt_newData=(new_data,ffn,msg,cb) => {}