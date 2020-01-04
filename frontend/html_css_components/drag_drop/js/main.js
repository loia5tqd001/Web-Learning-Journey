/* eslint-disable indent */
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
for (const emtpy of empties) {
  emtpy.addEventListener('dragover', dragOver);
  emtpy.addEventListener('dragenter', dragEnter);
  emtpy.addEventListener('dragleave', dragLeave);
  emtpy.addEventListener('drop', dragDrop);
}
// Drag Functions
function dragStart() {
  this.classList.add('hold');
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  // e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
