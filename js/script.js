/**
 * CART 214 Infographic
 * Jack McDonald
 * 
 * Jack's infographic
 */

"use strict";

//image lets
let standardscene;
let alarmscene;
let teascene;
let pcscene;
let ramenscene;
let alcoholscene;

let alarmtext;
let teatext;
let pctext;
let ramentext;
let alcoholtext;

//preload images

function preload(){
    //scene images
    standardscene = loadImage('assets/images/defaultstate1.png');
    alarmscene = loadImage('assets/images/clockstate.gif');
    teascene = loadImage('assets/images/teastate.gif');
    pcscene = loadImage('assets/images/pcstate.gif');
    ramenscene = loadImage('assets/images/ramenstate.gif');
    alcoholscene = loadImage('assets/images/alcoholstate.gif');
    //text images
    alarmtext = loadImage('assets/images/alarmtext.png');
    teatext = loadImage('assets/images/teatext.png');
    pctext = loadImage('assets/images/pctext.png');
    ramentext = loadImage('assets/images/ramentext.png');
    alcoholtext = loadImage('assets/images/alcoholtext.png');
}
/**
 * setup scene
*/
function setup() {
    createCanvas(1280,1280);
}


/**
 * draw based on state
*/
function draw() {
    
    if ((mouseX > 877) && (mouseX < 1035) &&
    (mouseY > 755) && (mouseY < 834)){
        image(ramenscene,0,150);
        image(ramentext,885,388);
    } else if((mouseX > 217) && (mouseX < 377) &&
    (mouseY > 542) && (mouseY < 837))  {
        image(pcscene,0,150);
        image(pctext,200,220);
    } else if((mouseX > 78) && (mouseX < 243) &&
    (mouseY > 895) && (mouseY < 1106))  {
        image(alcoholscene,0,150);
        image(alcoholtext,290,325);
    } else if((mouseX > 1196) && (mouseX < 1278) &&
    (mouseY > 863) && (mouseY < 918))  {
        image(alarmscene,0,150);
        image(alarmtext,915,495);
    } else if((mouseX > 398) && (mouseX < 480) &&
    (mouseY > 766) && (mouseY < 838))  {
        image(teascene,0,150);
        image(teatext,78,400);
    } else 
        image(standardscene,0,150);
} 