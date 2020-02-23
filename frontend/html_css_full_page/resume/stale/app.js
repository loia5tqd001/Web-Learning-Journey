/* ================================================= */
/**
 * UTILS
 */

function trimSpace(string) {
  return string.replace(/\s/g, '')
}

function markdownToHtml(string) {
  
}


/* ================================================= */
/**
 * TEST
 */

function test({ output, expect, functionName }) {
  const expected = trimSpace(output) === trimSpace(expect)
  
  if (expected) {
    console.info(`Passed ${functionName}`)
  } else {
    console.error(`Failed ${functionName}`) 
    console.log(trimSpace(output))
    console.log(trimSpace(expect))
  }
}


/* ================================================= */
/**
 * MAIN
 */

(async function main() {

  try {
    const res = await fetch('./data.json')
    const { info, media, sections } = await res.json()
    

  }
  catch (err) {
    console.error(err)
  }

})();


/* ================================================= */
/**
 * BUILDERS
 */

/**==========================buildInfo
 * @param {String}: name
 * @param {Array}: others
 */
function buildInfo({ name, others }) {
  return `
    <div class="info">
      <h1>${name}</h1>
      <p> ${others.map(line => `${line} <br>`).join('\n')} </p>
    </div>
  `
}
(function () {
  test({
    functionName: 'test_buildInfo',
    output: buildInfo({
      name: 'Nguyễn Huỳnh Lợi',
      others: [
        'Thu Duc, Ho Chi Minh, VN',
        '0961178682',
        'loia5tqd001@gmail.com',
      ]
    }),
    expect: `
      <div class="info">
        <h1>Nguyễn Huỳnh Lợi</h1>
        <p> 
          Thu Duc, Ho Chi Minh, VN <br>
          0961178682 <br>
          loia5tqd001@gmail.com <br>
        </p>
      </div>
    `
  })
})();

/**==========================buildMedia
 * @param {String}: iconClass
 * @param {String}: href
 * @param {String}: display
 */
function buildMedia({ iconClass, href, display }) {
  return `
    <p>
      <a href="${href}">
        <i class="${iconClass}"></i>
        ${display}
      </a>
    </p>
  `
}
;(function() {
  test({
    functionName: 'test_buildMedia',
    output: buildMedia({
      iconClass: 'fab fa-stack-overflow',
      href: 'https://stackoverflow.com/users/9787887',
      display: 'stackoverflow.com/users/9787887'
    }),
    expect: `
      <p>
        <a href="https://stackoverflow.com/users/9787887">
          <i class="fab fa-stack-overflow"></i>
          stackoverflow.com/users/9787887
        </a>
      </p>
    `
  })
})()

/**==========================buildSection
 * @param {String}: section
 * @param {Boolean}: subSection
 * @param {String}: iconClass
 * @param {Array}: contents
 */
function buildSection({ section, subSection, iconClass, contents }) {
  function buildWithSub(contents) {
    
  }
  function buildWithoutSub(contents) {
    return `
    <p class="skills">
      <strong>HTML5, CSS3, Javascript, SCSS, VueJS, React</strong> <br>
      <strong>Git, Github</strong> <br>
      <strong>Figma, Photoshop</strong> <br>
      <em>Willing to learn: Nodejs, Typescript, Puppeteer, CI/CD,...</em> <br>
    </p>   
    `
    return markdownToHtml(content)
  }
  
  return `
    <h2><i class="${iconClass}"></i> ${section}</h2>
    ${subSection ? buildWithSub(contents) : buildWithoutSub(contents)}
    <p class="skills">
      <strong>HTML5, CSS3, Javascript, SCSS, VueJS, React</strong> <br>
      <strong>Git, Github</strong> <br>
      <strong>Figma, Photoshop</strong> <br>
      <em>Willing to learn: Nodejs, Typescript, Puppeteer, CI/CD,...</em> <br>
    </p>
  `
}
;(function() {
  test({
    functionName: 'test_buildMedia',
    output: buildMedia({
      iconClass: 'fab fa-stack-overflow',
      href: 'https://stackoverflow.com/users/9787887',
      display: 'stackoverflow.com/users/9787887'
    }),
    expect: `
      <p>
        <a href="https://stackoverflow.com/users/9787887">
          <i class="fab fa-stack-overflow"></i>
          stackoverflow.com/users/9787887
        </a>
      </p>
    `
  })
})()
