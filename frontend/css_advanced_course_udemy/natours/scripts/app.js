const radioLabels = document.querySelectorAll('.__radio-label[tabindex]')

radioLabels.forEach(el => el.addEventListener('keydown', onTabable))

function onTabable(e) {
  if (e.code === 'Enter' || e.code === 'Space') {
    e.preventDefault()
    const radio = this.previousElementSibling 
    radio.checked = !radio.checked
  }
}
