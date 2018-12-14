window.addEventListener('scroll', function(){
    const logoINSA = document.querySelector(".logo_INSA img");
    const mainNav = document.getElementById("mainNav");
    const listeuniv = document.getElementsByClassName("Liste_univs");
    var i;
    if (window.pageYOffset > 0){
        logoINSA.style.height = "80px";
        //mainNav.classList.add('bg-black');
        mainNav.style.background = "#333";
        for (i = 0; i < 4; i++){
            listeuniv[i].style.background = "#333";
        }
        console.log(listeuniv);
    } else{
        logoINSA.style.height = "100px";
        //mainNav.classList.remove('bg-black');
        mainNav.style.background = "#eee";
        for (i = 0; i < 4; i++){
            listeuniv[i].style.background = "#eee";
        }
    }
});