// Declare variables for processing input in processFeaturesToLists()
let combinedFeaturesArray = []
let uniqueFeaturesArrayOne = []
let uniqueFeaturesArraytwo = []

// Textarea Inputs
let featuresInputOne = document.querySelector('#features-one')
let featuresInputTwo = document.querySelector('#features-two')
// List containers for results
let uniqueListOne = document.querySelector('#unique-list-one')
let sharedList = document.querySelector('#shared-list')
let uniqueListTwo = document.querySelector('#unique-list-two')
// Control Buttons
let compareButton = document.querySelector('#compare-button')
let clearButton = document.querySelector('#clear-button')
// Hero "About"
let hero = document.querySelector('.hero')
let aboutButton = document.querySelector('#about')

// Generate a new array of unique values from the input string
const splitString = (string) => {
  let featuresArray = string.split(/,| /)
  return [...new Set(featuresArray.filter((s) => s.length > 0))]
}

// Compare the two arrays and place into buckets: Unique vs. Shared
const processFeaturesToLists = (A, B) => {
  A.forEach((word) => {
    B.includes(word)
      ? combinedFeaturesArray.push(word)
      : uniqueFeaturesArrayOne.push(word)
  })
  B.forEach((word) => {
    A.includes(word) ? null : uniqueFeaturesArraytwo.push(word)
  })
}

// Clear inputs, lists, and arrays
const resetPage = () => {
  featuresInputOne.value = ''
  featuresInputTwo.value = ''
  combinedFeaturesArray = []
  uniqueFeaturesArrayOne = []
  uniqueFeaturesArraytwo = []
  uniqueListOne.innerHTML = ''
  uniqueListTwo.innerHTML = ''
  sharedList.innerHTML = ''
}

// Control flow when "Compare" button is clicked
const compareStrings = () => {
  let a = featuresInputOne.value
  let b = featuresInputTwo.value
  if (a.length > 0 && b.length > 0) {
    processFeaturesToLists(splitString(a), splitString(b))
    loadLists()
  } else {
    // createAlert() -- create a mechanism to alert errors
  }
}

// Function to update UI after "Compare" clicked and strings parsed and compared
const loadLists = () => {
  uniqueFeaturesArrayOne.forEach((word) => {
    let listItem = document.createElement('li')
    listItem.innerText = word
    uniqueListOne.appendChild(listItem)
  })
  combinedFeaturesArray.forEach((word) => {
    let listItem = document.createElement('li')
    listItem.innerText = word
    sharedList.appendChild(listItem)
  })
  uniqueFeaturesArraytwo.forEach((word) => {
    let listItem = document.createElement('li')
    listItem.innerText = word
    uniqueListTwo.appendChild(listItem)
  })
}

// Function to toggle the "About" hero based on user click in header
const toggleAbout = () => {
  hero.classList.toggle('is-hidden')
}

// EVENT LISTENERS START
clearButton.addEventListener('click', (e) => resetPage())
compareButton.addEventListener('click', (e) => {
  compareStrings()
})
aboutButton.addEventListener('click', () => toggleAbout())

// EVENT LISTENERS END
