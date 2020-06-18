# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Random cat
Voor dit project heb een een api gekozen [THE CAT API](https://api.thecatapi.com) die ik heb gekoppeld om willekeurige katten foto's te zien, met soms nog extra informatie over die kat, alleen als die beschikbaar zijn.
![alt text](https://github.com/Asprengers/frontend-voor-designers-1920/blob/master/opdracht3/demo/img/api.png "api image")


[random cat](https://asprengers.github.io/frontend-voor-designers-1920/opdracht3/demo/index.html)

## interface
De interface bestaat uit een button waarmee je een nieuwe kat kan generen. Daarnaast is het ook mogelijk om door middel met je links of rechts pijltjes van je toetsenbord een nieuwe te zoeken.

De verschillende interface design principles zijn op verschillende manieren toegepast:
### 04 Keep users in control
De users blijven in control doordat er geen rare dingen gebeuren als je op een button klikt. Het werkt en je ziet verschijnen wat je verwacht.

### 08 Provide a natural next step
Deze is toegepast door middel van de mogelijkheid om op de knop te drukken waardoor je weet dat het de mogelijkheid is om de volgende te zien. Hierdoor zijn er geen extra elementen toegepast en verwacht je wat je ziet wat er gebeurd. Ook is er een mogelijkheid om met pijltjes volgende te klikken zodat dat ook natuurlijk aanvoelt.

### 09 Appearance follows behavior
De elementen die zijn ontworpen werken zoals je het verwacht.  >  If it looks like a button it should act like a button 

### 11 Strong visual hierarchies work best
Er zijn niet veel elementen toegepast waardoor het een sterke hierarchie is. Het is een slim maar effectief ontwerp.

In de demo heb je meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) toegepast. Hoe heb je dat gedaan?
 
## UI event
Er is een UI events toegepast:
window.event - deze is toegepast om de mogelijkheid van een toetsenbord controle toe te voegen om het te gaan besturen. 
loading.event - deze laat een laad cirkel zien als je wacht

## UI stack
### Ideal State
De ideal state is toegepast door een opzet van een afbeelding in het midden met daaronder een button.
### Empty State
De empty state is toegepast door een opzet van een afbeelding in het midden met daaronder een button. Deze zien mensen het meeste en is al opgezet hoe je de rest ook kan zien.
### Error State
De error state is toegepast door middel van de loading event. Als hij blijft laden, werkt het niet.
### Partial State
De partial state is toegepast door middel van de optie, als er extra data is dan zie je een extra notitieblad die verdwijnt als die data niet beschikbaar is.
### Loading State
de loading state is toegepast door een loading circle die in beeld is als de api aan het laden is en de afbeelding vervangt.


## code
``` const header = document.querySelector('header'); //grab references to the <header>  elements and store them in variables:


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

 const list = jsonObj; //makes sure javascript knows its json

const myH1 = document.createElement('h1'); //creates h1
        
myH1.textContent = 'id: ' + list[i].id; //gets id and stores in h1
        
myArticle.appendChild(myH1); //append the h1 and makes it visible
      
      
document.onkeydown = function (e) {
e = e || window.event;
if (e.keyCode == '37') {
      window.location.reload();
    } else
if (e.keyCode == '39') {

window.location.reload();
    }
}

// makes sure that you can use the keys on keyboard
        
        