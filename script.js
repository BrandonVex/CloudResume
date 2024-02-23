function togglemenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open'); 
    icon.classList.toggle('open'); 
}

// AWS Lambda Code

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://dqvypqwpctv3stkvil6zhs67ne0myrja.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();