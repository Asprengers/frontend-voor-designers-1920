/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/
document.getElementById("detailOne").addEventListener("click", showDetailsOne);

function showDetailsOne() {
    var detaillist = document.getElementById('fullDetailsOne');
    if (detaillist.style.display === "none") {
        detaillist.style.display = "block";
    } else {
        detaillist.style.display = "none";
    }
}

document.getElementById("detailTwo").addEventListener("click", showDetailsTwo);

function showDetailsTwo() {
    var detaillist = document.getElementById('fullDetailsTwo');
    if (detaillist.style.display === "none") {
        detaillist.style.display = "block";
    } else {
        detaillist.style.display = "none";
    }
}

document.getElementById("detailThree").addEventListener("click", showDetailsThree);

function showDetailsThree() {
    var detaillist = document.getElementById('fullDetailsThree');
    if (detaillist.style.display === "none") {
        detaillist.style.display = "block";
    } else {
        detaillist.style.display = "none";
    }
}
