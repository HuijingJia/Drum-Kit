//detecting button click

var numberOfButtons = document.querySelectorAll(".drum").length;  //slecet all the buttons with drum

for (var i = 0; i< numberOfButtons; i++) {   //for loop

 document.querySelectorAll(".drum")[i].addEventListener("click", function(){  //addeventlistener
  
    var buttonInnerHTML = this.innerHTML; //detect the button clicked from html;

    makesound(buttonInnerHTML);   //pass the  clicked button to the makesound function

    buttonAnimation(buttonInnerHTML); //pass the clicked button to the buttonAnimation function

 });

}

// detecting keyboard press

document.addEventListener("keydown", function(event){

    makesound(event.key);     //this event contains key, which send to function makesound(key)
                            // key detector only recogize the lower key
    buttonAnimation(event.key);
});

function makesound(key){

    switch (key) {
        case "p":  //"in the string should put the text in the html instead of text in the tag"
            var p = new Audio("sounds/tom-1.mp3");
            p.play();
            break;

        case "l" :
            var l = new Audio("sounds/tom-2.mp3");
            l.play();
            break;

        case "a" :
            var a = new Audio("sounds/tom-3.mp3");
            a.play();
            break;

        case "y" :
            var y = new Audio("sounds/tom-4.mp3");
            y.play();
            break;
        
        case "f" :
            var f = new Audio("sounds/snare.mp3");
            f.play();
            break;
        
        case "u" :
            var u = new Audio("sounds/crash.mp3");
            u.play();
            break;
        
        case "n" :
            var n = new Audio("sounds/kick-bass.mp3");
            n.play();
            break;
    
        default:
            break;
    }
}

// add animation to the button and keyboard

function buttonAnimation (currentKey){
    
    var activebutton = document.querySelector("."+ currentKey );   //querySelectot needs to has a . when it applies to class
    
    activebutton.classList.add("pressed");     // add .pressed class which is in style.css file
                                                // need to review #118
    setTimeout(function (params) {
        activebutton.classList.remove("pressed");     //setTimeout(function, millseconds)
    }, 100);                                     


}


