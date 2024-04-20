function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  var container = document.getElementById('boxes');
  container.innerHTML = ''; 
  for (var i = 0; i < amount; i++) {
  
      var newBox = document.createElement('div');
      var size = 30 + i * 10;
      newBox.style.width = size + 'px';
      newBox.style.height = size + 'px';
      newBox.style.backgroundColor = getRandomHexColor();
      container.appendChild(newBox);
      
  }
}

function destroyBoxes() {
  var container = document.getElementById('boxes');
  container.innerHTML = ''; 
}

document.querySelector('[data-create]').addEventListener('click', function() {
  var inputAmount = document.querySelector('input[type="number"]').value;
  if (inputAmount >= 1 && inputAmount <= 100) {
      createBoxes(inputAmount);
      document.querySelector('input[type="number"]').value = ''; 
  } 
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);