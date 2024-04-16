// Navbar///////////////////////////////
function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
}
// Back-to-Top//////////////////////////////
let my_button = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        my_button.style.display = "block";
    } else {
        my_button.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const d = new Date();
let year = d.getFullYear();

document.getElementById("demo").innerHTML = year;
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", function () {
        setTimeout(function () {
            let loadingOverlay = document.getElementById("loadingOverlay");
            loadingOverlay.style.display = "none";
            document.querySelector("body").classList.remove("overflow_hidden");
        }, );
    });
});
const mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };