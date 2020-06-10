const header = document.querySelector('header'); //grab references to the <header>  elements and store them in variables:
const section = document.querySelector('section'); //grab references to the <section> elements and store them in variables:
let requestURL = 'https://api.thecatapi.com/v1/images/search?size=full%27.json'; // store the URL of the JSON we want to retrieve in a variable
let request = new XMLHttpRequest(); //create a request using the new keyword
request.open('GET', requestURL); //open the request
request.responseType = 'json'; //XHR knows that the server will be returning JSON
request.send(); //setting the responseType to JSON
request.onload = function () {
    const cats = request.response;
    showCats(cats);
} // waiting for response to return from server


//Here we first create an <h1> element with createElement(), set its textContent to equal the squadName property of the object, then append it to the header using appendChild(). We then do a very similar operation with a paragraph: create it, set its text content and append it to the header. It is the same for h2, p and ul

function showCats(jsonObj) {
    const list = jsonObj; //makes sure javascript knows its json
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        const myArticle = document.createElement('article');
        const myH1 = document.createElement('h1'); //creates h1
        const myPara1 = document.createElement('p');

        const myImage = document.createElement('img');


        const myList = document.createElement('ul');
        myH1.textContent = list[i].id; //gets id and stores in h1
        myPara1.textContent = 'breeds: ' + list[i].breeds;

        myImage.src = list[i].url;



        //in here we need to go deeper in the json. this can only be created in a function. it will get all the list items that are inside the actors
        const actors = list[i].breeds;
        for (let j = 0; j < actors.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = actors[j].breeds;
            myList.appendChild(listItem);
        }


        myArticle.appendChild(myH1); //append the h1 and makes it visible

        myArticle.appendChild(myPara1);
        myArticle.appendChild(myImage);


        myArticle.appendChild(myList);
        section.appendChild(myArticle);
    }
} // use a for loop to loop through each object in the array.
