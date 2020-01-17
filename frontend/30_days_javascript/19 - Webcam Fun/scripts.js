const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const radios = document.querySelectorAll('input[name="effect"]')

let curEffect = document.querySelector('input[name="effect"]:checked').value


function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.srcObject = localMediaStream
      video.play()
    })
    .catch(err => {
      console.error('OH NO!!!', err)
    })
}

function paintToCanvas() {
  const width = video.videoWidth
  const height = video.videoHeight

  canvas.width = width
  canvas.height = height

  const FPS = 60
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)
    const pixels = ctx.getImageData(0, 0, width, height)
    window[curEffect](pixels)
    ctx.putImageData(pixels, 0, 0)
  }, 1000/FPS)
}

function takePhoto() {
  // sound effect
  snap.currentTime = 0
  snap.play()

  const data = canvas.toDataURL('image/jpeg')
  const link = document.createElement('a')
  link.href = data
  link.setAttribute('download', 'handsome')
  link.innerHTML = `<img src="${data}" alt="Handsome man" />`
  strip.insertBefore(link, strip.firstChild)
}

function applyRedEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100 // red
    pixels.data[i + 1] = pixels.data[i + 1] - 50  // green
    pixels.data[i + 2] = pixels.data[i + 2] / 2   // blue
  }
}

function applyRgbSplitEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 110] = pixels.data[i + 0] // red
    pixels.data[i + 100] = pixels.data[i + 1] // green
    pixels.data[i - 150] = pixels.data[i + 2] // blue
  }
}

function onRadioChange(e) {
  curEffect = e.target.value
}

getVideo()
video.addEventListener('canplay', paintToCanvas)
radios.forEach(radio => radio.addEventListener('change', onRadioChange))