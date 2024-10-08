function togglemenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open'); 
    icon.classList.toggle('open'); 
} 

// AWS Lambda Code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://apeppdbcgnkd5x7zcznqmpwy4a0dwpbc.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
} 

updateCounter();

// AWS Lambda Code 2 