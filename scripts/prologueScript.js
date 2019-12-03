var diaBox = document.getElementById("diaBox");
var nameBox = document.getElementById("charaName");
var textBox = document.getElementById("textBox");
var moreButton = document.getElementById("more");
var choicesBox = document.getElementById("choicesPanel");
var choice1 = document.getElementById("choice01");
var choice2 = document.getElementById("choice02");


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
function clearChoices() {
    choice1.innerHTML = "";
    choice2.innerHTML = "";
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

function createBranchButton(buttonText, link) {    
    let branchButton = document.createElement("BUTTON");
    branchButton.innerHTML = buttonText;
    branchButton.addEventListener("click", function() {
        location.replace(link);
        choicesBox.style.display="none";
        moreButton.disabled = false;
        clearChoices();
    });
    return branchButton;
}

function randomLink() {
    let randomNum = Math.floor(Math.random() * (2 + 1));
    return branchLinks[randomNum];
}

var branchLinks = ["adventure.html", 
                   "horror.html", 
                   "sciFi.html"
                  ];

var text =[["Old Man", "Hey, kid. I see you over there."],
           ["Old Man", "Hello? Can you hear me?"],
           [1,2], 
           ["Yes", "No"], 
           ["Old Man", "Good. Kids your age have hearing problems, what with their fancy headpods or airphones or what have you."],
           ["Old Man", "Then how come you responded then? Kids these days, I swear..."],
           ["Old Man", "Anyways, let me tell you a story."],
           ["Old Man", "Oh, but I have so many stories to tell, so remind me if I’ve told one before."],
           ["Old Man", "How would you like to hear about the time that I fought off the great dragon of Wunderland?"],
           [1,2],
           ["I’ll listen to this one!", "No thanks."],
           [3, branchLinks[0]],
           ["Old Man", "Huh? You say I’ve already told that one?"],
           ["Old Man", "Well that’s just absurd. I’ve never told that story before in my life."],
           ["Old Man", "Oh, I see, what about the time that *HORROR PLOT PREMISE*? That oughta get you going!"],
           [1,2],
           ["Sure thing!", "I’m… I’m good."],
           [3, branchLinks[1]],
           ["Old Man", "What’s that? I’ve told that story too? Are you sure you’re not confusing me with another old man?"],
           ["Old Man", "Lemme think…"],
           ["Old Man", "Aha! You’ll love the story about when *SCIFI PLOT PREMISE*! The thrill, the suspense, the mystery, the thrill, the suspe-"],
           [1,2],
           ["Yeah yeah, let’s hear that one already.", "You’re repeating yourself again, old man."],
           [3, branchLinks[2]],
           ["Old Man", "I-I would… I would never!"],
           ["Old Man", "Hmm… you’re quite the picky one today, ain’t ya?"],
           ["Old Man", "Here’s an idea, I’m gonna tell a story that I want to tell, and you’re going to listen, no questions asked."],
           ["Old Man", "That’s unfair? The world’s unfair, kid."],
           [4,0],
          ];


function start() {
    addName(text[0][0]);
    addText(text[0][1]);
}



var i = 1;
function run(){
    console.log(text.length);
    console.log(i);
    if (text[i][0] !== 1 && text[i][0] !== 4) {
        clearText();
        addText(text[i][1]);
        i++;
    } else if (text[i][0] == 4) {
        moreButton.removeEventListener("click", run);
        moreButton.addEventListener("click", function(){
            location.replace(randomLink());
        });
    } else {
        i++;
        var option1;
        if (text[i+1][0] !== 3) {
            option1 = createChoiceButton(text[i][0], text[i+1][1]);
        } else {
            option1 = createBranchButton(text[i][0], text[i+1][1]);
        }
        var option2 = createChoiceButton(text[i][1], text[i+2][1]);
        i+=3;
        
        choice1.appendChild(option1);
        choice2.appendChild(option2);
        choicesBox.style.display="inline-block";
        moreButton.disabled = true;
    }
    
}

start();
moreButton.addEventListener("click", run);
