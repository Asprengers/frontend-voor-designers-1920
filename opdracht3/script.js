const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; // store the URL of the JSON we want to retrieve in a variable
let request = new XMLHttpRequest(); //create a request using the new keyword
request.open('GET', requestURL); //open the request
request.responseType = 'json';
request.send(); //setting the responseType to JSON
request.onload = function () {
    const movies = request.response;
    //    populateHeader(movies);
    showMovies(movies);
} // waiting for response to return from server
//function populateHeader(jsonObj) {
//    const myH1 = document.createElement('h1');
//    myH1.textContent = jsonObj['title'];
//    header.appendChild(myH1);
//
//    const myPara = document.createElement('p');
//    myPara.textContent = 'id: ' + jsonObj['id'] + ' // title: ' + jsonObj['title'];
//    header.appendChild(myPara);
//}
//Here we first create an <h1> element with createElement(), set its textContent to equal the squadName property of the object, then append it to the header using appendChild(). We then do a very similar operation with a paragraph: create it, set its text content and append it to the header. 
function showId(jsonObj) {
    var i;
    for (i = 0; i < 20; i++) {

        const id = document.createElement('p');
        id.textContent = jsonObj[i]['id'];
    }

}


function showMovies(jsonObj) {
    const list = jsonObj;
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        const myArticle = document.createElement('article');
        const myH1 = document.createElement('h1');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');



        const myPara9 = document.createElement('p');
        const myList = document.createElement('ul');
        myH1.textContent = list[i].id;
        myH2.textContent = list[i].title;
        myPara1.textContent = 'plot: ' + list[i].plot;
        myPara2.textContent = 'simple plot: ' + list[i].simple_plot;
        myPara3.textContent = 'release date: ' + list[i].release_date;
        myPara4.textContent = 'cover: ' + list[i].cover;



        myPara9.textContent = 'actors:';
        const actors = list[i].actors;
        for (let j = 0; j < actors.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = actors[j].actor_name;
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH1);
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
