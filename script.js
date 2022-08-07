console.log('Ready to go!')
// Declare variables for processing input in determineUniqueFeatures()
let combinedFeatures = []
let uniqueToOne = []
let uniqueToTwo = []

// Identify inputs, buttons, results containers
let inputOne = document.querySelector('#editor-one')
let inputTwo = document.querySelector('#editor-two')
let uniqueListOne = document.querySelector('#unique-list-one')
let sharedList = document.querySelector('#shared-list')
let uniqueListTwo = document.querySelector('#unique-list-two')
let compareButton = document.querySelector('#compare-button')

// test strings
let stringOne =
  'oneOnly,oneOnly,oneOnly2,  bothone,, bothtwo, boththree  bothfour,bothfour'
let stringTwo =
  'twoOnly,twoOnly,twoOnly2,  bothone,, bothtwo, boththree  bothfour,bothfour'
// test strings END

// Generate a new array of unique values from the input string
const splitString = (string) => {
  let featuresArray = string.split(/,| /)
  return [...new Set(featuresArray.filter((s) => s.length > 0))]
}

// Compare the two arrays and place into buckets: Unique vs. Shared
const determineUniqueFeatures = (A, B) => {
  A.forEach((word) => {
    B.includes(word) ? combinedFeatures.push(word) : uniqueToOne.push(word)
  })
  B.forEach((word) => {
    A.includes(word) ? null : uniqueToTwo.push(word)
  })
}

determineUniqueFeatures(splitString(stringOne), splitString(stringTwo))

// const createSharedList = (one, two) => {
//   let allFeatures = one.concat(two).sort()
//   let combinedFeatures = [...new Set(allFeatures)]
//   return combinedFeatures
// }
