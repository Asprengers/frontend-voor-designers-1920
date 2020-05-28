# Frontend voor Designers - opdracht 2: Een interactie uitwerken voor verschillende gebruikers input

Werk een functionaliteit uit die je kunt bedienen met 'click' en nog een user interactie, zoals het toetsenbord, tab, dubbel click, swipe, long press, <del>force touch</del>, of iets anders ... Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een [browser](https://en.m.wikipedia.org/wiki/List_of_web_browsers).

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Project titel
Carousel met vakantiefoto's: Een carousel met meerdere foto's van een vakantie, die je kan bedienen met een button en met de pijltjes op het toetsenbord.

[website preview](https://asprengers.github.io/frontend-voor-designers-1920/opdracht2/demo/index.html)

## interface
De interface bestaat uit een foto waarbij je de volgende kan zien door middel van een klik van je muis of met je toetsenbord.

De design principes zijn toegepast door:
4 Keep users in control
door dat je de volgende foto al voor de helft kan zien trekt dat je aandacht en wil je doorgaan *dit moet nog gedaan worden*
8 Provide a natural next step
door de pijltjes te volgen trekt dat je aan om naar de volgende te gaan
9 Appearance follows behavior
hoe het eruit ziet qua logica trekt het je aan om meer te klikken

In de demo heb je meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) toegepast. Hoe heb je dat gedaan?

## code
```
document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        photoSlide(-1) //left <- show Prev image
    } else if (e.keyCode == '39') {
        // right -> show next image
        photoSlide(1)
    }
}
```

Door middel van deze code kan je ervoor zorgen dat je naar de volgende foto kan door middel van je toetsenbord
