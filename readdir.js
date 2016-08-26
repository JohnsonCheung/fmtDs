const fs = require('fs')

const read_dirInfo1 = (() => {
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
const read_dirInfo2 = (() => {
    const entry_is_read = (err, entry_stat, entry_idx, cb, dir_info) => {
        const {entries, states} = dir_info
        states[entry_idx] = err ? err : entry_stat
        if (entry_idx === entries.length - 1) cb(dir_info)
    }
    const dir_is_read = (err, entries, dir, cb) => {
        if (err) return cb(err)
        entries.forEach((entry, i) => fs.stat(dir + '/' + entry, (err, stat) => entry_is_read(err, stat, i, cb, { dir, entries, states: [] })))
    }
    return (dir, cb) => fs.readdir(dir, (err, entries) => dir_is_read(err, entries, dir, cb))
})()
//===========================================================================================
const read_dirInfo5a = (() => {
    const entry_is_read = (err, stat, i, dir_info, cb) => { dir_info.states[i] = err || stat; if (i.entries.length) cb(dir_info) }
    const read_stat = (entry, i, dir_info, cb) => fs.stat(dir_info.dir + '/' + entry, (err, stat) => entry_is_read(err, stat, i, dir_info, cb))
    const entries_forEach = (dir_info, cb) => (entry, i) => read_stat(entry, i, dir_info, cb)
    const entries_is_read = (dir_info, cb) => dir_info.entries.forEach(entries_forEach(dir_info, cb))
    return (dir, cb) => fs.readdir(dir, (err, entries) => err ? cb(err) : entries_is_read({ dir, entries, states: [] }, cb))
})()
//-------------------------------------------------------------
const read_dirInfo4a = (() => {
    const entry_is_read = (err, stat, i, dir_info, cb) => { dir_info.states[i] = err || stat; if (i.entries.length) cb(dir_info) }
    const entries_forEach = (dir_info, cb) => (entry, i) => fs.stat(dir_info.dir + '/' + entry, (err, stat) => entry_is_read(err, stat, i, dir_info, cb))
    const entries_is_read = (dir_info, cb) => dir_info.entries.forEach(entries_forEach(dir_info, cb))
    return (dir, cb) => fs.readdir(dir, (err, entries) => err ? cb(err) : entries_is_read({ dir, entries, states: [] }, cb))
})()
//-------------------------------------------------------------
const read_dirInfo3a = (() => {
    const entry_is_read = (err, stat, i, dir, entries, states, cb) => { states[i] = err || stat; if (i === entries.length - 1) cb({ dir, entries, states }) }
    const entries_is_read = (entries, dir, states, cb) => entries.forEach((entry, i) => fs.stat(dir + '/' + entry, (err, stat) => entry_is_read(err, stat, i, dir, entries, states, cb)))
    return (dir, cb) => fs.readdir(dir, (err, entries) => err ? cb(err) : entries_is_read(entries, dir, [], cb))
})()
const read_dirInfo3b = (() => {
    const fs1 = (ps1, cs1) => fs.readdir(ps1, cs1)
    //        const cs1 = (es1, rs1) => cs1(es1, rs1)
    const fs2 = (ps2, cs2) => fs.stat(ps2, cs2)
    //        const cs2 = (es2, rs2) => cs2(es2, rs2)

    const f2 = (es2, rs2, i, p, rs1, rx, c) => { rx[i] = es2 || rs2; if (i === rs1.length - 1) c({ p, rs1, rx }) }
    const f1 = (rs1, p, rx, c) => rs1.forEach((ps2, i) => fs2(p + '/' + ps2, (es2, rs2) => f2(es2, rs2, i, p, rs1, rx, c)))
    return (p, c) => fs1(p, (es1, rs1) => es1 ? c(es1) : f1(rs1, p, [], c))
})()
//-------------------------------------------------------------
const read_dirInfo1a = (() => {
    const entry_is_read = (err, stat) => { const x = this; const {o, i} = x; o.entries[i] = stat; if (i === o.entries.length - 1) return x.cb(o) }
    const entries_foreach = (entry, i) => { const x = this; x.i = i; fs.stat(entry, entry_is_read.bind({ x })) }
    const entries_is_read = (err, entries) => { const x = this; if (err) return x.cb(err); x.o.entries = entries; entries.forEach(entries_foreach.bind(x)) }
    return (dir, cb) => fs.readdir(dir, entries_is_read.bind({ cb, o: { dir, states: [] } }))
})()

//-------------------------------------------------------------
const read_dirInfo2a = (() => {
    const entries_is_read = (entries, dir, states, cb) => entries.forEach((entry, i) => fs.stat(entry, (err, stat) => { states[i] = err || stat; if (i <= entries.length) cb({ dir, entries, states }) }))
    return (dir, cb) => fs.readdir(dir, (err, entries) => err ? cb(err) : entries_is_read(entries, dir, [], cb))
})()
const read_dirInfo2b = (() => {
    const fs1 = (ps1, cs1) => fs.readdir(ps1, cs1)
    //        const cs1 = (es1, rs1) => cs1(es1, rs1)
    const fs2 = (ps2, cs2) => fs.stat(ps2, cs2)
    //        const cs2 = (es2, rs2) => cs2(es2, rs2)

    const f1 = (rs1, p, rx, c) => rs1.forEach((ps2, i) => fs2(ps2, (es2, rs2) => { rx[i] = es2 || rs2; if (i <= rs1.length) c({ p, rs1, rx }) }))
    return (p, c) => fs1(p, (es1, rs1) => es1 ? c(es1) : f1(rs1, p, [], c))
    // fs1 = fs.readdir  ps1 = dir      rs1 = entries     cs1 = (er1, rs1) = cs1(er1,rs1)
    // fs2 = fs.stat     ps2 = entry    rs2 = stat
    // f  = dir_info     p = dir        r = dir_info      c = cb   rx = states
    // f1 = entries_is_read 
})()
//-------------------------------------------------------------
/*
    let o = f i
    let do o
 
    let f i do = { let c = make f i do; addque c}
    f i do
*/
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
const read_dirInfo4 = (() => {
    const read_entries = dir => { try { return fs.readdirSync(dir) } catch (e) { return e } }
    const read_stat = entry => { try { return fs.statSync(entry) } catch (e) { return e } }
    const is_err = (err) => err
    return (dir) => {
        let entries
        if (is_err(entries = read_entries(dir))) return entries
        let states = entries.map(read_stat)
        return { dir, entries, states }
    }
})()
//===========================================================================================
const read_dirInfo5 = (() => {
    const read_entries = (dir) => { try { return fs.readdirSync(dir) } catch (e) { return e } }
    const read_stat = (entry) => { try { return fs.statSync(entry) } catch (e) { return e } }
    const is_err = (err) => err
    return (dir) => {
        let entries = read_entries(dir)
        if (is_err(entries)) return entries
        let states = entries.map(read_stat)
        return { dir, entries, states }
    }
})()
//===========================================================================================
const test = (() => {
    const write_file = (nm, dir_info) => { nm, dir_info }
    //
    const dir1 = 'c:/users/abc/documents'
    //    const dir2 = 'c:/users/abc/documents/projects'
    //    const dir3 = 'c:/users/abc/documents/projects/node_modules'
    return (i) => { const {nm, fn} = i; fn(dir1, dir_info => write_file(nm, dir_info)) }
    //    console.log(read_dirInfo3(dir3, $dirInfo_is_read))
    //    console.log('starting reading [' + dir1 + ']')
})()
const a = {
    read_dirInfo1a,
    read_dirInfo2a,
    read_dirInfo2b,
    read_dirInfo3a,
    read_dirInfo3b,
    read_dirInfo4a,
    read_dirInfo5a,
    read_dirInfo1,
    read_dirInfo2,
}
for (let i of a) test(i)

const b = [read_dirInfo3,
    read_dirInfo4,
    read_dirInfo5,
]
b.forEach(fn => console.log(fn('c:/users/abc/documents')))