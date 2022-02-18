let xhr = new XMLHttpRequest();

function success() {
    let data = JSON.parse(this.responseText)
    console.log(data)
}

function error(err) {
    console.log("Error occurred: ", err)
}

function fetchyFetch() {
xhr.onload = success;
xhr.onerror = error;
xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon');
// .open take 2 arguments, the type of request (GET, POST, PUT, DELETE)
// and the url of the website/api itself
xhr.send();
}

let fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', fetchyFetch)
