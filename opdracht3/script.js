const header = document.querySelector('header'); //grab references to the <header>  elements and store them in variables:
const section = document.querySelector('section'); //grab references to the <section> elements and store them in variables:
let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; // store the URL of the JSON we want to retrieve in a variable
let request = new XMLHttpRequest(); //create a request using the new keyword
request.open('GET', requestURL); //open the request
request.responseType = 'json'; //XHR knows that the server will be returning JSON
request.send(); //setting the responseType to JSON
request.onload = function () {
    const movies = request.response;
    showMovies(movies);
} // waiting for response to return from server

//Here we are storing the response to our request (available in the response property) in a variable called movies; this variable now contains the JavaScript object based on the JSON! We are then passing that object to two function calls — the first one fills the <header> with the correct data, while the second one creates an information card for each movie on the team, and inserts it into the <section>.

function showId(jsonObj) {
    var i;
    for (i = 0; i < 20; i++) {
        const id = document.createElement('p'); //creates an element p
        id.textContent = jsonObj[i]['id']; //gets the id and stores in p
    }
}

//Here we first create an <h1> element with createElement(), set its textContent to equal the squadName property of the object, then append it to the header using appendChild(). We then do a very similar operation with a paragraph: create it, set its text content and append it to the header. It is the same for h2, p and ul

function showMovies(jsonObj) {
    const list = jsonObj; //makes sure javascript knows its json
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        const myArticle = document.createElement('article');
        const myH1 = document.createElement('h1'); //creates h1
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
        const myPara9 = document.createElement('p');
        const myList = document.createElement('ul');
        myH1.textContent = list[i].id; //gets id and stores in h1
        myH2.textContent = list[i].title;
        myPara1.textContent = 'plot: ' + list[i].plot;
        myPara2.textContent = 'simple plot: ' + list[i].simple_plot;
        myPara3.textContent = 'release date: ' + list[i].release_date;
        myPara4.textContent = 'cover: ' + list[i].cover;
        myPara9.textContent = 'actors:';
        //in here we need to go deeper in the json. this can only be created in a function. it will get all the list items that are inside the actors
        const actors = list[i].actors;
        for (let j = 0; j < actors.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = actors[j].actor_name;
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH1); //append the h1 and makes it visible
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara9);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
    }
} // use a for loop to loop through each object in the array.
