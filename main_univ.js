window.addEventListener('scroll', function(){
    const logoINSA = document.querySelector(".logo_INSA img");
    const mainNav = document.getElementById("mainNav");
    if (window.pageYOffset > 0){
        logoINSA.style.height = "80px";
        mainNav.classList.add('bg-black');
    } else{
        logoINSA.style.height = "100px";
        mainNav.classList.remove('bg-black');

    }
});