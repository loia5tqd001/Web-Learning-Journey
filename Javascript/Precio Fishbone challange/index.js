// Challange: Find all toys that are wished but not available. Do not duplicate

var availableToys = [
  { name: 'PX4', color: 'red' },
  { name: 'ABC', color: 'white' },
  { name: 'Nunu', color: 'black' },
]
var wishes = [
  { name: 'ABC', color: 'black' },
  { name: 'Nunu', color: 'black' },
  { name: 'Nunu', color: 'black' },
]
var result = [
  { name: 'Nunu', color: 'black' }
]

function stringify(object) {
  return JSON.stringify(object)
}

function process(availableToys, wishes) {
  var _availableToys = availableToys.map(stringify)
  var _wishes = wishes.map(stringify)

  var result = _wishes.filter(function(_wish) {
    return _availableToys.includes(_wish)
  })

  // remove duplicate
  result = result.filter(function(el, i) {
    return result.indexOf(el) !== i
  })

  // parse to objects
  result = result.map(function(obj) {
    return JSON.parse(obj)
  })

  return result
}

function process2(availableToys, wishes) {
  // filter wishes that can't be found in available list
  var result = wishes.filter(function(wish) {
    return availableToys.find(function(avai) {
      return JSON.stringify(avai) === JSON.stringify(wish)
    })
  })

  // remove duplicate
  result = result.filter(function(el) {
    return el !== result.find(function(el2) {
      return JSON.stringify(el2) === JSON.stringify(el)
    })
  })

  return result
}

console.log('Expected: ', result)
console.log(process(availableToys, wishes))
console.log(process2(availableToys, wishes))
