var reset = function () {
    background(255, 255, 255);
    frameX = 800;
    frameY = 800;
    createCanvas(frameX, frameY);
    fill("black");
    noStroke();
    textSize(15);
    textAlign(CENTER, CENTER);
}

var setup = function () {
    reset();
    crossingPerson = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2FcrossingPerson.png?1516172310594");
    crossingPersonAngry = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2FcrossingPersonAngry.png?1516172303066")
    yeildsign = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2FyeildSign.jpg?1515905969783");
    ogMan = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fstickman1.png?1515717151770");
    thinkingman = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fthinking_stickman.jpg?1515731244449");
    road = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Froad.jpg?1516163020541");
    soccerball = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2FSOCCERBALL.png?1516244300973");
    btmkickMan = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fkicking.png?1516253441236");
    btmwavingMan = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Frun7.png?1516251430703")
    callforballMan = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Frun5.png?1516251252460");
    toprunMan = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Frun1.png?1516251277452");
    topkickMan = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Frun2.png?1516251272009");
    treeBack = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2FparkPink.jpg?1516241610201");
    page = "start";
    defaultTextColor = "black";
    click = false;
    mouseIn = false;
    time = 0;
    t0 = 0;
    record = false;
    id = int(random(200));
    currentTime = hour() + ":" + minute();
    car1 = 0;
    car2 = 0;
    car3 = 800;
    car4 = 800;
    car5 = -100;
    car6 = 0;
    car7 = 800;
    car8 = 900;
    car9 = -100;
    car10 = 0;
    car11 = 1000;
    car12 = 900;
    soccerballX = 200;
    soccerballY = 440;
    soccerballBackX=540;
    soccerballBackY=373;
    toprunManX = 350;
    toprunManY = 310;
    topkickManX = 540;
    topkickrunX = 310;
    btmkickManX = 180;
    crossingPersonX = 800;
    crossingPersonY = 400;
    wait1=200;
    wait2=400;
};

var drawCar = function (x, y, color) {
    noStroke();
    rect(x, y, 110, 25);
    rect(x + 15, y - 30, 80, 40);
    fill(90);
    ellipse(x + 35, y + 30, 24, 24);
    ellipse(x + 75, y + 30, 24, 24);
};

var up = function(){
    image(treeBack, 0, 0, 800, 500);
    image(soccerball, soccerballX, soccerballY, 40, 30);
    image(btmkickMan, btmkickManX, 400, 70, 70);
    soccerballX += 3;
    soccerballY -= 0.5;
    if (soccerballX >= 448){
        image(toprunMan, toprunManX, 300, 80, 80)
        toprunManX += 4.7;
    }else{
        image(callforballMan, 400, 300, 90, 90);
    }

    if(soccerballX >= 543){
        soccerballX = 540;
        soccerballY = 373;
        //topkickManX = 540;
        topkickManY = 350;
        toprunManX = 900;
        image(btmwavingMan, 180, 400, 90, 90);
        btmkickManX = 900;
        soccerballX = 900;
        textSize(18);
        strokeWeight(2);
        //text("over here!", 170, 360, 100, 50);
        image(topkickMan, topkickManX, 310, 80, 80);
        image(soccerball, soccerballBackX, soccerballBackY, 40, 30);
        soccerballBackX -= 3;
    }
    if (soccerballBackX > 100) {
        text("over here!", 170, 360, 100, 50);
    } else if (soccerballBackX < 100){
        image(topkickMan, topkickManX, topkickrunX, 80, 80);
        text ("i'll get it!", topkickManX + 5, 280, 80, 50);
        topkickManX -= 3;
    }
        
}
var bottom = function(){
    image(road, 0, 500, 800, 300)
    fill("white");
    for (i = 0; i < 300; i = i + 20) {
        rect(400, 520 + i, 70, 10);
    }
    image(crossingPerson, crossingPersonX, crossingPersonY, 70, 70);
    drawCar(car1, 520, fill("pink"));
    drawCar(car2, 600, fill("blue"));
    drawCar(car3, 680, fill("red"));
    drawCar(car4, 760, fill("yellow"));
    car1 += 4;
    car2 += 3;
    car3 -= 4;
    car4 -= 4;
    
    if (wait1>0){
        wait1--;
    } else if (wait1===0){
        drawCar(car5, 520, fill("grey"));
        drawCar(car6, 600, fill("orange"));
        drawCar(car7, 680, fill("red"));
        drawCar(car8, 760, fill("green"));
        car5 += 4;
        car6 += 3;
        car7 += 3;
        car8 -= 5;
    }
    
    if (wait2>0){
        wait2--;
    } else if (wait2===0){
        drawCar(car9, 520, fill("red"));
        drawCar(car10, 600, fill("blue"));
        drawCar(car11, 680, fill("yellow"));
        drawCar(car12, 760, fill("green"));
        if (car10 < 350) {
            car9 += 3;
            car10 += 3;
            car12 -= 1;
            crossingPersonX -= 2;
        } else if (car10 > 350) {
            car9 = 300;
            car10 = 350;
            car12 = 610;
        } else if (car10 === 350) {
            car11 -= 5;
            crossingPersonY += 2;
            if (crossingPersonY > 600) {
                crossingPersonY = 900;
                image(crossingPersonAngry, crossingPersonX, 600, 70, 70)
            }
        }
    }
}

var hardPic = function () {
    reset();
    bottom();

};

var draw = function () {
    reset();
    up();
    bottom();
};