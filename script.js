const colorWave = document.getElementById('color-wave');
const saveButton = document.getElementById('save-button');

let currentColor1 = '#ff9a9e';
let currentColor2 = '#fad0c4';

function changeColor() {
    currentColor1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    currentColor2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    colorWave.style.background = `linear-gradient(45deg, ${currentColor1} 0%, ${currentColor2} 100%)`;
}

setInterval(changeColor, 1000); 

saveButton.addEventListener('click', function() {
    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, currentColor1);
    gradient.addColorStop(1, currentColor2);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    const link = document.createElement('a');
    link.download = 'color-wave-background.jpg';
    link.href = canvas.toDataURL('image/jpeg', 0.8); // Quality from 0 to 1
    link.click();
});

