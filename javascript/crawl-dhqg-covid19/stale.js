// get free proxies from the sslproxies site
async function getProxies() {
  try {
    const proxies = {
      ipAddresses: [],
      portNumbers: []
    }

    const html = await axios.get('https://sslproxies.org/')
    const $ = cheerio.load(html.data)

    $('#proxylisttable > tbody > tr > td:nth-child(1)').each(function() {
      proxies.ipAddresses.push($(this).text())
    })

    $('#proxylisttable > tbody > tr > td:nth-child(2)').each(function() {
      proxies.portNumbers.push($(this).text())
    })

    const minLength = Math.min(
      proxies.ipAddresses.length,
      proxies.portNumbers.length
    )
    proxies.ipAddresses.length = minLength
    proxies.portNumbers.length = minLength

    return proxies
  } catch (err) {
    console.log('Error loading proxy, please try again', err)
  }
}

// pick a random proxy from proxies
function getRandomProxy(proxies) {
  const randomIndex = ~~(Math.random() * proxies.ipAddresses.length)
  return {
    host: proxies.ipAddresses[randomIndex],
    port: +proxies.portNumbers[randomIndex]
  }
}

// get all possible student codes in UIT: 19520000 -> 19523000, 18520000 -> 18523000, 17520000 -> 17523000, 16520000 -> 16523000
function getAllMssv() {
  const array = Array.from({ length: 3000 }).map((_, index) => {
    const tail = '52' + index.toString().padStart(4, '0')
    return ['19' + tail, '18' + tail, '17' + tail, '16' + tail]
  })
  const allMssv = []
  allMssv.push(...array.map(x => x[0]))
  allMssv.push(...array.map(x => x[1]))
  allMssv.push(...array.map(x => x[2]))
  allMssv.push(...array.map(x => x[3]))
  return allMssv
}

async function main() {
  const proxies = await getProxies()
  // ECONNRESET error
  const promises = getAllMssv().map(mssv => getInfo(mssv, proxies))
  const list = await Promise.all(promises)
  return list.filter(item => item !== undefined)
}
