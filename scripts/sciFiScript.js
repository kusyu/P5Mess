var diaBox = document.getElementById("diaBox");
var nameBox = document.getElementById("charaName");
var textBox = document.getElementById("textBox");
var moreButton = document.getElementById("more");
var choicesBox = document.getElementById("choicesPanel");
var choice1 = document.getElementById("choice01");
var choice2 = document.getElementById("choice02");
var simon = document.getElementById("simon");
var eu = document.getElementById("eu");
var fam = document.getElementById("fam");
var scientist = document.getElementById("okarin");


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

var text =[["Simon", "For years I doubt my sister has been replaced. Even since 12, she went to another state to study while i stayed in Illinois"],
           ["Simon", "Days passed and she only came back during Thanksgiving. When she send me the gift yesterday during dinner, she called me Sika."],
          ["Simon","No way she’ll know how my high school friends call me, since I came to this school 2 months before. "],
          ["Simon"," Sister Euguette was not here by that time."],
          ["Old Man", "Good. Kids your age have hearing problems, what with their fancy headpods or airphones or what have you."],
           ["Old Man", "Then how come you responded then? Kids these days, I swear..."],
           ["Old Man", "Anyways, let me tell you a story."],
           ["Old Man", "Oh, but I have so many stories to tell, so remind me if I’ve told one before."],
           ["Old Man", "How would you like to hear about the time that I fought off the great dragon of Wunderland?"],
           [1,2],
           ["I’ll listen to this one!", "No thanks."],
           ["Old Man", "FFFFFFFFFF"],
           ["Old Man", "Huh? You say I’ve already told that one?"],
           ["Old Man", "Well that’s just absurd. I’ve never told that story before in my life."],
           ["Old Man", "Oh, I see, what about the time that *HORROR PLOT PREMISE*? That oughta get you going!"],
           [1,2],
           ["Sure thing!", "I’m… I’m good."],
           ["Old Man", "FFFFFFFFFF"],
           ["Old Man", "What’s that? I’ve told that story too? Are you sure you’re not confusing me with another old man?"],
           ["Old Man", "Lemme think…"],
           ["Old Man", "Aha! You’ll love the story about when *SCIFI PLOT PREMISE*! The thrill, the suspense, the mystery, the thrill, the suspe-"],
           [1,2],
           ["Yeah yeah, let’s hear that one already.", "You’re repeating yourself again, old man."],
           ["Old Man", "I-I would… I would never!"],
           ["Old Man", "Hmm… you’re quite the picky one today, ain’t ya?"],
           ["Old Man", "Here’s an idea, I’m gonna tell a story that I want to tell, and you’re going to listen, no questions asked."],
           ["Old Man", "That’s unfair? The world’s unfair, kid."],
           
          ];


function start() {
    addName(text[0][0]);
    addText(text[0][1]);
    eu.visibility="hidden";
    scientist.visibility="hidden";
}

function showSimon() {
    simon.style.visibility="visible";
    eu.style.visibility="hidden";
    fam.style.visibility="hidden";
    scientist.style.visibility="hidden";
}

function showEu() {
    fam.style.visibility="hidden";
    simon.style.visibility="hidden";
    eu.style.visibility="visible";
    scientist.style.visibility="hidden";
}

function showFam() {
    fam.style.visibility="visible";
    simon.style.visibility="hidden";
    eu.style.visibility="hidden";
    scientist.style.visibility="hidden";
}

function showFam() {
    fam.style.visibility="hidden";
    simon.style.visibility="hidden";
    eu.style.visibility="hidden";
    scientist.style.visibility="visible";
}

var i = 1;
function run(){
    console.log(i);
    if (text[i][0] !== 1) {
        clearText();
        addText(text[i][1]);
        clearName();
        addName(text[i][0]);
        if (text[i][0] == "Simon") {
            showSimon();
        } else if (text[i][0] == "Cecelia"){
            showFam();
        } else if (text[i][0] == "The Scientist") {
            showSci();
        } else {
            showEu();
        }
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
        // console.log("here");
        // i++;
        // var option1 = createChoiceButton(text[i][0], text[i+1][1]);
        // var option2 =createChoiceButton(text[i][1], text[i+2][1]);
        // i+=3;
        
        // choicesBox.appendChild(option1);
        // choicesBox.appendChild(option2);
        // choicesBox.style.display="inline-block";
        // moreButton.disabled = true;
    }
    
}

start();
eu.style.visibility="hidden";
fam.style.visibility="hidden";
scientist.style.visibility="hidden";
moreButton.addEventListener("click", run);
