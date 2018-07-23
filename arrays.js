var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]

function addElementToBeginningOfArray (array, element) {
  const arr = array
  arr.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array[0] = element
}