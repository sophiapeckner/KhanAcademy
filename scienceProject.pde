//credit to Ice Catcher, learning from his/her coding structure
//find the incredible game here: https://www.khanacademy.org/computer-programming/ice-catcher-beginner/6413458907529216
var click = false;
var mouseIn = false;
var page = "start";


var id = round(random(200));

var record = false;

var recording = function(key, value) {
    background(255,255,255);
    textSize(20);
    println(id+"_"+key+":"+value);
};

var button = function(x, y, w, h, textsize, tex, nextPage, record,label) {
    textAlign(CENTER,CENTER);
    textSize(textsize);
    text(tex, x + w/2, y + h/2);
    
    noFill();
    strokeWeight(5);
    stroke(140, 200, 200);
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
        if (click  && record) {
            recording(label,tex);
            page = nextPage;
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

var setup = function(){
background(255,255,255);
textSize(20);


};

var draw = function(){
    
    if(page === "start") {
        fill(0);
        textSize(50);
        button(125,210,150,60,35,"start","pic");

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
        setup();
        text("What was the color?", 15, 35, 400, 80);
        button(125,110,150,60,35,"red","Q1Again",true,"Q1First");
        button(125,210,150,60,35,"blue","Q1Again",true,"Q1First");
        click = false;
    }
    if (page === "Q1Again") {
        setup();
        text("are you sure? What was the color?", 0, 35, 400, 80);
        button(125,110,150,60,35,"red","Q2",true,"Q1Again");
        button(125,210,150,60,35,"blue","Q2",true,"Q1Again");
        click = false;
    }
    if ( page === "Q2" ){
        setup();
        text("how many squares were there?", 0, 35, 400, 80);
        button(125,110,150,60,35,"8","Q2Again",true,"Q2First");
        button(125,210,150,60,35,"12","Q2Again",true,"Q2First");
        click = false;
    }
    if (page === "Q2Again"){
        setup();
        text("are you sure? how many squares?", 10, 35, 400, 80);
        button(125,110,150,60,35,"8","gender",true,"Q2Again");
        button(125,210,150,60,35,"12","gender",true,"Q2Again");
        click = false;
    }
    
    if (page === "gender"){
        setup();
        text("Thank you!\n I need to collect some info about you:", 0, -15, 400, 80);
        text("your gender?", 0, 40, 200, 80);
        button(5,105,130,60,35,"Female","age",true,"gender");
        button(190,105,130,60,35,"Male","age",true,"gender");
        click = false;
    }
    if (page === "age"){
        setup();
        text("Click on your age group", 0, -15, 400, 80);
        button(5,105,130,60,35,"0-10","bye",true,"age");
        button(190,105,130,60,35,"11-20","bye",true,"age");
    }
    if (page === "bye"){
        background(178, 214, 206);
        fill(0, 0, 0);
        text("Thank you =)", 5, 0, 400, 80);
    }
    click=false;
};


