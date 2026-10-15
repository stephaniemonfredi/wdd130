
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let heading = document.querySelector('h2');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#ffffff"
        heading.style.color = "#ffffff"
        logo.src = "byui-logo-white.png";
        
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
        heading.style.color = "#006eb7";
        logo.src = "byui-logo-blue.webp";
    }
}           