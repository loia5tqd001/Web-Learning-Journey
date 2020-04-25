// const community = [
//   { name: 'Larry', age: 29, friends: ['Bob', 'Anna', 'Katlin'] },
//   { name: 'Bob', age: 16, friends: ['Larry'] },
//   { name: 'Anna', age: 25, friends: ['Larry', 'Katlin'] }
// ]

// const result = [
//   community
//     .flatMap(x => x.friends)
//     .filter(friend => !community.map(x => x.name).includes(friend))
// ]

// console.log('result', result)

// const desiredOutput = ['Katlin']
// console.log('desiredOutput', desiredOutput)



// const community = [
//   { name: 'Larry', age: 29, friends: ['Bob', 'Anna', 'Katlin'] },
//   { name: 'Bob', age: 16, friends: ['Larry'] },
//   { name: 'Anna', age: 25, friends: ['Larry', 'Katlin'] }
// ]

// const result = [
//   ...new Set(
//     community
//       .flatMap(x => x.friends)
//       .filter(friend => !community.map(x => x.name).includes(friend))
//   )
// ]

// console.log('result', result)

// const desiredOutput = ['Katlin']
// console.log('desiredOutput', desiredOutput)

const obj1 = { slotIDs: ['5e0301f353ee2a0546298f15'] }
const obj2 = { slotIDs: ['5e0301f353ee2a0546298f15', '5e03050453ee2a0546298f1c'] }

const result = Object.assign(obj1, obj2).slotIDs

console.log(result)