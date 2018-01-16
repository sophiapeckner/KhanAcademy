
var reset = function () {
    background(255, 255, 255);
    createCanvas(600, 600);
    fill("black");
    noStroke();
    textSize(15);
    textAlign(CENTER, CENTER);
}

var setup = function () {
    reset();
    ogperson = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fstickman1.png?1515717151770");
    ogpersonX = 0;
    yeildsign = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2FyeildSign.jpg?1515905969783");
    dead = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fimg3.png?1515726338399");
    liftweight = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fstickman_weights.png?1515728878978");
    ballworkout = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fball%20excersice.jpg?1515728927380");
    thinkingman = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fthinking_stickman.jpg?1515731244449");
    house = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fhouse.jpg?1515908309315");
    pup = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2FcutePup.jpg?1515908300442");
    pup2 = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fpup2.jpg?1515909836003");
    lightBackground = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2FcoolBackground.jpg?1516067824714");
    courtHouse = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fcourthouse.jpg?1516070746343");
    page = "start";
    click = false;
    mouseIn = false;
    record = false;
    time = 0;
    t0 = 0;
    id = int(random(200));
    currentTime = hour()+":"+minute();
    car1 = 8;
    car2 = 6;
    car3 = 4;
    car4 = 2;
    defaultTextColor = "black";
    thinkingmanX = 0;
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
    if (id % 2 === 0) {
      level = "hard";
    }else{
      level = "easy";
    }
    firebase.database().ref("test/" + level + "/" + id + "/" + key).set(value);
};

var hardPic = function () {
    reset();
    strokeWeight(5);
    rect(0, 220, 400, 177, fill(210, 200, 150));
    drawCar(car4, 260, fill(255, 220, 220));
    drawCar(car3, 360, fill(0, 255, 40));
    drawCar(car2, 460, fill(255, 0, 10));
    drawCar(car1, 560, fill(255, 200, 0));
    car4 += 7;
    car3 += 7;
    car2 += 6;
    car1 += 6;

    if (car1 < 290) {
        image(ogperson, 280, 220, 70, 70);
    } else if (car1 > 290) {
        //dead stick man
        car4 += 5;
        car3 = 300;
        car2 = 300;
        car1 = 300;
        fill(0);
        image(dead, 300, 160, 100, 100);
        text("OUCH! WAWA", 290, 140, 150, 70);
        image(ogperson, ogpersonX, 220, 70, 70);
        if (ogpersonX <= 250) {
            ogpersonX += 8;
        } else if (ogpersonX > 250) {
            ogpersonX = 251;
            text("R U OK?", 200, 220, 90, 90);
        }
    }
    //distractions
    fill(135, 54, 0);
    text("FITNESS CENTER!", 5, 85, 200, 100);
    image(yeildsign, 420, 160, 70, 70);
    image(liftweight, 20, 20, 90, 90);
    image(ballworkout, 100, 20, 90, 90);
    image(house, 210, -15, 200, 140);
    image(pup, 0, 150, 90, 80);
    image(pup2, 100, 150, 90, 80);
    fill(190, 101, 125);
    var number = random(0, 500);
    var a = random(0, 400);
    var b = random(0, 200);
    fill(number, a - 100, b - 100);
    ellipse(100, 5, 80, 20);

};

var simplePic = function () {
    reset(); 
    drawCar(car4, 260, fill(255, 220, 220));
    //drawCar(car3, 360, fill(0, 255, 40));
    car4 += 7;
    //car3 += 4;
    //image(yeildsign, 420, 160, 70, 70);
    if (car4 < 290) {
        image(ogperson, 280, 220, 70, 70);
    } else if (car4 > 290) {
        car4 += 5;
        //car3 = 300;
        fill(0);
        image(dead, 300, 160, 100, 100);
        text("OUCH! WAWA", 290, 140, 150, 70);
    }
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
        strokeWeight(4);
        rect(x, y, w, h);
        fill(textColor);
        textSize(textsize);
        text(tex, x + w / 2, y + h / 2);
        if (click && record) {  
            recording(label, tex);
            page = nextPage;
        } else if (click) {
            page = nextPage;
        }
    } else {
        stroke(textColor);
        noFill();
        strokeWeight(2);
        rect(x, y, w, h);
        fill(textColor);
        textSize(textsize);
        text(tex, x + w / 2, y + h / 2);
    }
};



var mousePressed = function () {
    click = true;
};
var draw = function () {

    if (page === "start") {
        reset();
        image(lightBackground);
        button(200, 250, 180, 60, 40, "start", defaultTextColor, "pic");
        textSize(17);
        strokeWeight(1);
        fill(0);
        text("To reduce contamination of data, please do NOT refresh the page", 80, 400, 400, 100);
        text("Thank u for participating in my study.\n This program will take < 2 min to complete", 80, 50, 400, 100);
    }
    if (page === "pic") {
        if(id % 2 === 0){//even
          hardPic();
        }else{
          simplePic();
        }

        timer(4, "Q1");
    }

    if (page === "Q1") {
        reset();
        recording("time", currentTime);
        text("What was the color of the car that hit the person?", 0, 15, 400, 80);
        button(125, 70, 150, 60, 50, "green", "green", "Q2", true, "Q1First");
        button(125, 140, 150, 60, 50, "pink", "pink", "Q2", true, "Q1First");
        button(125, 280, 150, 60, 50, "red", "red", "Q2", true, "Q1First");
        button(125, 210, 150, 60, 50, "blue", "blue", "Q2", true, "Q1First");
        button(125, 350, 150, 60, 29, "none of\n the above", "black", "Q2", true, "Q1First");
        click = false;
    }
    if (page === "Q2") {
        reset();
        text("Was there a stop sign?", 0, 35, 400, 80);
        button(125, 110, 150, 60, 50, "Yes", defaultTextColor,"transition", true, "Q2First");
        button(125, 210, 150, 60, 50, "No", defaultTextColor,"transition", true, "Q2First");
        click = false;
    }
    if (page === "transition") {
        reset();
        textSize(40);
        noStroke();
        text("Hmm ... Let me think about this", 0, 200, 600, 100);
        image(thinkingman, thinkingmanX, 400, 200, 200);
        image(courtHouse, 400, 400, 200, 200);
        thinkingmanX += 2;
        timer(8, "Q1Again");

    }
    if (page === "Q1Again") {
      reset();
      text("What was the color of the car that hit the person?", 0, 15, 400, 80);
      button(125, 70, 150, 60, 50, "green", "green", "Q2Again", true, "Q1Again");
      button(125, 140, 150, 60, 50, "pink", "pink", "Q2Again", true, "Q1Again");
      button(125, 280, 150, 60, 50, "red", "red", "Q2Again", true, "Q1Again");
      button(125, 210, 150, 60, 50, "blue", "blue", "Q2Again", true, "Q1Again");
      button(125, 350, 150, 60, 29, "none of\n the above", "black", "Q2Again", true, "Q1Again");
      click = false;
    }

    if (page === "Q2Again") {
        reset();
        text("Was there a stop sign?", 10, 35, 400, 80);
        button(125, 110, 150, 60, 50, "Yes", defaultTextColor, "gender", true, "Q2Again");
        button(125, 210, 150, 60, 50, "No", defaultTextColor,"gender", true, "Q2Again");
        click = false;
    }

    if (page === "gender") {
        reset();
        text("Thank you!\n I need to collect some info about you:\n your are ?", 0, 20, 400, 80);
        textAlign(TOP, RIGHT);
        button(0, 120, 190, 210, 50, "Female",defaultTextColor, "age", true, "gender");
        button(225, 120, 175, 210, 50, "Male", defaultTextColor,"age", true, "gender");
        click = false;
    }
    if (page === "age") {
        reset();
        text("Click on your age group", 0, 20, 400, 80);
        button(20, 120, 300, 60, 50, "17 and under", defaultTextColor,"bye", true, "age");
        button(20, 240, 300, 60, 50, "18 and over", defaultTextColor,"bye", true, "age");
    }
    if (page === "bye") {
        image(lightBackground);
        fill(0, 0, 0);
        text("Thank you =)", 10, 20, 400, 80);
    }
    click = false;
};

