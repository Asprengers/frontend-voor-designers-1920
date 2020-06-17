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
        const myImage = document.createElement('img');
        const myList = document.createElement('ul');
        myH1.textContent = 'id: ' + list[i].id; //gets id and stores in h1
        myImage.src = list[i].url;
        const breeds = list[i].breeds;
        for (let j = 0; j < breeds.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = 'Name: ' + breeds[j].name + '     Origin: ' + breeds[j].origin + ' Life span: ' + breeds[j].life_span;

            myList.appendChild(listItem);
        }


        myArticle.appendChild(myH1); //append the h1 and makes it visible
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myImage);


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
    } else
    if (e.keyCode == '39') {

        window.location.reload();
    }
}

//bron: https://www.geeksforgeeks.org/how-to-show-page-loading-div-until-the-page-has-finished-loading/ 
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};