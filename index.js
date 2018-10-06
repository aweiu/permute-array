function permute (arr, preVal = [], l = arr.length, rs = []) {
  for (let i = 0; i < arr.length; i++) {
    const _arr = arr.concat()
    preVal[l - arr.length] = _arr.splice(i, 1)[0]
    if (_arr.length === 0) rs.push(preVal.concat())
    else permute(_arr, preVal, l, rs)
  }
  return rs
}

console.log(permute([1, 2, 3]))
