const max = enm => {
  let o;
  for(let i of enum) {
    if(o===undefined) {
      o = i
    } else {
      if(i>o) {
        o = i
      }
    }
  }
}
const min = enm => {
  let o;
  for(let i of enum) {
    if(o===undefined) {
      o = i
    } else {
      if(i<o) {
        o = i
      }
    }
  }
}
const map1 = f => enm => {
  let o =[]
  for(let i of enm) {
    o.push(f(i))
  }
  return o
}
