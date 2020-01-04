const hoursEl = document.querySelector('#clock .time span[data-label="hours"]')
const minutesEl = document.querySelector('#clock .time span[data-label="minutes"]')
const secondsEl = document.querySelector('#clock .time span[data-label="seconds"]')

function clock() {
  const now = new Date()

  hoursEl.innerText = now.getHours()
  minutesEl.innerText = now.getMinutes().toString().padStart(2, 0)
  secondsEl.innerText = now.getSeconds().toString().padStart(2, 0)
}

clock()
setInterval(clock, 1000)