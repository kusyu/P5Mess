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
    let optionButton = document.createElement("div");
    let optionText = document.createElement("p");
    optionText.className = "choice";
    optionText.innerHTML = buttonText;
    optionButton.appendChild(optionText);
    optionButton.className = "button";
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

var text =[["Old Man", "Alright, this is a story that takes place in a far off land. Like Middle-Earth, or Florida."],
           ["Old Man", "Once upon a time, I was a knight in the grand castle of America."],
           ["Old Man", "I had received a quest at the behest of the great queen Eugette."],
           ["Old Man", "Now, Eugette was the fairest queen of them all, and it was my honor to carry out this quest."],
           ["Old Man", "Plus, she threatened to hide the remote from me if I didn’t, so I had no choice."],
           ["Old Man", "The quest was to escort the queen to the faraway kingdom and greet the En-Lau’s Dragons for some political schmucking. It was for some royal holiday, like Thanksgiving or something."],
           [5,0],
           ["Old Man", "Once we arrived in Florida, it was there that I encountered the dreaded En-Lau’s Dragons."],
           ["Old Man", "You see, dragons and knights have one specific thing in common. You know what that is?"],
           [1,2],
           ["They both like disco?","They both hate each other?"],
           ["Old Man", "What? No! What kind of fantasy stories do you kids read nowadays?"],
           ["Old Man", "Exactly! You see where this is going now, right?"],
           ["Old Man", "Dragons and knights hate each other. So for me to have to put up with the En-Lau’s for a week was a nightmare for both of us."],
           ["Old Man", "I’ll spare you the details, but it was hours upon hours of vicious torture, rooting for the inferior football team, questions about when we were going to have our sixth kid, etc."],
           ["Old Man", "You get the idea. It was terrible."],
           ["Old Man", "The only thing that stopped total war from breaking out was Eugette, the calm minded queen that kept us from going at each other’s throats."],
           ["Old Man", "I thought that this turbulent peace would hold over until we returned to America, but alas, I was not prepared for the day of the feast."],
           ["Old Man", "The En-Laus were in charge of cooking the great Toor Kay, a fearful raptor that strikes fear into the heart of all living beings."],
           ["Old Man", "Now, you have to understand that cooking the Toor Kay was an important part of the festival. It wouldn’t be a real Givethanksing without this Toor Kay."],
           ["Old Man", "But the En-Lau’s are cowards. They had no plans to deal with the Toor Kay. Instead they chose a more sinister route."],
           ["Old Man", "When I went to the kitchen to check on the feast, a terrible crime was committed."],
           ["Old Man", "Instead of the Toor Kay, there was a foul beast sitting at its place instead."],
           ["Old Man", "The En-Lau’s called it ‘Tofurkey’ or some other vile name."],
           ["Old Man", "I took one look at the ‘bird’ and realized I could not allow my queen to come near this thing, much less eat it."],
           ["Old Man", "The En-Lau’s tyrannical and barbaric ways had to end here and now."],
           ["Old Man", "Desperate times called for desperate measures. And there was only one thing I could do."],
           [1,2],
           ["You had to get rid of the bird.","You had to get rid of the En-Lau’s."],
           ["Old Man", "Correctamundo."],
           ["Old Man", "That would be nice, but there’s a number of laws preventing that."],
           ["Old Man", "I had to get rid of that dastardly Tofurkey."],
           ["Old Man", "I snuck into the kitchen. The mother En-Lau was busy with the stuffing, so she didn’t see me enter. The father En-Lau was occupied peeling the potatoes. My chance had arrived."],
           [6,0],
           ["Old Man", "With one quick swipe, I took the whole Tofurkey tray and started making my way to the trash can outside. There, nobody could see where it went."],
           ["Old Man", "However, there was something that I didn’t account for."],
           ["Old Man", "Just as I was about to make the home stretch towards the door, I ran into Eugette."],
           ["Old Man", "She eyed me, and then the dish in my hands."],
           ["Old Man", "As she stood there confused, I remembered the promise that I made."],
           ["Old Man", "Eugene’s perfect smile, her glistening eyes, her absolutely puzzled facial expression. None of them could be tainted by the Tofurkey."],
           [5,0],
           ["Old Man", "I looked around. The En-Lau’s, troubled by the missing tofurkey were now making their way towards me. My time was running out."],
           ["Old Man", "But then, I thought, 'maybe I was wrong.'"],
           ["Old Man", "Maybe the En-Lau's had their own way of doing things, and I was being too insensitive to their choices."],
           ["Old Man", "Was I about to throw away the hard work of the En-Lau's, no matter how terrible it is?"],
           ["Old Man", "Paralyzed by fear, I could feel everyone's of their eyes on me."],
           ["Old Man", "Surrounded on all sides, the only clarity I could find was with Eugette. I looked at her, then looked down at the Tofurkey."],
           ["Old Man", "And then with all my might..."],
           ["Old Man", "I threw the Tofurkey out of the window."],
           [6,0],
           ["Old Man", "Anyways, that’s why we don’t see Grandma’s side of the family anymore."],
           [4,0],
          ];


function start() {
    addName(text[0][0]);
    addText(text[0][1]);
}

function hideDragons() {
    dragon1.style.visibility = "hidden";
    dragon2.style.visibility = "hidden";
}

function showDragons() {
    dragon1.style.visibility = "visible";
    dragon2.style.visibility = "visible";
}

var i = 1;
function run(){
    console.log(i);
    if (text[i][0] !== 1 && text[i][0] !== 4 && text[i][0] !== 5 && text[i][0] !== 6) {
        clearText();
        addText(text[i][1]);
        i++;
    } else if (text[i][0] == 4) {
        moreButton.removeEventListener("click", run);
        moreButton.addEventListener("click", function(){
            location.replace("../index.html");
        });
    } else if (text[i][0] == 5) {
        showDragons();
        i++;
    } else if (text[i][0] == 6) {
        hideDragons();
        i++;
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
oldman.style.visibility = "visible";
dragon1.style.visibility = "hidden";
dragon2.style.visibility = "hidden";
