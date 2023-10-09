window.addEventListener("scroll", function () {
    var header = document.getElementById("fixed-header");
    var navbar = document.getElementById("navbar");

    if (window.pageYOffset > 100) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px";
    }

    if (window.pageYOffset > 200) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "-300px";
    }
});

