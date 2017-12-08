function doc_tagNames(doc) {
  doc = doc||document
  var all = doc.all
  var ny = {}
  for(var j=0;j<all.length;j++) { 
    var nm = all[j].tagName
    if(!ny[nm])
      ny[nm]=true
  }
  return Object.getOwnPropertyNames(ny)
}
function doc_ids(doc) {
  doc = doc||document
  var all = doc.all
  var ids = {}
  for(var j=0;j<all.length;j++) {
    var nm = all[j].id
    ids[nm]
      ? ids[nm] += 1
      : ids[nm] = 1
  }
  return ids
}
function el_add_atr(el,nm,v) {
  el.setAttribute(nm,v)
}
function doc_add_id(doc) {
  doc = doc||document
  var all = doc.all
  var tagName_cnt_dic = {}
  for(var j=0;j<all.length;j++) {
    var el = all[j]
    var id = el.id
    if(!id) {
      var tagName = el.tagName
      var idVal = _idVal(tagName, tagName_cnt_dic)
      el_add_atr(el,"id",idVal)
    }
  }
  function _idVal(tagName, tagName_cnt_dic) {
    if(tagName_cnt_dic[tagName]===undefined) 
      tagName_cnt_dic[tagName]=0
    return tagName + (++tagName_cnt_dic[tagName])
  }
}
    
