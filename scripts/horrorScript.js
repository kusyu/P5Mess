var diaBox = document.getElementById("diaBox");
var nameBox = document.getElementById("charaName");
var textBox = document.getElementById("textBox");
var moreButton = document.getElementById("more");
var choicesBox = document.getElementById("choicesPanel");
var choice1 = document.getElementById("choice01");
var choice2 = document.getElementById("choice02");

var myMusic;

//function startGame() {
//    myMusic = new sound("");
//    myMusic.play();
//}
//
//function sound(src) {
//    this.sound = document.createElement("audio");
//    this.sound.src = src;
//    this.sound.setAttribute("preload", "auto");
//    this.sound.setAttribute("controls", "none");
//    this.sound.style.display = "none";
//    document.body.appendChild(this.sound);
//    this.play = function() {
//        this.sound.play();
//    }
//    this.stop = function() {
//        this.sound.pause();
//    }    
//}

function addName(name) {
    nameBox.innerHTML = name;
}
function clearName() {
    nameBox.innerHTML = "";
}
function addText(text) {
    textBox.innerHTML = text;
}
function clearText() {
    textBox.innerHTML = "";
}

function createChoiceButton(buttonText, resultText) {    
    let optionButton = document.createElement("BUTTON");
    optionButton.innerHTML = buttonText;
    optionButton.addEventListener("click", function() {
        clearText();
        addText(resultText);
        choicesBox.style.display="none";
        moreButton.disabled = false;
        clearChoices();
    });
    return optionButton;
}

function clearChoices() {
    choice1.innerHTML = "";
    choice2.innerHTML = "";
}

var text =[["Old Man", "Ohhhh so you wanna hear that one eh? "],
           ["Old Man", "Well, it was a very long time ago so the details are a little hazy, but I think it goes a little something like this…"],
          ["Old Man", "Well the year was 1871... me and your grandmother Eugette, god rest her soul, were out on our first camping trip ever up in the Great Smoky Mountains. "],
           ["Old Man", "The year was 1781 and the rumors around town were starting to build about some strange creatures out in the woods."],
           ["Old Man", "Without fear though, we set out to enjoy our first camping trip together and hiked three days deeper and deeper into the woods on our way to Bearclaw Creek."],
           ["Old Man", "The landscape was spectacular, we spotted all different kinds of flowers and wildlife and all the beauty nature has to offer."],
           ["Old Man", "However, I couldn't help but notice a few strange signs along the way..."],
           ["Old Man", "Strange markings carved in the trees here and there.They seemed to become more frequent the closer we got to Beaverclaw Creek."],
           ["Old Man", "I noticed what seemed to be beds or nests or something for some animal that seemed to be about the size of a grizzly bear"],
           ["Old Man", "I didn’t mention anything though since I didn’t want to worry Eugette..."],
           ["Old Man", "It was on the third night that we first heard it..."],
           ["Old Man", "Low grumbles occupied us all around our tent…"],
           ["Old Man", "The stench of freshly killed game filled the air…"],
           ["Old Man", "And then..."],
           ["Old Man", "One word was heard..."],
           ["Old Man", "The faintest whisper still penetrated right through our ears..."],
           ["Old Man", "Time"],
           ["Old Man", "I denied hearing anything when Eugette became startled, blaming it on my poor hearing"],
           ["Old Man", "I just didn’t want to worry your grandmother you see? The whole point of the trip was to propose to her at BisonHoof Creek "],
           ["Old Man", "I wasn’t about to let anything get in the way of that. But the next morning when we finally left our tent the strangest thing happened..."],
           ["Old Man", "It seemed the entire landscape around us had changed"],
           ["Old Man", "Rocks in different locations and now bigger than the day before"],
           ["Old Man", "The trees were smaller and less green"],
           ["Old Man", "Then I swear on all that is holy that everything around us went black"],
           ["Old Man", "The air went cold but we couldn’t see or hear anything"],
           ["Old Man", "It felt as though freezing water passed through my chest"],
           ["Old Man", "I assumed I was dying..."],
           ["Old Man", "But all of a sudden the next thing i know…"],
           ["Old Man", "Both Eugette and I were back in our sleeping bags in the tent"],
           ["Old Man", "It didn’t feel like a dream at all but it had to be"],
           ["Old Man", "I rushed outside to find the landscape unchanged"],
           ["Old Man", "A chill crept up my spine as I heard the whisper again…"],
           ["Old Man", "But not your time…"],
           ["Old Man", "The hiss evaporated from the forest and nothing else strange happened from then on out"],
           ["Old Man", "I proposed to Eugette and she gladly accepted and now here we are my boy"],
           ["Old Man", "So I reckon that’s that then… The story of BoarCave Creek comes to an end"],
           [4,0],
          ];


function start() {
    addName(text[0][0]);
    addText(text[0][1]);
}



var i = 1;
function run(){
    console.log(i);
    if (text[i][0] !== 1 && text[i][0] !== 4) {
        clearText();
        addText(text[i][1]);
        i++;
    } else if (text[i][0] == 4) {
        moreButton.removeEventListener("click", run);
        moreButton.addEventListener("click", function(){
            location.replace("../index.html");
        });
    } else {
        console.log("here");
        i++;
        var option1 = createChoiceButton(text[i][0], text[i+1][1]);
        var option2 =createChoiceButton(text[i][1], text[i+2][1]);
        i+=3;
        
        choice1.appendChild(option1);
        choice2.appendChild(option2);
        choicesBox.style.display="inline-block";
        moreButton.disabled = true;
    } 
}

start();
moreButton.addEventListener("click", run);
