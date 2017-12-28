
fill(43, 32, 32);
textSize(40);
text("Gender:", 0, 10, 200, 200);

var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width ||120;
    this.height = config.height || 40;
    this.label = config.label || "Click";
};

Button.prototype.draw = function() {
    fill(0, 234, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(20);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

var btn1 = new Button({
    x: 0,
    y: 50,
    label: "F"
});
btn1.draw();

var btn2 = new Button({
    x: 0,
    y: 110,
    label: "M"
});
btn2.draw();

var btn3 = new Button({
    x: 300,
    y: 360,
    label: "Start"
});
btn3.draw();

//illusion shapes
var drawRect = function(x, y) {
   rect(x, y, 50, 50);
   
};


mouseClicked = function() {
    var n = random(100);

    if (btn1.isMouseInside()) {
        println(n+ "_Female");
        
    } else if (btn2.isMouseInside()) {
        println(n + "_Male");
        
    }else if (btn3.isMouseInside()){ 
//Scene 2:
   
        background(220, 200, 150);
        //drawRect(0, 50);
        //drawRect(50, 100);
        //drawRect(100, 150);
        //drawRect(150, 200);
        //drawRect(200, 250);

        var time = 0;  // time in seconds
        var t0 = 0;         // previous time
        
       
        var t1 = millis();
        
        if ((t1 - t0) >= 1000) {
        // If we have, then increment our seconds counter
        // and reset our millisecond counter.
            time++;
            t0 = t1;
            text("1 second more:" + time, 160, 10);
            text("1 second less:" + t0, 160, 50);
        }
        text("this is the" + t0, 200, 110);
        var sec = (time % 60);
        
        if (sec >= 2 ){
            background(0,0,0);
        }


    }
};
