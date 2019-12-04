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

var text =[["Simon", "For years I doubt my sister has been replaced. Even since 12, she went to another state to study while i stayed in Illinois"],
           ["Simon", "Days passed and she only came back during Thanksgiving. When she send me the gift yesterday during dinner, she called me Sika."],
          ["Simon","No way she’ll know how my high school friends call me, since I came to this school 2 months before. "],
          ["Simon"," Sister Euguette was not here by that time."],
          ["Eugutte", "Sika, come here and help me with the pumpkin pie."],
           ["Eugutte","It’s your favorite food since 6. I got the pumpkin from a farm on my way back."],
           ["Simon","I'm kinda confused, what shall I respond?"],
           [1,2],
           ["Sika?", "Sure, Sister Eugutte."],
           ["Eugutte", "Oh sorry my dear Simon. Just a slip of mouth."],
           ["Simon","My sister’s always clumsy. The first thanksgiving after our parents passed away in that fire, "],
           ["Simon","she made me a pancake and peacified my cry. We were so lonely at that time. "],
           ["Simon","All we could do was rely on each other and struggled to survive as a family. She accidentally burned her finger when taking the pan out."],
           ["Simon","This thought haunted me again and again."],
           ["","The second day"],
           ["Cecelia", "Simon what's up?"],
           ["Simon", "Good. There might be something off about my sister."],
           ["Cecelia","Yep? I heard there're some rumor about android among the crowd."],
           [1,2],
           ["I don't beleive so.", "Maybe... my sister is an android?"],
           ["Cecelia","Your sister is an android?"],
           ["Cecelia", "Maybe it's true.. Have you ever heard her talking about other stuff?"],
           ["Simon","Sure let's go and check it out."],
           ["","Back to home, Sister Eugette's room"],
           ["Simon", "I shouldn't open her computer"],
           ["Simon","Ayyy it's locked, what's the password?"],
           [1,2],
           ["12379489", "check the memo under the keyboard"],
           ["Simon","There's a memo with some number on it."],
           ["Simon","Okay, now check."],
           ["Simon","mailbox..."],
           ["The Scientist","Hello young man, you find my secret"],
           ["Eugutte","Simon? Don't you dare check my computer"],
           ["The Scientist", "Now you have no where to run"],
           ["The Scientist", "Join my research and become the next experiment subject"],
           
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

function showSci() {
    fam.style.visibility="hidden";
    simon.style.visibility="hidden";
    eu.style.visibility="hidden";
    scientist.style.visibility="visible";
}
{/* <style>
audio::-webkit-media-controls-play-button {
  background-color: rgba(230, 230, 255, 1);
}
</style> */}
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
