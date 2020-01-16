const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const label = player.querySelector('.label')
const progressBar = player.querySelector('.progress')
const progressFilledBar = player.querySelector('.progress__filled')
const toggleBtn = player.querySelector('.toggle')
const skipForwardBtn = player.querySelector('[data-skip="25"]')
const skipBackwardBtn = player.querySelector('[data-skip="-10"]')
const fullscreenBtn = player.querySelector('.player__button.--fullscreen')
const volumeRange = player.querySelector('input[name="volume"]')
const playbackRange = player.querySelector('input[name="playbackRate"]')


function togglePlay() {
  video.paused ? video.play() : video.pause()
}

function togglePlayButton() {
  const nextIcon = video.paused ? '►' : '❚❚'
  toggleBtn.textContent = nextIcon
}

function updateProgressVideo() {
  const percent = (video.currentTime / video.duration) * 100
  progressFilledBar.style.flexBasis = percent + '%'
}

function skip() {
  const amount = this.dataset.skip
  video.currentTime += +amount
  this.classList.add('active')
  activeLabelCurrentTime()
}

function activeLabelCurrentTime() {
  const time = new Date(0, 0, 0, 0, 0, video.currentTime)
  activeLabel(`${time.getMinutes()}:${time.getSeconds().toString().padStart(2, '0')}`)  
}

function activeLabel(string) {
  label.textContent = string
  label.classList.add('active')
}

function scrub(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration
  video.currentTime = scrubTime
  activeLabelCurrentTime()
}

function onRangeChanged() {
  video[this.name] = this.value
  activeLabel(this.value)
}

function handleRange(element, type = 'UP' | 'DOWN' | 'MAX' | 'MIN') {
  const medium = ( (+element.min) + (+element.max) ) / 2 

  if (type === 'MAX') {
    element.value = element.value === element.max ? medium : element.max
  }
  else if (type === 'MIN') {
    element.value = element.value === element.min ? medium : element.min
  }
  else {
    const { step } = element
    const amount = type === 'UP' ? +step : -step
    element.value = +element.value + amount
  }

  onRangeChanged.call(element)
}

function verifyRemovingActive() {
  setTimeout(() => {
    this.classList.remove('active')
  }, 1000);
}
function removeActive() {
  this.classList.remove('active')
}

function dispatchKeydown(e) {
  // console.log(e.key)
  switch (e.key) {
    case ' ':
    case 'Enter':
      togglePlay()
      break

    case 'f':
      video.requestFullscreen()
      break

    case 'ArrowLeft':
      skip.call(skipBackwardBtn)
      break

    case 'ArrowRight':
      skip.call(skipForwardBtn)
      break

    case 'ArrowUp':
      handleRange(volumeRange, 'UP')
      break

    case 'ArrowDown':
      handleRange(volumeRange, 'DOWN')
      break
      
    case 'm':
      handleRange(volumeRange, 'MIN')
      break

    case '[':
      handleRange(playbackRange, 'DOWN')
      break

    case ']':
      handleRange(playbackRange, 'UP')
      break
  }
}


document.addEventListener('keydown', dispatchKeydown)

video.addEventListener('timeupdate', updateProgressVideo)

video.addEventListener('click', togglePlay)
video.addEventListener('play', togglePlayButton)
video.addEventListener('pause', togglePlayButton)
toggleBtn.addEventListener('click', togglePlay)

skipForwardBtn.addEventListener('click', skip)
skipForwardBtn.addEventListener('transitionend', removeActive)
skipForwardBtn.addEventListener('transitioncancel', removeActive)
skipForwardBtn.addEventListener('transitionrun', verifyRemovingActive)
skipBackwardBtn.addEventListener('click', skip)
skipBackwardBtn.addEventListener('transitionend', removeActive)
skipBackwardBtn.addEventListener('transitioncancel', removeActive)
skipBackwardBtn.addEventListener('transitionrun', verifyRemovingActive)

label.addEventListener('animationend', removeActive)

fullscreenBtn.addEventListener('click', () => video.requestFullscreen())
video.addEventListener('dblclick', () => video.requestFullscreen())

volumeRange.addEventListener('input', onRangeChanged)
playbackRange.addEventListener('input', onRangeChanged)

let isScrubbing = false
progressBar.addEventListener('click', scrub)
progressBar.addEventListener('mousemove', e => isScrubbing && scrub(e))
progressBar.addEventListener('mousedown', () => isScrubbing = true)
progressBar.addEventListener('mouseup', () => isScrubbing = false)
progressBar.addEventListener('mouseout', () => isScrubbing = false)