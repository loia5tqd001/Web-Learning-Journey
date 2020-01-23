// ls -l
// find . -name '*capture-min.png' -print
const showcaseFolders = [
  '01 - JavaScript Drum Kit',
  '02 - JS and CSS Clock',
  '03 - CSS Variables',
  '05 - Flex Panel Gallery',
  '06 - Type Ahead',
  '08 - Fun with HTML5 Canvas',
  '10 - Hold Shift and Check Checkboxes',
  '11 - Custom Video Player',
  '12 - Key Sequence Detection',
  '13 - Slide in on Scroll',
  '15 - LocalStorage',
  '16 - Mouse Move Shadow',
  '17 - Sort Without Articles',
  '19 - Webcam Fun',
  '20 - Speech Detection',
  '22 - Follow Along Link Highlighter',
  '23 - Speech Synthesis',
  '24 - Sticky Nav',
  '26 - Stripe Follow Along Nav',
  '27 - Click and Drag',
  '28 - Video Speed Controller',
  '29 - Countdown Timer',
  '30 - Whack A Mole'
]

const gallery = document.querySelector('.gallery')

gallery.innerHTML = showcaseFolders.map(
  folder => `
    <a href="./${folder}/index.html" target="_blank">
      <figure><img src="./${folder}/capture-min.png" alt="${folder}"></figure>
      <p>${folder}</p>
    </a>
`
).join('\n')