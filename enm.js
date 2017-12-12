const enmMax = enm => {
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
const enmMin = enm => {
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
const enmMap = f => enm => {
  let o =[]
  for(let i of enm) {
    o.push(f(i))
  }
  return o
}
const compose = (...f) => p => {
  for(i of f) p = i(p)
  return p
}
const pipe = (p,...f) = compose(...f)(p)
const rmvFstChr = s => s.substr(1)
const rmvLasChr = s => s.substr(0,s.length-1)
const left = n => s => s.substr(0,n)
const len = s => s.length
const right = n => s => s.substr(len(s)-n,n)
const mid = ix => s => s.substr(ix)
const midPos = ix => len => s => s.substr(ix,len)
const eq => a => b => a === b
const ne => a => b => a !== b
const allTrue = ay => {
  for(i of ay) {
    if(!i) return false
  }
  return true
}
const allFalse = ay => {
  for(i of ay) {
    if(i) return false
  }
  return true
}
const prp => pth => o => {
  try {
    return eval("o" + pth)
  } catch(e) {
    return undefined
  }
}
