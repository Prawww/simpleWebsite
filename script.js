// Function to change the background color
function changeBackgroundColor() {
  const colors = ['#FF6347', '#ADD8E6', '#98FB98', '#FFFF00', '#D3D3D3'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Event listener for button click
document.getElementById('colorBtn').addEventListener('click', changeBackgroundColor);
