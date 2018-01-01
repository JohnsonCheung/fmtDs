// ==UserScript==
// @name         any site
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  download bible!
// @author       You
// @match        *://*
// @run-at      document-start
// @grant        none
// ==/UserScript==
(function() {
'use strict';
const parseHTML=htmlStr=>{let o=document.createElement("html"); o.innerHTML=htmlStr; return o;};
const assignPrp=(o,nm)=>v=>o[nm]=v;
const ver='bbe';
const pmBkAy=()=>["gen", "prmis"];
const pmNCh=()=>bk=>1;
const pmNPar=bk=>ch=>1;
const pmTblCh=bk=>["bk","ch"];
const pmTblPar=()=>["bk","ch","par","parTxt"];
const pmHTMLBk=(bk)=>"";
const map=f=>ay=>{
    let o=[];
    for(let i of ay)
        o.push(f(i));
    return o;
};
const assignObj=toObj=>o=>{
    for(let i in o)
        toObj[i]=o[i];
};
const verQStr_str=ver_s=>`version=${ver_s}`;
const verQStr_ay=ver_ay=>map(verQStr_str)(ver_ay);
const verQStr=ver=>isStr(ver)?verQStr_str(ver):verQStr_ay(ver);
const url=ver=>bk=>ch=>`/cgibin/ob.cgi?chapter=${ch}&book=${bk}&${verQStr(ver)}`;
const pmGet=url=>new Promise((rs,rj)=>{
    const x = new XMLHttpRequest();
    x.onload = function() {
        if(this.status===200)
            rs(this.response);
    };
    x.onerror=e=>rj(e);
    x.open("GET",url);
    x.send();
});
const pipe=i=>(...f)=>{let o=i; for(let ff of f) o=ff(o); return o;};
const compose=(...f)=>i=>pipe(i)(...f);
const dmp=console.log;
//pmGet("/cgibin/ob.cgi?chapter=1&book=gen&version=hgb&version=kjv&version=bbe").then(dmp);
window.$R={};
assignObj(window.$R)({assignObj,assignPrp,map,dmp,pmGet,pipe,compose, parseHTML});
})();
