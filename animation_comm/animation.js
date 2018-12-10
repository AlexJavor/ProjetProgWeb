var plane = new Image();
var reverse_plane = new Image();
var cloud = new Image();
var cloud2 = new Image();
var Xpos = 0;
var Ypos = 100;
var direction = true;

function Init(){
    plane.src = "../images/plane.png";
    reverse_plane.src = "../images/reverse_plane.png";
    cloud.src = "../images/cloud.png";
    cloud2.src = "../images/cloud2.png";
    window.requestAnimationFrame(Draw);
}

function Draw(){
    var canvas = document.getElementById("plane");
    var ctx = canvas.getContext("2d");

    //Clear the whole canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.save();
    ctx.drawImage(cloud, 0, 0);
    ctx.translate(canvas.width/2, 0);
    ctx.drawImage(cloud2, 0, 0);
    ctx.translate(-canvas.width/2, 0);
    ctx.translate(0, canvas.height/2);
    
    Ypos = Math.floor(30*Math.sin(Xpos/100));

    //console.log("Canvas width " + canvas.width)
    if ((Xpos < (canvas.width - 105)) && (Xpos >= 0)){
        //console.log((Xpos < (canvas.width - 105)) && (Xpos >= 0))
        //console.log(Xpos)
        if (direction){
            Xpos += 5;
            ctx.drawImage(plane, Xpos, Ypos - 52);
            //console.log(direction)
        }
        else{
            //console.log("OK");
            Xpos -= 5;
            ctx.drawImage(reverse_plane, Xpos, Ypos - 52);
        }
        //console.log(Xpos);
    }
    else{
        if (Xpos < 0){
            Xpos += 10;
        }
        else{
            Xpos -= 10;
        }
        direction = !direction;
        //console.log(direction);
    }
    
    ctx.restore();

    //We call again the function
    window.requestAnimationFrame(Draw);
}

Init();