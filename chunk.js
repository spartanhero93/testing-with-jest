const chunkArray = (arr, len) => {
  const chunkedArr = []

  arr.forEach(val => {
    const last = chunkedArr[chunkedArr.length - 1]
    !last || last.length === len ? chunkedArr.push([val]) : last.push(val)
  })

  return chunkedArr
}

module.exports = chunkArray
