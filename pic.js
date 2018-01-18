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
    crossingPersonX = 310;
    crossingPersonY = 200;
    yeildsign = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2FyeildSign.jpg?1515905969783");
    dead = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fimg3.png?1515726338399");
    liftweight = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fstickman_weights.png?1515728878978");
    ballworkout = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fball%20excersice.jpg?1515728927380");
    thinkingman = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fthinking_stickman.jpg?1515731244449");
    house = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fhouse.jpg?1515908309315");
    pup = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2FcutePup.jpg?1515908300442");
    pup2 = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Fpup2.jpg?1515909836003");
    road = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Froad.jpg?1516163020541");
    page = "start";
    click = false;
    mouseIn = false;
    record = false;
    time = 0;
    t0 = 0;
    id = int(random(200));
    currentTime = hour() + ":" + minute();
    car1 = 0;
    car2 = 0;
    car3 = 800;
    car4 = 800;
    car5 = -100;
    car6 = 0;
    car7 = 1000;
    car8 = 900;
    car9 = -100;
    car10 = 0;
    car11 = 900;
    car12 = 900;
    defaultTextColor = "black";
    wait1=150;
    wait2=350;
};

var drawCar = function (x, y, color) {
    noStroke();
    rect(x, y, 110, 25);
    rect(x + 15, y - 30, 80, 40);
    fill(90);
    ellipse(x + 35, y + 30, 24, 24);
    ellipse(x + 75, y + 30, 24, 24);
};



var hardPic = function () {
    reset();
    image(road, 0, 300, 800, 300)
    fill("white");
    for (i = 0; i < 300; i = i + 20) {
        rect(400, 320 + i, 70, 10);
    }
    image(crossingPerson, crossingPersonX, crossingPersonY, 70, 70);
    drawCar(car1, 320, fill("pink"));
    drawCar(car2, 400, fill("blue"));
    drawCar(car3, 480, fill("red"));
    drawCar(car4, 560, fill("yellow"));
    car1 += 4;
    car2 += 3;
    car3 -= 4;
    car4 -= 4;
    
    if (wait1>0){
        wait1--;
    } else if (wait1===0){
        drawCar(car5, 320, fill("grey"));
        drawCar(car6, 400, fill("orange"));
        drawCar(car7, 480, fill("red"));
        drawCar(car8, 560, fill("green"));
        car5 += 4;
        car6 += 3;
        car7 += 3;
        car8 -= 5;
    }
    
    if (wait2>0){
        wait2--;
    } else if (wait2===0){
        drawCar(car9, 320, fill("red"));
        drawCar(car10, 400, fill("blue"));
        drawCar(car11, 480, fill("yellow"));
        drawCar(car12, 560, fill("green"));
        if (car10 < 250) {
            car9 += 3;
            car10 += 3;
            car12 -= 1;
            crossingPersonX += 1;
        } else if (car10 > 250) {
            car9 = 200;
            car10 = 250;
            car12 = 510;
        } else if (car10 === 250) {
            car11 -= 5;
            crossingPersonY += 2;
            if (crossingPersonY > 400) {
                crossingPersonY = 800;
                image(crossingPersonAngry, crossingPersonX, 400, 70, 70)
            }
        }
    }

};

var draw = function () {
    hardPic()
};