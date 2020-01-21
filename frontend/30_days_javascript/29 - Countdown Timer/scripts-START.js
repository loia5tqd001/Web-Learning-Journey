const form = document.querySelector('form#custom')
const input = form.querySelector('input[name="minutes"]')
const displayTimeLeft = document.querySelector('.display__time-left')
const displayEndTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('button[data-time]')

let secondsLeft = 0
let interval = null

function formatHMS(time) {
  return time.toString().padStart(2, 0)
}

function formatMinutesSeconds(minutes, seconds) {
  return minutes + ':' + formatHMS(seconds)
}

function secondsToFormattedTime(totalSeconds) {
  const minutes = ~~(totalSeconds / 60)
  return formatMinutesSeconds(minutes, totalSeconds - minutes * 60)
}

function formatTime(date) {
  const [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()]
  return h + ':' + formatHMS(m) + ':' + formatHMS(s)
}

function secondsInFuture(seconds) {
  const now = new Date()
  return new Date(now.getTime() + seconds * 1000)
}

function countdown() {
  displayTimeLeft.textContent = secondsToFormattedTime(--secondsLeft)
}

function triggerCountdown(seconds) {
  console.assert(typeof seconds === 'number')
  clearInterval(interval)
  secondsLeft = seconds + 1
  countdown() 
  interval = setInterval(countdown, 1000)
  displayEndTime.textContent = 'Be back at ' + formatTime(secondsInFuture(secondsLeft))
}

form.addEventListener('submit', e => {
  e.preventDefault()
  triggerCountdown(input.value * 60)
  form.reset()
})

buttons.forEach(btn => btn.addEventListener('click', e => {
  triggerCountdown(Number(btn.dataset.time))
}))