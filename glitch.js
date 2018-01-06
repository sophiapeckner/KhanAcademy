var click, mouseIn, page, button, time, t0, drawRect, mousePressed, id, record, recording, img;
var reset = function() {
  
    background(255, 255, 255);
    textSize(20);
    fill(0,0,0);
    strokeWeight(1);
    stroke(0, 0, 0);
}

var setup = function() {
    reset();
    img = loadImage("https://cdn.glitch.com/5daadb6b-664c-4228-9e6b-6b4cb1cdc269%2Ftree-dawn-nature-bucovina-56875.jpeg");
    createCanvas(400,400);
    page = "start";
    click = false;
    mouseIn = false;
    record = false;
    time = 0; // time in seconds
    t0 = 0;
    id = round(random(200));
};

var draw = function() {
    recording = function(key, value) {
       
      background(255, 255, 255);
        textSize(20);
        println(id + "_" + key + ":" + value);
    
      image(img, 0,0); 
    };

    button = function(x, y, w, h, textsize, tex, nextPage, record, label) {

        textAlign(CENTER, CENTER);
        textSize(textsize);
        text(tex, x + w / 2, y + h / 2);

        noFill();
        strokeWeight(5);
        stroke(140, 200, 200);
        rect(x, y, w, h);

        if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
            mouseIn = true;
        } else {
            mouseIn = false;
        }

        if (mouseIn) {
            noFill();
            strokeWeight(5);
            stroke(0, 0, 0);
            rect(x, y, w, h);
            if (click && record) {
                recording(label, tex);
                page = nextPage;
            } else if (click) {
                page = nextPage;
            }
        }
    };


    drawRect = function(x, y) {
        fill(0, 0, 0);
        rect(x, y, 50, 50);
    };

    mousePressed = function() {
        click = true;
    };

    if (page === "start") {
        fill(0);
        button(125, 210, 150, 60, 50, "start", "pic");
    }

    if (page === "pic") {
        background(220, 200, 150);
        //picture design
        drawRect(0, 50);
        drawRect(50, 100);
        drawRect(100, 150);
        drawRect(150, 200);
        drawRect(200, 250);

        var t1 = millis();
        if ((t1 - t0) >= 1000) {
            time++;
            t0 = t1;
        }

        var sec = (time % 60);
        if (sec >= 2) {
            page = "Q1";
        }

    }

    if (page === "Q1") {
        reset();
        text("About how long was the circle in the square?", 15, 35, 400, 80);
        button(125, 110, 150, 60, 50, "red", "Q1Again", true, "Q1First");
        button(125, 210, 150, 60, 50, "blue", "Q1Again", true, "Q1First");
        click = false;
    }
    if (page === "Q1Again") {
        reset();
        text("how many dots did the circle pick-up?", 0, 35, 400, 80);
        button(125, 110, 150, 60, 50, "red", "Q2", true, "Q1Again");
        button(125, 210, 150, 60, 50, "blue", "Q2", true, "Q1Again");
        click = false;
    }
    if (page === "Q2") {
        reset();
        text("how many squares were there?", 0, 35, 400, 80);
        button(125, 110, 150, 60, 50, "8", "Q2Again", true, "Q2First");
        button(125, 210, 150, 60, 50, "12", "Q2Again", true, "Q2First");
        click = false;
    }
    if (page === "Q2Again") {
        reset();
        text("are you sure? how many squares?", 10, 35, 400, 80);
        button(125, 110, 150, 60, 50, "8", "gender", true, "Q2Again");
        button(125, 210, 150, 60, 50, "12", "gender", true, "Q2Again");
        click = false;
    }

    if (page === "gender") {
        reset();
        text("Thank you!\n I need to collect some info about you:", 0, -15, 400, 80);
        text("your gender?", 0, 40, 200, 80);
        textAlign(TOP, RIGHT);
        button(0, 105, 190, 210, 50, "Female", "age", true, "gender");
        button(225, 105, 175, 210, 50, "Male", "age", true, "gender");
        //image(getImage("space/girl1"), -50, 80, 350, 350);
        //image(getImage("cute/CharacterBoy"), 230, 130, 200, 200);
        click = false;
    }
    if (page === "age") {
        reset();
        text("Click on your age group", 0, -15, 400, 80);
        button(5, 105, 130, 60, 50, "0-10", "bye", true, "age");
        button(190, 105, 130, 60, 50, "11-20", "bye", true, "age");
    }
    if (page === "bye") {
        background(178, 214, 206);
        fill(0, 0, 0);
        text("Thank you =)", 5, 0, 400, 80);
    }
    click = false;
};
