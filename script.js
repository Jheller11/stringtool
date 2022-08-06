console.log('script running')

// test strings
let stringOne =
  'word,both otherword,,  test testtwo testthree, word,wordtwo,otherword'
let stringTwo = 'otherword, both both, testfive, testsix,testseven eight'

const splitString = (string) => {
  let featuresArray = string.split(/,| /)
  return featuresArray.filter((s) => s.length > 0)
}

const compareFeatures = (one, two) => {
  let allFeatures = one.concat(two).sort()
  let uniqueFeatures = [...new Set(allFeatures)]
  return uniqueFeatures
}

console.log(compareFeatures(splitString(stringOne), splitString(stringTwo)))
