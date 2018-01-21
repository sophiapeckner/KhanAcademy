
var reset = function () {
    background(255, 255, 255);
    frameX = 800;
    frameY = 700;
    createCanvas(frameX, frameY);
    fill("black");
    noStroke();
    textSize(15);
    textAlign(CENTER, CENTER);
};

var setText = function(){
    fill("black");
    textSize(18);
    strokeWeight(2);
};

var setup = function () {
    reset();
    crossingPerson = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fstickman1.png?1515717151770");
    crossingPersonAngry = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Frun7.png?1516251430703");
    yeildsign = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2FyeildSign.jpg?1515905969783");
    ogMan = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fstickman1.png?1515717151770");
    thinkingman = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fthinking_stickman.jpg?1515731244449");
    road = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Froad.jpg?1516163020541");
    soccerball = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2FSOCCERBALL.png?1516244300973");
    btmkickMan = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fkicking.png?1516253441236");
    ohNo = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2FwalkW1.png?1516513105617");
    btmwavingMan = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Frun7.png?1516251430703")
    callforballMan = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Frun5.png?1516251252460");
    toprunMan = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Frun3.png?1516251266844");
    topkickMan = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Frun2.png?1516251272009");
    treeBack = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fcartoonbackgroundimage.svg?1516494217287");
    yogaMan = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fyoga4.png?1516295363269");
    love = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2F58154-hugging-couple.png?1516250018583");
    yeildSign = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fyield.png?1516249396516");
    jumpRope = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fexercise4.png?1516295604173");
    dog = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fdog3.png?1516245823260");
    btmRun = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Frun3.png?1516251266844");
    police = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fcute_police.png?1516562405343");
    clickhere = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fclickhere.png?1516567706657");
    page = "start";
    defaultTextColor = "black";
    click = false;
    mouseIn = false;
    time = 0;
    t0 = 0;
    record = false;
    id = int(random(200));
    currentTime = hour()+":"+minute();
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
    soccerballY = 340;
    soccerballBackX = 540;
    soccerballBackY = 273;
    toprunManX = 350;
    toprunManY = 210;
    topkickManX = 540;
    topkickrunX = 310;
    btmkickManX = 180;
    btmwavingManX = 180;
    btmRunX = 180;
    yogaManX = 300;
    runyogaManY = 150;
    runyogaManX = 300;
    crossingPersonX = 800;
    crossingPersonY = 310;
    wait1 = 250;
    wait2 = 500;
    time = 0;
    t0 = 0;
};

var drawCar = function (x, y, color) {
    noStroke();
    rect(x, y, 110, 30);
    rect(x + 13, y - 30, 80, 50);
    fill(90);               
    ellipse(x + 35, y + 30, 24, 24);
    ellipse(x + 75, y + 30, 24, 24);
};

var recording = function (key, value) {
    //var database = firebase.database().ref();
    //database.child(id+"/"+key).set(value);
    firebase.database().ref("test/" + id + "/" + key).set(value);
};

var timer = function (sec, nextPage) {
    var t1 = millis();
    if ((t1 - t0) >= 1000) {
        time++;
        t0 = t1;
    }
    if (time % 60 >= sec) {
        page = nextPage;
    }
};

var button = function (x, y, w, h, textsize, tex, textColor, nextPage, record, label) {
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        mouseIn = true;
    } else {
        mouseIn = false;
    }
    if (mouseIn) {
        stroke(textColor);
        noFill();
        strokeWeight(5);
        rect(x, y, w, h);
        fill(textColor);
        textSize(textsize);
        //stroke("black");
        text(tex, x + w / 2, y + h / 2);
        if (click && record) {  
            recording(label, tex);
            page = nextPage;
        } else if (click) {
            page = nextPage;
        }
    } else {
        //stroke(textColor);
        stroke("black");
        noFill();
        strokeWeight(3);
        rect(x, y, w, h);
        noStroke();
        fill(textColor);
        textSize(textsize);
        text(tex, x + w / 2, y + h / 2);
    }
};


var roadBkg = function(){
    fill(150);
    rect(0, 400, 800, 300);
    stroke("white");
    strokeWeight(3);
    line(0, 410, 800, 410);

    for (i = 0; i < 900; i = i + 40){
        line(i, 475, i + 20, 475);
    }
    strokeWeight(5);
    stroke("yellow");
    line(0, 540, 800, 540);
    line(0, 550, 800, 550);
    stroke  ("white");
    strokeWeight(3);
    for (i = 0; i < 900; i = i + 40){
        line(i, 620, i + 20, 620);
    }
    fill("white");
    for (i = 0; i < 300; i = i + 20) {
        rect(520, 420 + i, 70, 10);
    }
}

var mousePressed = function () {
    click = true;
};

var up = function(){
    image(treeBack, 0, 0, 800, 400);
    image(jumpRope, 100, 150, 90, 90);
    image(yogaMan, yogaManX, 135, 90, 90);
    image(love, 700,230,90,90);
    image(dog, 650, 290, 50, 50);
    //image(work,10,320,80,80);
    image(yeildSign, 480, 350, 50, 50);
    image(soccerball, soccerballX, soccerballY, 40, 30);
    image(btmkickMan, btmkickManX, 300, 70, 70);
    soccerballX += 3;
    soccerballY -= 1;
    
    if (soccerballX >= 448){
        image(toprunMan, toprunManX, 200, 70, 70)
        toprunManX += 4.7;
    }else{
        image(callforballMan, 400, 200, 90, 90);
    }

    if(soccerballX >= 543){
        soccerballX = 540;
        soccerballY = 273;
        topkickManY = 250;
        toprunManX = 900;
        image(btmwavingMan, btmwavingManX, 300, 90, 90);
        btmkickManX = 900;
        soccerballX = 900;
        image(topkickMan, topkickManX, 210, 70, 70);
        image(soccerball, soccerballBackX, soccerballBackY, 40, 30);
        soccerballBackX -= 3;
    }
    setText();
    if (soccerballBackX > 100 && soccerballBackX < 540) {
        text("over here!", 185, 260, 100, 50);
    } else if (soccerballBackX < 100){
        text ("I'll get it!", topkickManX + 5, 180, 100, 50);
        topkickManX -= 3;

    }  
}

var bottom = function(){
    roadBkg();
    image(crossingPerson, crossingPersonX, crossingPersonY, 60, 60);
    drawCar(car1, 420, fill("pink"));
    drawCar(car2, 500, fill("blue"));
    drawCar(car3, 580, fill("red"));
    drawCar(car4, 660, fill("yellow"));
    car1 += 4;
    car2 += 3;
    car3 -= 4;
    car4 -= 4;
    
    if (wait1>0){
        wait1--;
    } else if (wait1===0){
        drawCar(car5, 420, fill("white"));
        drawCar(car6, 500, fill("orange"));
        drawCar(car7, 580, fill("red"));
        drawCar(car8, 660, fill("green"));
        car5 += 4;
        car6 += 3;
        car7 -= 3;
        car8 -= 5;
    }
    
    if (wait2 > 0){
        wait2--;
    } else if (wait2 === 0){
        drawCar(car9, 420, fill("red"));
        drawCar(car10, 500, fill("blue"));
        drawCar(car11, 580, fill("yellow"));
        drawCar(car12, 660, fill("green"));
        if (car10 < 400) {
            car9 += 3;
            car10 += 3;
            car12 -= 1;
            crossingPersonX -= 2;
        } else if (car10 > 400) {
            car9 = 350;
            car10 = 400;
            car12 = 610;
        } else if (car10 === 400) {
            car11 -= 5;
            crossingPersonY += 2;
            setText();
            text("WOOF", 630, 340, 10, 20);
            if (crossingPersonY > 480) {
                crossingPersonY = 900;
                image(crossingPersonAngry, crossingPersonX, 481, 90, 90)
                setText();
                text("Ouch, WAWA", 495, 400, 200, 100);
                btmwavingManX = 900;
                image(btmRun,btmRunX,300,70,70);
                btmRunX += 2;
                if (btmRunX > 450) {
                    btmRunX = 450;
                    text("R U OK?",btmRunX,260,100,50);
                }
                
            }
        }
    }
}

var draw = function () {

    if (page === "start") {
        reset();
        background(178, 214, 206);
        image(clickhere, 270, 425, 200, 90);
        textSize(25);
        fill(0);
        noStroke();
        text("Thank you for participating in my study.\n This program will take < 2 min to complete", 80, 10, 600, 200);
        fill("red");
        text("Please do NOT refresh the page during this test,\n Only run this program ONCE", 80, 150, 600, 300);
        fill("black");
        button(270, 500, 200, 70, 50, "START", defaultTextColor, "pic");
    }
    if (page === "pic") {
        reset();
        up();
        bottom();
        timer(15, "Q1");
    }

    if (page === "Q1") {
        reset();
        recording("time", currentTime);
        textSize(25);
        text("What was the color of the car that hit the person?", 0, 20, 600, 50);
        button(125, 100, 400, 70, 50, "BLUE","blue", "Q2", true, "Q1First");
        button(125, 200, 400, 70, 50, "YELLOW", "yellow", "Q2", true, "Q1First");
        button(125, 300, 400, 70, 50, "RED", "red", "Q2", true, "Q1First");
        button(125, 400, 400, 70, 50, "GREEN", "green", "Q2", true, "Q1First");
        button(125, 500, 400, 70, 35, "none of the above", "black", "Q2", true, "Q1First");
        click = false;
    }
    if (page === "Q2") {
        reset();
        textSize(25);
        text("What traffic related sign was there?", 0, 20, 600, 50);
        button(125, 100, 400, 70, 50, "STOP", defaultTextColor,"transition", true, "Q2First");
        button(125, 200, 400, 70, 50, "TRAFFIC LIGHT", defaultTextColor,"transition", true, "Q2First");
        button(125, 300, 400, 70, 50, "YIELD", defaultTextColor,"transition", true, "Q2First");
        button(125, 400, 400, 70, 50, "SPEED LIMIT", defaultTextColor,"transition", true, "Q2First");
        button(125, 500, 400, 70, 35, "none of the above", defaultTextColor,"transition", true, "Q2First");
        click = false;
    }
    if (page === "transition") {
        reset();
        image(police, 600, 250, 300, 300);
        image(thinkingman, 10, 245, 300, 300);
        textSize(25);
        text("...Please take a moment and think back to what you saw again...", 200, 80, 600, 200);
        timer(22, "Q1Again");

    }
    if (page === "Q1Again") {
      reset();
      textSize(25);
      text("What was the color of the car that hit the person?", 0, 20, 600, 50);
      button(125, 100, 400, 70, 50, "BLUE","blue", "Q2Again", true, "Q1Again");
      button(125, 200, 400, 70, 50, "YELLOW", "yellow", "Q2Again", true, "Q1Again");
      button(125, 300, 400, 70, 50, "RED", "red", "Q2Again", true, "Q1Again");
      button(125, 400, 400, 70, 50, "GREEN", "green", "Q2Again", true, "Q1Again");
      button(125, 500, 400, 70, 35, "none of the above", "black", "Q2Again", true, "Q1Again");
      click = false;
    }

    if (page === "Q2Again") {
        reset();
        textSize(25);
        text("What traffic related sign was there?", 0, 20, 600, 50);
        button(125, 100, 400, 70, 50, "STOP", defaultTextColor,"gender", true, "Q2Again");
        button(125, 200, 400, 70, 50, "TRAFFIC LIGHT", defaultTextColor,"gender", true, "Q2Again");
        button(125, 300, 400, 70, 50, "YIELD", defaultTextColor,"gender", true, "Q2Again");
        button(125, 400, 400, 70, 50, "SPEED LIMIT", defaultTextColor,"gender", true, "Q2Again");
        button(125, 500, 400, 70, 35, "none of the above", defaultTextColor,"gender", true, "Q2Again");
        click = false;
    }

    if (page === "gender") {
        reset();
        textSize(25);
        text("Thank you!\n I need to collect some info about you, are you:", 0, 20, 600, 200);
        button(125, 200, 400, 70, 50, "FEMALE",defaultTextColor, "age", true, "gender");
        button(125, 300, 400, 70, 50, "MALE", defaultTextColor,"age", true, "gender");
        click = false;
    }
    if (page === "age") {
        reset();
        textSize(25);
        text("Click on your age group", 0, 20, 600, 200);
        button(125, 200, 400, 70, 50, "17 AND UNDER", defaultTextColor,"bye", true, "age");
        button(125, 300, 400, 70, 50, "18 AND OVER", defaultTextColor,"bye", true, "age");
    }
    if (page === "bye") {
        reset();
        background(178, 214, 206);
        fill("black");
        textSize(50);
        text("Thank you =)", 150, 50, 400, 80);
        textSize(25);
        text("Please close this page\nRemember, each person can only run it ONCE", 10, 150, 600, 80);
    }
    click = false;
};

