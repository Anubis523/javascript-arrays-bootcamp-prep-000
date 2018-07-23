var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]

function addElementToBeginningOfArray (array, element) {
  const arr = array
  arr.unshift(element)
  return arr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array[0] = element
  return array
}

function addElementToEndOfArray (array, element) {
  const arr = array
  arr.push(element)
  return arr
}

function destructivelyAddElementToEndOfArray (array, element) {
  array[array.length] = element
  return array
}