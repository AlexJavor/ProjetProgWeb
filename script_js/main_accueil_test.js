function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}
    

    

