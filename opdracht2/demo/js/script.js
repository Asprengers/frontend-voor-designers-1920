document.getElementById("next").addEventListener("click", function () {
    photoSlide(1)
});

document.getElementById("previous").addEventListener("click", function () {
    photoSlide(-1)
});

var slideIndex = 1;
photo(slideIndex);

function photoSlide(n) {
    photo(slideIndex += n);
}

function currentPhoto(n) {
    photo(slideIndex = n);
}

function photo(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        photoSlide(-1)
    } else if (e.keyCode == '39') {

        photoSlide(1)
    }
}
