const newButton = document.getElementById('button');
const newInput = document.getElementById('input');
const nameDisplay = document.getElementById('name');

console.log(newButton);
console.log(newInput);
console.log(nameDisplay);

newButton.addEventListener('click', () => {
    nameDisplay.textContent = newInput.value;
})
