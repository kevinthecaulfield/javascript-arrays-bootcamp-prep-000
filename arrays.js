var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

var arrayString = "foo"

var elementString = 1

function addElementToBeginningOfArray() {
  return [arrayString, elementString]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
  }
}
