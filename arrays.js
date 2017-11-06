var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

element = "foo"

function addElementToBeginningOfArray(array, element) {
  [element, array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [array.unshift(element)]
  return array
}

function addElementToEndOfArray(array, element) {
  [array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  [array.push(element)]
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  [array.shift(array)]
  return array
}

function removeElementFromBeginningOfArray(array) {
  [array.slice(1)]
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  [array.pop(array)]
  return array
}

function removeElementFromEndOfArray(array) {
  [array.slice(array.length - 1)]
  return array
}
