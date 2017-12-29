//credit to Ice Catcher, learning from his/her coding structure
//find the incredible game here: https://www.khanacademy.org/computer-programming/ice-catcher-beginner/6413458907529216
var click = false;
var mouseIn = false;
var page = "start";

var randomFloat = random(100);
//var id = int(randomFloat)

var record = function(tex) {
    background(255,255,255);
    textSize(20);
    println("recording "+randomFloat+"_"+tex);
};

var button = function(x, y, w, h, textsize, tex, nextPage) {
    textAlign(CENTER,CENTER);
    textSize(textsize);
    text(tex, x + w/2, y + h/2);
    
    noFill();
    strokeWeight(5);
    stroke(3, 89, 150);
    rect(x, y, w, h);

    if(mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        mouseIn = true;
    } else {
        mouseIn = false;
    }

    if(mouseIn) {
        noFill();
        strokeWeight(5);
        stroke(0, 0, 0);
        rect(x, y, w, h);
        if (click  && nextPage === "record") {
            record(tex);
            page = "finish";
        } else if (click) {
            page = nextPage;
        }
    }
};


var time = 0;  // time in seconds
var t0 = 0;  
var drawRect = function(x, y) {
   fill(0, 0, 0);
   rect(x, y, 50, 50);
};

var mousePressed = function() {
    click = true;
};

var draw = function() {
    if(page === "start") {
        fill(0);
        textSize(50);
        button(125,310,150,60,35,"start","pic");

    } 
    
    if(page === "pic") {
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
        if (sec >= 2){
            page = "Q1";
        }
        
    } 
    
    if (page === "Q1") {
        
        background(255,255,255);
        textSize(20);
        text("What was the color?", 50, 100, 400, 80);
        
        button(125,310,150,60,35,"red","record");
    }
    if (page === "finish") {
        background(255,255,255);
        textSize(20);
        text("thank you so much, goodbye", 50, 100, 400, 80);
    }

    click=false;
};
