const fs = require('fs')
let $$$
{
    
    const $dir_is_read = (err, entries) => {
        if (err) {
            $$dir_info.err = 'err in readdir(dir)'
            return $$cb($$dir_info)
        }
        $$dir_info.entries = entries
        $$dir_info.states = []

        entries.forEach((entry, i) => {
            const fn = (err, stat) => $entry_is_read(err, stat, i)
            fs.stat($$dir_info.dir + '/' + entry, fn)
        })
    }
    const $entry_is_read = (err, entry_stat, entry_idx) => {
        console.log($$dir_info.dir + '    ' + $$dir_info.entries[entry_idx])
        $$dir_info.states[entry_idx] = err ? err : entry_stat
        if (entry_idx === $$dir_info.entries.length - 1) $$cb($$dir_info)
    }
    class Read_dirInfo {
        constructor (dir,cb) {
            this.dir = dir
            this.cb = cb
            this.dir_info = {}
            fs.readdir(dir, $dir_is_read)
        }

    }
    const read_dirInfo = $$$ = (dir, cb) => new Read_dirInfo(dir,cb)


    }
}
const read_dirInfo = $$$
{
    const $dirInfo_is_read = (dir_info) => {
        if (dir_info.err) console.log('err--------------------')
        //console.log(dir_info)
    }
    const dir1 = 'c:/users/abc/documents'
    const dir2 = 'c:/users/abc/documents/projects'
    read_dirInfo(dir1, $dirInfo_is_read)
    read_dirInfo(dir2, $dirInfo_is_read)

    //    console.log('starting reading [' + dir1 + ']')
}
