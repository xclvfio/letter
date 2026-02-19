const dateElement = document.getElementById('currentDate');
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date();

dateElement.innerText = today.toLocaleDateString('en-US', options);
