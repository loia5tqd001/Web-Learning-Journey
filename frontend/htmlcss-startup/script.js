var listOfPersons = [
  {
    addresses: [
      { lat: 11, long: 11 },
      { lat: 22, long: 22 }
    ],
    profile: [{ image: 'some_url1', name: 'peter parker' }]
  },
  {
    addresses: [
      { lat: 33, long: 33 },
      { lat: 44, long: 44 }
    ],
    profile: [{ image: 'some_url2', name: 'bruce wayne' }]
  }
]

var result = listOfPersons.map(person => Array.from({
  ...person.addresses.map(address => ({
    image: person.profile[0].image,
    ...address
  }))
}))

console.log(result)