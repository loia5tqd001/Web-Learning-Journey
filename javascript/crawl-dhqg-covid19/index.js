const axios = require('axios') // to call request and get html files
const cheerio = require('cheerio') // to parse html to data
const fs = require('fs') // (filesystem), to write data to json files
const useragent = require('random-useragent') // to create random useagent, prevent from being blocked when making continuous requests
const _ = require('lodash') // javascript utility library, help writing more concise code

function getAllStudentCode() {
  return [
    ..._.range(15520000, 15522500),
    ..._.range(16520000, 16522500),
    ..._.range(17520000, 17522500),
    ..._.range(18520000, 18523000),
    ..._.range(19520000, 19523000)
  ]
}

// call ajax and get info of 1 student, with his/her student code
// if student doesn't exist in the system, return undefined
async function getInfo1Student(mssv) {
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

    switch (key) {
      case 'gender':
        info[key] = val === 'true' ? 'Nữ' : 'Nam'
        break

      default:
        info[key] = val
    }
  }
  return info
}

async function main() {
  // chunked student code: [[15520000..15520099],[15520100,15520199],...]
  // for each 100 students, save to 1 file json
  const studentCodes = _.chunk(getAllStudentCode(), 100)

  for (const chunk of studentCodes) {
    const chunkOfInfo = []

    for (let i = 0; i < chunk.length; i++) {
      const mssv = chunk[i]
      try {
        const info = await getInfo1Student(mssv)
        info && chunkOfInfo.push(info) && console.log('got', mssv)
      } catch {
        console.log('failed at mssv =', mssv)
        i--
      }
    }

    // each chunk of info, write to 1 file json
    fs.writeFileSync(
      `data_${chunk[0]}.json`,
      JSON.stringify(chunkOfInfo, null, 2)
    )
  }
}

main()
