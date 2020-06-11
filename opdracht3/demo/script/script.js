const header = document.querySelector('header'); //grab references to the <header>  elements and store them in variables:
const section = document.querySelector('section'); //grab references to the <section> elements and store them in variables:
let requestURL = 'https://api.thecatapi.com/v1/images/search';
// store the URL of the JSON we want to retrieve in a variable
let request = new XMLHttpRequest(); //create a request using the new keyword
request.open('GET', requestURL); //open the request
request.responseType = 'json'; //XHR knows that the server will be returning JSON
request.send(); //setting the responseType to JSON
request.onload = function () {
    const cats = request.response;
    showCats(cats);
} // waiting for response to return from server



function showCats(jsonObj) {
    const list = jsonObj; //makes sure javascript knows its json
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        const myArticle = document.createElement('article');
        const myH1 = document.createElement('h1'); //creates h1
        const myPara1 = document.createElement('p');
        const myPara9 = document.createElement('p');
        const myPara10 = document.createElement('p');

        const myImage = document.createElement('img');
        const myList = document.createElement('ul');
        myH1.textContent = list[i].id; //gets id and stores in h1
        myImage.src = list[i].url;
        myPara9.textContent = ''; //in here we need to go deeper in the json. this can only be created in a function. it will get all the list items that are inside the actors
        myPara10.textContent = ''; //in here we need to go deeper in the json. this can only be created in a function. it will get all the list items that are inside the actors

        const breeds = list[i].breeds;
        for (let j = 0; j < breeds.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = breeds[j].origin;
            myList.appendChild(listItem);
            const listItemTwo = document.createElement('li');
            listItemTwo.textContent = breeds[j].name;
            myList.appendChild(listItem);
        }


        myArticle.appendChild(myH1); //append the h1 and makes it visible
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myImage);
        myArticle.appendChild(myPara9);
        myArticle.appendChild(myPara10);

        myArticle.appendChild(myList);
        section.appendChild(myArticle);
    }
} // use a for loop to loop through each object in the array.

document.getElementById("refresh").addEventListener("click", refreshButton);

function refreshButton() {
    window.location.reload();
}

document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        window.location.reload();
    } else if (e.keyCode == '39') {

        window.location.reload();
    }
}
