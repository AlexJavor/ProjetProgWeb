function showDivs(n) {
    let x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1};
    if (n < 1) {slideIndex = x.length} ;
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    console.log(x);
    x[slideIndex-1].style.display = "block";
}

window.onload = function(){
    var slideIndex = 1;
    showDivs(slideIndex);
}

function plusDivs(n){
    showDivs(slideIndex += n);
}

    

    

