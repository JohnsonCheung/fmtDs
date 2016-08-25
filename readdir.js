const fs = require('fs')
let $$$
{
    class Read_dirInfo {
        constructor(dir, cb) {
            this.cb = cb
            this.dir_info = {}
            this.dir_info.dir = dir
        }
    }
    const x = Read_dirInfo.prototype
    x.read = function () {
        fs.readdir(this.dir_info.dir, this.dir_is_read.bind(this))
    }
    x.dir_is_read = function (err, entries) {
        if (err) {
            this.dir_info.err = 'err in readdir(dir)'
            return this.done()
        }
        const dir = this.dir_info.dir
        const x = this
        x.dir_info.entries = entries
        x.dir_info.states = []
        entries.forEach((entry, i) => {
            const fn = (err, stat) => x.entry_is_read(err, stat, i)
            fs.stat(dir + '/' + entry, fn.bind(x))
        })
    }
    x.entry_is_read = function (err, entry_stat, entry_idx) {
        const {dir, entries, states} = this.dir_info
        console.log(dir + '    ' + entries[entry_idx])
        states[entry_idx] = err ? err : entry_stat
        if (entry_idx === entries.length - 1) this.done()
    }
    x.done = function () { this.cb(this.dir_info) }

    const read_dirInfo = (dir, cb) => (new Read_dirInfo(dir, cb)).read()
    $$$ = read_dirInfo
}
const read_dirInfo = $$$
//===========================================================================================
{
    const dir_is_read = (err, entries, dir, cb) => {
        const dir_info = { dir, entries, states: [] }
        if (err) {
            dir_info.err = 'err in readdir(dir)  err=[' + err + ']'
            return cb(err, dir_info)
        }
        entries.forEach((entry, i) =>
            fs.stat(dir + '/' + entry, (err, stat) => entry_is_read(err, stat, i, cb, dir_info)))
    }
    const entry_is_read = (err, entry_stat, entry_idx, cb, dir_info) => {
        const {dir, entries, states} = dir_info
        console.log(dir + '    ' + entries[entry_idx])
        states[entry_idx] = err ? err : entry_stat
        if (entry_idx === entries.length - 1) cb(dir_info)
    }
    const read_dirInfo1 = (dir, cb) => fs.readdir(dir, (err, entries) => dir_is_read(err, entries, dir, cb))
    $$$ = read_dirInfo1
}
const read_dirInfo1 = $$$
//===========================================================================================
{
    const entry_is_read = (err, entry_stat, entry_idx, dir_info) => {
        const {dir, entries, states} = dir_info
        console.log(dir + '    ' + entries[entry_idx])
        states[entry_idx] = err ? err : entry_stat
    }
    const read_dirInfo2 = (dir) => {
        let entries
        try {
            entries = fs.readdirSync(dir)
        } catch (e) {
            dir_info.err = 'err in readdir(dir)  err=[' + e + ']'
            return dir_info
        }

        const dir_info = { dir, entries, states: [] }
        entries.forEach((entry, i) => fs.stat(dir + '/' + entry, (err, stat) => entry_is_read(err, stat, i, dir_info)))
        return dir_info
    }
    $$$ = read_dirInfo2
}
const read_dirInfo2 = $$$
//===========================================================================================
const read_dirInfo3 = (dir) => {
    let entries
    try {
        entries = fs.readdirSync(dir)
    } catch (err) {
        return err
    }

    const read_stat = (entry) => {
        try {
            return fs.statSync(dir + '/' + entry)
        } catch (e) {
            return e
        }
    }
    const states = entries.reduce((states, entry, i) => { states[i] = read_stat(entry); return states }, [])

    return { dir, entries, states }
}
//===========================================================================================
{
    const $dirInfo_is_read = (dir_info) => {
        if (dir_info.err) console.log('err--------------------')
        console.log(dir_info)
    }
    const dir1 = 'c:/users/abc/documents'
    const dir2 = 'c:/users/abc/documents/projects'
    const dir3 = 'c:/users/abc/documents/projects/node_modules'
    read_dirInfo1(dir1, $dirInfo_is_read)
    //    console.log(read_dirInfo3(dir2, $dirInfo_is_read))
    //    console.log(read_dirInfo3(dir3, $dirInfo_is_read))
    //    console.log('starting reading [' + dir1 + ']')
}