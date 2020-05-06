# Frontend voor Designers - opdracht 1: Een Micro-interactie uitwerken en testen

Ontwerp een user interface voor een gegeven use case. Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een browser.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Detail pagina studentenhuizen
In een lijst studentenhuizen wil ik details kunnen bekijken om te bepalen of de kamer geschikt is om te huren.
Je kunt hier zien dat er een detail pagina beschikbaar is bij het eerste huis en hierop zie je meer informatie
http://www.amysprengers.nl/hva/opdracht1/demo/index.html

## interface
De interface bestaat uit drie kamers waarvan er bij de eerste een detail pagina is uitgewerkt. Door op de details + te klikken schuift er een lijst met meerdere details uit.
Leg de interface uit. In de demo heb je de interface design principles 04 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) toegepast. Hoe heb je dat gedaan?

4 - Keep users in control
Deze wordt toegepast door middel van het zelfvertrouwen die gebruikers krijgen door op een knop te krijgen. Het is een duidelijke overview met acties die toegepast worden.

Strong visual hierarchies work best
Deze wordt toegepast omdat het een duidelijk overzicht is met een simpele handeling. Geen extra handelingen toegevoegd om te krijgen wat je wilt.

## code

Elk gedeelte met informatie bestaat uit een button en een div met een id fullDetails. Hierin komt de informatie te zien. Voordat de handeling wordt gedaan staat de tekst nog verborgen door de CSS. Door middel van de javascript wordt er heen en weer getoggled.

document.getElementById("detail").addEventListener("click", showDetails); // hier wordt de button naar een actie geroepen

function showDetails() { //functie wordt gemaakt  
    var detaillist = document.getElementById('fullDetails'); //variable roept een ID van de div aan uit de html
    if (detaillist.style.display === "none") { //if statement wordt aangemaakt en hiermee zie je of het aan of uit staat nadat je erop klipt
        detaillist.style.display = "block";
    } else { // anders een andere actie
        detaillist.style.display = "none";
    }
}
