// ==UserScript==
// @name         any site
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  download bible!
// @author       You
// @match        *://*
// @run-at      document-start
// @grant        nonef
// ==/UserScript==
a2 = ()=>{
    'use strict'
    //@ns function export --------------------------------------
    const reId = /(^[_a-zA-Z]\w*) = /
    const f2expIdAy = f=>{
        if (dbg.f2expIdAy) {
            debugger
        }
        const id = s=>{
            const a = s.match(reId)
            return a && a[1]
        }
        let ay = f.toString().split(/^    const /m)
        let ay1 = map(id)(ay)
        return ay1
    }
    //@ns data table -----------------------------------------
    const assertIsVdtFny4Drk = (fny,drk)=>{
        assertIsDrk(drk)
        assertIsEq(fny.length, drk2nfld(drk), "fny.length", "drk2nfld(drk)")
        const t = isBet(0, dt.fny.length - 1)(pkCol)
        if (!t) {
            const msg = `pkCol(${pkCol}) must within fny-size(${dt.fny.length})`
            assert(t, msg)
        }
        return dt
    }
    const Dtk = class {
        constructor(fny=[], drk=new Drk() , nm='dtk') {
            assertIsVdtFny4Drk(fny, drk)
            const o = {}
            const mkDr = dr=>pushPrp(dr)(o, dr[pkCol])
            each(mkDr)(dt.dry)
            this.pkDr = o
            this.pkCol = pkCol
        }
    }
    const dtk2dtSrt = dtk=>dtk2dt_(dt2pkNy(dtk))
    const dtk2dt = dtk=>dtk2dt_(dt2pkNy(dtk))
    const dtk2dr = dtk=>pk=>dtk.dry[pk]
    const dtk2dt_ = (dtk,pky)=>{
        new Dt(fny,drk,nm)
    }
    const dt2dtk = (dt,pkCol=0)=>new Dtk(dt,pkCol)
    const Dryf = class {
        constructor(dryf=[]) {}
    }
    const Dt = class {
        constructor(fny=[], dry=[], name='dt') {
            this.name = name
            this.dryf = new dryf(dryf)
        }
    }
    const isDt = dt=>ctorNm(dt) === 'Dt'
    const assertIsDt = dt=>assert(isDt(dt), {
        msg: 'must be Dt',
        dt
    })

    //@ns assert -----------------
    const assert = (t,msg='error',...v)=>{
        if (!t)
            throw new Error('assert ' + msg)
    }
    //@ns error ---------------------------------
    const BRK = '\n=============================\n'
    const dmpMsgV = (msg='error',...v)=>map(dmp)(concat(BRK, msg, v))
    const thwEr = ()=>{
        throw new Error()
    }
    const thw = (msg="error",...v)=>(dmpMsgV(msg, v),
    thwEr())

    //@ object -----------------------------------
    const ctorNm = o=>o.constructor.name

    //@ns predict operation ---------------
    const and = (...p)=>v=>{
        for (pp of p)
            if (!pp(v))
                return false
        return true
    }
    const or = (...p)=>v=>{
        for (pp of p)
            if (pp(v))
                return true
        return false
    }
    const not = p=>v=>!p(v)

    //@ns is ------------------------------
    const isNum = o=>ctorNm(o) === "Number"
    const isNull = o=>o === null
    const isNotNull = not(isNull)
    const isStr = o=>ctorNm(o) === "String"
    const isAy = o=>ctorNm(o) === "Array"
    const isPfx = pfx=>s=>pfx === s.substr(0, pfx.length)
    const rmvPfx = pfx=>s=>s.substr(pfx.length)
    //@ns property operation
    const setPrp = v=>(o,nm)=>o[nm] = v
    //@ns array operation -------------------------
    const ay2obj = v=>ay=>{
        const o = {}
        for (let i of ay)
            setPrp(i)(o, i)
        return o
    }
    //@ns object operation
    const setObj = fmObj=>o=>{
        for (let nm in fmObj)
            setPrp(fmObj[nm])(o, nm)
    }

    //@ns dbg ------------------------------------------------
    const dbg = ay2obj(false)("f2expIdAy".split(/\s/))

    //@ns array operation 
    const concat = Array.prototype.concat
    const each = f=>ay=>{
        for (let i of ay)
            f(i)
    }
    const map = f=>ay=>{
        let o = []
        for (let i of ay)
            o.push(f(i))
        return o
    }
    const where = f=>ay=>{
        const o = []
        for (let i of ay)
            if (f(i))
                o.push(i)
        return o
    }

    const toEle = htmlStr=>{
        let o = document.createElement("html")
        o.innerHTML = htmlStr
        return o
    }
    const pushPrp = v=>(o,prpNm)=>{
        assertNoPrp(prpNm)(o)
        o[prpNm] = v
    }
    const mkcall = (f,...p)=>()=>f(...p);
    const mkpm = (f,...p)=>new Promise((rs,rj)=>f(...p, (er,r)=>er ? rj(er) : rs(r)));
    const pmDmp = af=>(...args)=>af(...args).then(dmp);
    const pipe = i=>(...f)=>{
        let o = i;
        for (let ff of f)
            o = ff(o)
        return o
    }
    const compose = (...f)=>i=>pipe(i)(...f)
    const dmp = console.log
    //==================================================================
    //==================================================================
    //==================================================================
    const verQStr_str = ver_s=>`version=${ver_s}`
    const verQStr_ay = ver_ay=>map(verQStr_str)(ver_ay)
    const verQStr = ver=>isStr(ver) ? verQStr_str(ver) : verQStr_ay(ver)
    const url = ver=>bk=>ch=>`/cgibin/ob.cgi?chapter=${ch}&book=${bk}&${verQStr(ver)}`
    const pmGet = url=>new Promise((rs,rj)=>{
        const x = new XMLHttpRequest();
        x.onload = function() {
            if (this.status === 200)
                rs(this.response)
        }
        x.onerror = e=>rj(e)
        x.open("GET", url)
        try {
            x.send()
        } catch (e) {
            rj(e)
        }
    }
    )
    const verAy = ['bbe', 'kjv', 'hb5', 'hgb'];
    const ver = verAy[0];
    const urlBk = ver=>{
        switch (ver) {
        case 'bbe':
            return '/bbe.html'
        case 'kjv':
            return '/bbe.html'
        case 'hb5':
            return '/b5/hb5.html'
        case 'hgb':
            return '/gb/hgb.html'
        default:
            throw {
                msg: `invalid ver(${ver}).  valid ver are: kjv bbe hb5 hgb`
            }
        }
    }
    const href2bk = href=>{
        if (dbg.href2bk)
            debugger ;const ay = href.split("&")
        const pfx = "book="
        const ay1 = $R.where(isPfx(pfx))(ay)
        return rmvPfx(pfx)(ay1[0])
    }
    const pmBkVerAy = async(ver)=>{
        if (dbg.pmBkAy)
            debugger ;const isBkEle = el=>el.getAttribute("href").includes("chapter=1");
        const toBkDr = el=>{
            if (dbg.toBkDr)
                debugger ;const atr = t=>el.getAttribute(t)
            const href = href2bk(atr('href'));
            const tit = atr('title');
            const txt = el.childNodes[0].nodeValue;
            return [href, tit, txt]
        }
        const htmlStr = await pmGet(urlBk(ver));
        const el = toEle(htmlStr);
        const elAAy = el.getElementsByTagName("A");
        const bkElAy = where(isBkEle)(elAAy);
        return map(toBkDr)(bkElAy);
    }
    const pmBkAy = ()=>{
        const v0 = pmBkVerAy(verAy[0]);
        const v1 = pmBkVerAy(verAy[1]);
        const v2 = pmBkVerAy(verAy[2]);
        const v3 = pmBkVerAy(verAy[3]);
        return Promise.all([v0, v1, v2, v3]);
    }
    const pmNCh = ()=>bk=>1
    const pmNPar = bk=>ch=>1
    const pmTblCh = bk=>["bk", "ch"]
    const pmTblPar = ()=>["bk", "ch", "par", "parTxt"]
    const pmHTMLBk = (bk)=>""

    //if(window.document.location.href==="http://www.o-bible.com/") alert('a');
    //pmGet("/cgibin/ob.cgi?chapter=1&book=gen&version=hgb&version=kjv&version=bbe").then(dmp);
    const exports = {
        reId,
        f2expIdAy,
        assertIsVdtFny4Drk,
        Dtk,
        dtk2dtSrt,
        dtk2dt,
        dtk2dr,
        dtk2dt_,
        dt2dtk,
        Dryf,
        Dt,
        isDt,
        assertIsDt,
        assert,
        BRK,
        dmpMsgV,
        thwEr,
        thw,
        ctorNm,
        and,
        or,
        not,
        isNum,
        isNull,
        isNotNull,
        isStr,
        isAy,
        isPfx,
        rmvPfx,
        setPrp,
        ay2obj,
        setObj,
        dbg,
        concat,
        each,
        map,
        where,
        toEle,
        pushPrp,
        mkcall,
        mkpm,
        pmDmp,
        pipe,
        compose,
        dmp,
        verQStr_str,
        verQStr_ay,
        verQStr,
        url,
        pmGet,
        verAy,
        ver,
        urlBk,
        href2bk,
        pmBkVerAy,
        pmBkAy,
        pmNCh,
        pmNPar,
        pmTblCh,
        pmTblPar,
        pmHTMLBk,
        exports
    }
    setObj(exports)(window.$R = {})
    pmBkAy().then(dmp)
}
a2()
