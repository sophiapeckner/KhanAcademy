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
    page = "start";
    click = false;
    mouseIn = false;
    record = false;
    time = 0;
    t0 = 0;
    id = int(random(200));
    currentTime = hour() + ":" + minute();
    car1 = 8;
    car2 = 6;
    car3 = 4;
    car4 = 2;
    defaultTextColor = "black";
    trans= 2000;
};

var drawCar = function (x, y, color) {
    noStroke();
    rect(x, y, 110, 30);
    rect(x + 13, y - 30, 80, 50);
    fill(90);
    ellipse(x + 35, y + 30, 24, 24);
    ellipse(x + 75, y + 30, 24, 24);
};

var hardPic = function () {
    reset();
    strokeWeight(5);
    rect(0, 220, 400, 177, fill(210, 200, 150));
    drawCar(car4, 260, fill(255, 220, 220));
    drawCar(car3, 360, fill(0, 255, 40));
    drawCar(car2, 460, fill(255, 0, 10));
    drawCar(car1, 560, fill(255, 200, 0));
    car4 += 8;
    car3 += 7;
    car2 += 6;
    car1 += 6;

    if (car1 < 290) {
        image(ogperson, 280, 220, 70, 70);
    } else if (car1 > 290) {
        //dead stick man
        car4 += 2;
        car3 = 300;
        car2 = 300;
        car1 = 300;
        fill(0);
        text("OUCH! WAWA", 320, 145, 150, 70);
        image(dead, 300, 160, 100, 100);
        //image(ogperson, 250, 220, 70, 70);
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
    text("FITNESS CENTER!", 5, 130, 200, 100);
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

var draw = function () {
    hardPic()
};