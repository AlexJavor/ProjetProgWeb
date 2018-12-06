var i = 0;

function Poster(){
    //alert("Vous avez essaye de poster un message!");
    let Username = document.forms["monFormu"]["Username"].value;
    if (Username == ""){
        alert("Vous devez rentrer votre nom d'utilisateur!");
        return false;
    }
    else{
        console.log(Username);
    }
    if (Username.length > 10){
        alert("Ce nom d'utilisateur est trop long! Il ne peut avoir que 10 caractères.");
        return false;
    }

    let Commentaire = document.forms["monFormu"]["commentaire"].value;
    if (Commentaire == ""){
        alert("Vous devez rentrer un commentaire!");
        return false;
    }
    else{
        console.log(Commentaire);
    }

    //Utiliser let : permet de garder des variables de façon plus locale
    let newUser = document.createElement('h3');
    newUser.className = "user";
    newUser.id = "us-" + i.toString();
    let textus = document.createTextNode(Username);
    newUser.appendChild(textus);
    document.getElementById("boite-com").appendChild(newUser);

    let newCommentaire = document.createElement('P');
    newCommentaire.className = "com";
    newCommentaire.id = "com-" + i.toString();
    let textcom = document.createTextNode(Commentaire);
    newCommentaire.appendChild(textcom);
    document.getElementById("boite-com").appendChild(newCommentaire);

    i++;
}