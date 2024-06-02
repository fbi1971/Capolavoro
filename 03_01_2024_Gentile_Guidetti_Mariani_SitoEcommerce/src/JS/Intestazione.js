var header = document.getElementById("intestazione");
var paddingIntestazione = document.getElementById("paddingIntestazione");

window.onscroll = function () {
    if (window.pageYOffset > header.offsetTop) {
        header.classList.add("stickyIntestazione");
        paddingIntestazione.classList.add("stickyPadding");
    } else {
        header.classList.remove("stickyIntestazione");
        paddingIntestazione.classList.remove("stickyPadding");
    }
};

