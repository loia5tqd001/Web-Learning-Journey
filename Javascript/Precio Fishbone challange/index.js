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

console.log(process(availableToys, wishes))
