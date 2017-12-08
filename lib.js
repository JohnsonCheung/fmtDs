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
