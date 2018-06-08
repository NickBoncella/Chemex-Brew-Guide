// === ADD EVENT LISTNER TO BUTTON ===

const modalBtn = document.getElementById('modal-btn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const calcCoffee = document.querySelector('.calc-coffee');

// open modal on click
modalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// close modal on click
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// calculate water/coffee ratio and close modal
calcCoffee.addEventListener('click', function() {
  modal.style.display = 'none';
});
