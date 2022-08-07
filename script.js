console.log('Ready to go!')

// Declare variables for processing input in determineUniqueFeatures()
let combinedFeatures = []
let uniqueToOne = []
let uniqueToTwo = []

// Identify inputs, buttons, results containers
let inputOne = document.querySelector('#features-one')
let inputTwo = document.querySelector('#features-two')
let uniqueListOne = document.querySelector('#unique-list-one')
let sharedList = document.querySelector('#shared-list')
let uniqueListTwo = document.querySelector('#unique-list-two')
let compareButton = document.querySelector('#compare-button')
let clearButton = document.querySelector('#clear-button')

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

// Clear inputs, lists, and arrays
const resetPage = () => {
  inputOne.value = ''
  inputTwo.value = ''
  combinedFeatures = []
  uniqueToOne = []
  uniqueToTwo = []
  uniqueListOne.innerHTML = ''
  uniqueListTwo.innerHTML = ''
  sharedList.innerHTML = ''
}

// Control flow when "Compare" button is clicked
const compareStrings = () => {
  let a = inputOne.value
  let b = inputTwo.value
  determineUniqueFeatures(splitString(a), splitString(b))
  loadLists()
}

// Function to update UI after "Compare" clicked and strings parsed and compared
const loadLists = () => {
  uniqueToOne.forEach((word) => {
    let listItem = document.createElement('li')
    listItem.innerText = word
    uniqueListOne.appendChild(listItem)
  })
  combinedFeatures.forEach((word) => {
    let listItem = document.createElement('li')
    listItem.innerText = word
    sharedList.appendChild(listItem)
  })
  uniqueToTwo.forEach((word) => {
    let listItem = document.createElement('li')
    listItem.innerText = word
    uniqueListTwo.appendChild(listItem)
  })
}

// EVENT LISTENERS START
clearButton.addEventListener('click', (e) => resetPage())
compareButton.addEventListener('click', (e) => {
  compareStrings()
})
// EVENT LISTENERS END
