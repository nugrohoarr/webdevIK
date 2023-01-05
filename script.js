const panels = document.querySelectorAll('.selected');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleOpenActive(e) {
  console.log(e.propertyName); 

  if (e.propertyName.includes('flex')) {
    this.classList.toggle('selected');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));