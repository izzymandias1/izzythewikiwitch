
// Get the button:
let scrollUp = document.getElementById("scrollBtnTop");
let scrollDown = document.getElementById("scrollBtnBottom");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > document.body.offsetHeight / 2 || document.documentElement.scrollTop > document.documentElement.offsetHeight / 2) {
        scrollUp.style.display = "block";
        scrollDown.style.display = "none"
    } else {
        scrollUp.style.display = "none";
        scrollDown.style.display = "block";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function bottomFunction() {
    window.scrollTo(0, document.body.scrollHeight);
}
