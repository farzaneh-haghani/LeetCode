const singleNumber = function (nums) {
  let obj = {}
  nums.map(num => {
    if (obj[num]) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  })
  const result = [];
  for (let key in obj) {
    if (obj[key] === 1) {
      result.push(key)
    }
  }
  return result
}