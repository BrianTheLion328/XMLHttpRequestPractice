// first example of api call using XMLHttpRequest

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
console.log("Button was pushed.")
}

let fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', fetchyFetch)


// second api call example using fetch instead of XMLHttpRequest

let url = 'https://pokeapi.co/api/v2/pokemon'

fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            return Promise.reject(response)
        }
    })
    .then(data => {
        console.log("The call to the Pokemon API was a success!: ", data)
    })
    .catch(error => {
        console.warn('Something went wrong: ', error);
    });
