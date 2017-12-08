function doc_tagNames(doc) {
  var all = doc.all
  var ny = {}
  for(var j=0;j<all.length;j++) { 
    var nm = all[j].tagName
    if(!ny[nm])
      ny[nm]=true
  }
  return Object.getOwnPropertyNames(ny)
}
