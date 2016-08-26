const fs = require('fs')
let read_dirInfo = (() => {
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

    return (dir, cb) => (new Read_dirInfo(dir, cb)).read()
})()
//===========================================================================================
const read_dirInfo1 = (() => {
    const dir_is_read = (err, entries, dir, cb) => {
        if (err) return cb(er)
        const dir_info = { dir, entries, states: [] }
        entries.forEach((entry, i) => fs.stat(dir + '/' + entry, (err, stat) => entry_is_read(err, stat, i, cb, dir_info)))
    }
    const entry_is_read = (err, entry_stat, entry_idx, cb, dir_info) => {
        const {dir, entries, states} = dir_info
        states[entry_idx] = err ? err : entry_stat
        if (entry_idx === entries.length - 1) cb(dir_info)
    }
    return (dir, cb) => fs.readdir(dir, (err, entries) => dir_is_read(err, entries, dir, cb))
})()
//===========================================================================================
const read_dirInfo2 = (() => {
    //-------------------------------------------------------------
    {
        const f3 = (e2, r2, p1, f1) => { }
        const f2 = (e2, r2) => { }
        const $ = (p1, f1, f2, f3) => f2(p1, (e2, r2) => f3(e2, r2, p1, f1))
        const o = () => (p1, f1) => $(p1, f1, f2, f3)
    }
    //-------------------------------------------------------------
    {
        const entry_is_read = (err, stat, dir, entries, states, cb) => { states[i] = err || stat; if (i.entries.length) cb({ dir, entries, states }) }
        const fs_stat = (dir, entries, states, cb) => (err, stat) => entry_is_read(err, stat, dir, entries, states, cb)
        const entries_forEach = (dir, entries, states, cb) => (entry, i) => fs.stat(dir + '/' + fs_stat(dir, entries, states, cb))
        const entries_is_read = (entries, dir, states, cb) => entries.forEach(entries_forEach(dir, entries, states, cb))
        const dir_info = (dir, cb) => fs.readdir(dir, (err, entires) => err ? cb(err) : entries_is_read(entries, dir, [], cb))
    }
    //-------------------------------------------------------------
    {
        const entry_is_read = (err, stat, dir, entries, states, cb) => { states[i] = err || stat; if (i.entries.length) cb({ dir, entries, states }) }
        const entries_forEach = (dir, entries, states, cb) => (entry, i) => fs.stat(dir + '/' + entry, (err, stat) => entry_is_read(err, stat, dir, entries, states, cb))
        const entries_is_read = (entries, dir, states, cb) => entries.forEach(entries_forEach(dir, entries, states, cb))
        const dir_info = (dir, cb) => fs.readdir(dir, (err, entires) => err ? cb(err) : entries_is_read(entries, dir, [], cb))
    }
    //-------------------------------------------------------------
    {
        const entry_is_read = (err, stat, dir, entries, states, cb) => { states[i] = err || stat; if (i.entries.length) cb({ dir, entries, states }) }
        const entries_is_read = (entries, dir, states, cb) => entries.forEach((entry, i) => fs.stat(dir + '/' + entry, (err, stat) => entry_is_read(err, stat, dir, entries, states, cb)))
        const dir_info = (dir, cb) => fs.readdir(dir, (err, entires) => err ? cb(err) : entries_is_read(entries, dir, [], cb))

        const f4 = (p4, p1) => { }
        const f3 = (r1, p1, r2, f0) => r2.forEach((r2itm, r2i) => f4(p1 + '/' + r2itm, (e4, r4) => f5(e4, r4, p1, r3, r2, f0)))
        const c2 = (e2, r2) => { }
        const sf1 = (p1, c2) => { }
        const c1 = (e1, r1) => { }
        const f1 = (p1, c1) => f2(p1, (e2, r2) => er ? f0(e2) : f3(r2, p1, [], f0))
    }
    //-------------------------------------------------------------
    {
        const entries_is_read = (entries, dir, states, cb) => entries.forEach((entry, i) => fs.stat(entry, (err, stat) => { states[i] = err || stat; if (i <= entries.length) cb({ dir, entries, states }) })))
        const dir_info = (dir, cb) => fs.readdir(dir, (err, entries) => err ? cb(err) : entries_is_read(entries, dir, [], cb))
    }
    //-------------------------------------------------------------
    /*
        let o = f i
        let do o

        let f i do = { let c = make f i do; addque c}
        f i do
    */
})()
//===========================================================================================
const read_dirInfo3 = (dir) => {
    let entries
    try {
        entries = fs.readdirSync(dir)
    } catch (err) {
        return err
    }
    const read_stat = entry => {
        try {
            return fs.statSync(dir + '/' + entry)
        } catch (err) {
            return err
        }
    }
    const states = entries.map(read_stat)
    return { dir, entries, states }
}
//===========================================================================================
const read_dirInfo4 = (()=>{
    const read_entries = (dir) => { try{return fs.readdirSync(dir)}catch(e){return e} }
    const read_stat = (entry) => { try{return fs.statSync(entry)}catch(e){return e} }
    const is_err = (err) => true
    return (dir) => {
        let entries;
        if(entries = read_entries(dir))return entries
        let states = entries.map(read_stat)
        return {dir, entries, states}
    }
})()
//===========================================================================================
const read_dirInfo5 = (()=>{
    const read_entries = (dir) => { try{return fs.readdirSync(dir)}catch(e){return e} }
    const read_stat = (entry) => { try{return fs.statSync(entry)}catch(e){return e} }
    const is_err = (err) => true
    return (dir) => {
        let entries = read_entries(dir)
        if(is_err(entries))return entries
        let states = entries.map(read_stat)
        return {dir, entries, states}
    }
})()
//===========================================================================================

{
    const $dirInfo_is_read = dir_info => {
        return
        if (dir_info.err) console.log('err--------------------')
        console.log(dir_info)
    }
    const dir1 = 'c:/users/abc/documents'
    const dir2 = 'c:/users/abc/documents/projects'
    const dir3 = 'c:/users/abc/documents/projects/node_modules'
    read_dirInfo1(dir1, $dirInfo_is_read)
    read_dirInfo1(dir2, $dirInfo_is_read)
    //    console.log(read_dirInfo3(dir3, $dirInfo_is_read))
    //    console.log('starting reading [' + dir1 + ']')
}
