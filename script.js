// Choose Your Own Adventure Site By Ana


// Event Listeners
document.getElementById("continue").addEventListener("click", changeScenes);
document.addEventListener("change", displayName);
document.getElementById("green").addEventListener("click", greenSky);
document.getElementById("red").addEventListener("click", redSky);
document.getElementById("pink").addEventListener("click", pinkSky);
document.getElementById("purple").addEventListener("click", purpleSky);
document.getElementById("yellowFlower").addEventListener("click", displayYellowFlower);
document.getElementById("whiteFlower").addEventListener("click", displayWhiteFlower);
document.getElementById("beginCountdownBtn").addEventListener("click", countdown);
document.getElementById("benjiBtn").addEventListener("click", benji);
document.getElementById("viewOutcomesBtn").addEventListener("click", displayOutcomes);
document.getElementById("close").addEventListener("click", closeOutcomes);
  

// Global Variables
let right = document.getElementById("right");
let left = document.getElementById("left")
let scOneEl = document.getElementById("scene1");
let scTwoEl = document.getElementById("scene2");
let scThreeEl = document.getElementById("scene3");
let scFourEl = document.getElementById("scene4")
let scFiveEl = document.getElementById("scene5");
let scSixEl = document.getElementById("scene6");
let scSevenEl = document.getElementById("scene7");
let scEightEl = document.getElementById("scene8");
let scNineEl = document.getElementById("scene9");
let scTenEl = document.getElementById("scene10");
let scElevenEl = document.getElementById("scene11");
let scTwelveEl = document.getElementById("scene12");
let scTwentyOneEl = document.getElementById("scene21");
;
let scTwentyTwoEl = document.getElementById("scene22");
;
let scTwentyThreeEl = document.getElementById("scene23");
;
let scTwentyFourEl = document.getElementById("scene24");
;
let scTwentyFiveEl = document.getElementById("scene25");
let scTwentySixEl = document.getElementById("scene26");
let scTwentySevenEl = document.getElementById("scene27");
;
let scTwentyEightEl = document.getElementById("scene28");
;
let leftChoiceEl = document.getElementById("leftChoice");
let rightChoiceEl = document.getElementById("rightChoice");
let continueBtn = document.getElementById("continue");
let outcomeSection = document.getElementById("outcomeSection");
let outcomeList = document.getElementById("outcomeList");
let outcomeBtn = document.getElementById("viewOutcomesBtn");
let playAgainBtn = document.getElementById("playAgainBtn");
let benjiBtn = false;
let scene = 1;


// MAIN FUNCTION
function changeScenes () {
  if (scene == 1) {
    scene1();
  } else if (scene == 2) {
    scene2();
  } else if (scene == 3) {
    scene3();
  } else if (scene == 4) {
    scene4();
  } else if (scene == 5) {
    scene5();
  } else if (scene == 6) {
    scene6();
  } else if (scene == 7) {
    scene7();
  } else if (scene == 8) {
    scene8();
  } else if (scene == 9) {
    scene9();
  } else if (scene == 10) {
    scene10();
  } else if (scene == 11) {
    scene11();
  } else if (scene == 26) {
    scene26();
  }
}

  
// SCENE-SPECIFIC FUNCTIONS
function scene1 () {
  if(left.checked) {
    scOneEl.style.display = "none";
    scTwoEl.style.display = "block";
    scene = 2; // scene 2
  } else if (right.checked) {
    scOneEl.style.display = "none";
    scThreeEl.style.display = "block";
    scene = 3; //scene 3
  } else {
    alert("Please select an answer to continue.");
  }
} 


function scene2 () {
  if(left.checked) {
    scTwoEl.style.display = "none";
    scTwentyOneEl.style.display = "block";
    scene = 21; // (OUTCOME) scene 21 
    leftChoiceEl.style.display = "none";
    rightChoiceEl.style.display = "none";
    continueBtn.style.display = "none";
    outcomeSection.style.display = "block";
  } else if (right.checked) {
    scTwoEl.style.display = "none";
    scFourEl.style.display = "block";
    scene = 4; // scene 4
  }
}


function scene3 () { 
  if(left.checked) {
    scThreeEl.style.display = "none";
    scFiveEl.style.display = "block";
    scene = 5; //scene 5
  } else if (right.checked) {
    scThreeEl.style.display = "none";
    scSixEl.style.display = "block";
    scene = 6; // scene 7
    leftChoiceEl.style.display = "none";
    rightChoiceEl.style.display = "none";
  }
}


function scene4() { 
  if(left.checked) {
    scFourEl.style.display = "none";
    scSevenEl.style.display = "block";
    scene = 7;// scene 6
  } else if (right.checked) {
    scFourEl.style.display = "none";
    scEightEl.style.display = "block";
    scene = 8; // scene 8  
  }
}


function scene5() {
  if (left.checked) {
    scFiveEl.style.display = "none";
    scTwentySevenEl.style.display = "block";
    scene = 27;// (OUTCOME) scene 27
    leftChoiceEl.style.display = "none";
    rightChoiceEl.style.display = "none";
    continueBtn.style.display = "none";
    outcomeSection.style.display = "block";
  } else if (right.checked) {
    scFiveEl.style.display = "none";
    scNineEl.style.display = "block";
    scene = 9;
  }
}


function scene6() {
  scSixEl.style.display = "none";
  scTwentyOneEl.style.display = "block";
  scene = 21; // (OUTCOME) scene 21
  leftChoiceEl.style.display = "none";
  rightChoiceEl.style.display = "none";
  continueBtn.style.display = "none";
  outcomeSection.style.display = "block";
}


function scene7() {
  if (left.checked) {
    scSevenEl.style.display = "none";
    scTwentyTwoEl.style.display = "block";
    scene = 22;// (OUTCOME) scene 22
    leftChoiceEl.style.display = "none";
    rightChoiceEl.style.display = "none";
    continueBtn.style.display = "none";
    outcomeSection.style.display = "block";
  } else if (right.checked) {
    scSevenEl.style.display = "none";
    let randNum = Math.random();
    if(randNum < 0.6) {
      scTenEl.style.display = "block";
      scene = 10; // scene 10 (window closes)
      leftChoiceEl.style.display = "none";
      rightChoiceEl.style.display = "none";
    } else {
      scElevenEl.style.display = "block";
      scene = 11; // scene 11 (write book)
    }
  }
}


function scene8() {
  if (left.checked) {
    scEightEl.style.display = "none";
    scFiveEl.style.display = "block";
    scene = 5; // scene 5
  } else if (right.checked) {
    scEightEl.style.display = "none";
    scTwelveEl.style.display = "block";
    scene = 12; // scene 15
    leftChoiceEl.style.display = "none";
    rightChoiceEl.style.display = "none"
    continueBtn.style.display = "none";
  }
}


function scene9() {
  if (left.checked) {
    scNineEl.style.display = "none";
    scTwentySevenEl.style.display = "block";
    scene = 27; //(OUTCOME) scene 27
    leftChoiceEl.style.display = "none";
    rightChoiceEl.style.display = "none";
    continueBtn.style.display = "none";
    outcomeSection.style.display = "block";
  } else if (right.checked) {
    scNineEl.style.display = "none";
    scTwentyEightEl.style.display = "block";
    scene = 28 //(OUCTCOME) scene 28
    leftChoiceEl.style.display = "none";
    rightChoiceEl.style.display = "none";
    continueBtn.style.display = "none";
    outcomeSection.style.display = "block";
  }
}


function scene10() {
  scTenEl.style.display = "none";
  scTwentyTwoEl.style.display = "block";
  scene = 22 // (OUTCOME) scene 22
  leftChoiceEl.style.display = "none";
  rightChoiceEl.style.display = "none";
  continueBtn.style.display = "none";
  outcomeSection.style.display = "block";
}


function scene11() {
  if (left.checked) {
    scElevenEl.style.display = "none";
    scTwentyThreeEl.style.display = "block";
    scene = 23;// (OUTCOME) scene 23
    leftChoiceEl.style.display = "none";
    rightChoiceEl.style.display = "none";
    continueBtn.style.display = "none";
    outcomeSection.style.display = "block";
} else if (right.checked) {
    scElevenEl.style.display = "none";
    scTwentyFourEl.style.display = "block";
    scene = 24;// (OUTCOME) scene 24
    leftChoiceEl.style.display = "none";
    rightChoiceEl.style.display = "none";
    continueBtn.style.display = "none";
    outcomeSection.style.display = "block";
  }
}


// TIMER IN SCENE 12

function countdown () {
 document.getElementById("final").style.display = "block";
 document.getElementById("beginCountdownBtn").style.display = "none";
  timeleft = 20;
  var countdownTimer = setInterval(function(){
  if(timeleft <= 0 && benjiBtn == false ){
    clearInterval(countdownTimer);
    nodog();
  }
  document.getElementById("countdown").value = 20 - timeleft;
  timeleft -= 1;
}, 1000);
}


function benji() {
  benjiBtn = true;
  alert("You found him!");
  scTwelveEl.style.display = "none";
  scTwentyFiveEl.style.display = "block";
  scene = 25;
  leftChoiceEl.style.display = "none";
  rightChoiceEl.style.display = "none";
  continueBtn.style.display = "none";
  outcomeSection.style.display = "block";
}


function nodog(){
  document.getElementById("findBenjiSect").style.display = "none";
  document.getElementById("dogMessage").innerHTML = "You did not find the dog in time. Click the red button continue.";
  leftChoiceEl.style.display = "none";
  rightChoiceEl.style.display = "none";
  continueBtn.style.display = "block";
  scene = 26
  scTwelveEl.style.display = "none";
  scTwentySixEl.style.display = "block";
  leftChoiceEl.style.display = "none";
  rightChoiceEl.style.display = "none";
  continueBtn.style.display = "none";
  outcomeSection.style.display = "block";
}






// NAME DISPLAY 

function displayName (){
  //input and store name
  let name1 = document.getElementById("nameIn1").value;
  let name2 = document.getElementById("nameIn2").value;

  // Ouput data onto page
  document.getElementById("nameOut").innerHTML = name1;
  document.getElementById("nameOut2").innerHTML = name1;
  document.getElementById("nameOut3").innerHTML = name1;
  document.getElementById("nameOut4").innerHTML = name2;
}





// Changing the background color in decision 3
let colorname = document.getElementById("colorname");
let colorname2 = document.getElementById("colorname2");
let colorname3 = document.getElementById("colorname3");
let colorname4 = document.getElementById("colorname4");
let colorname5 = document.getElementById("colorname5");
let colorname6 = document.getElementById("colorname6");
let colorname7 = document.getElementById("colorname7");

function greenSky (){
  document.getElementById("background").style.background = "url('background/greensky.jpg') no-repeat";
  document.getElementById("background").style.backgroundSize = "cover";
  colorname.innerHTML = "green";
  colorname2.innerHTML = "green";
  colorname3.innerHTML = "green";
  colorname4.innerHTML = "green";
  colorname5.innerHTML = "green";
  colorname6.innerHTML = "green";
  colorname7.innerHTML = "green";
}

function redSky (){
  document.getElementById("background").style.background = "url('background/redsky.jpg') no-repeat";
  document.getElementById("background").style.backgroundSize = "cover";
  colorname.innerHTML = "red";
  colorname2.innerHTML = "red";
  colorname3.innerHTML = "red";
  colorname4.innerHTML = "red";
  colorname5.innerHTML = "red";
  colorname6.innerHTML = "red";
  colorname7.innerHTML = "red";
}

function pinkSky (){
  document.getElementById("background").style.background = "url('background/pinksky.jpg') no-repeat";
  document.getElementById("background").style.backgroundSize = "cover";
  colorname.innerHTML = "pink";
  colorname2.innerHTML = "pink";
  colorname3.innerHTML = "pink";
  colorname4.innerHTML = "pink";
  colorname5.innerHTML = "pink";
  colorname6.innerHTML = "pink";
  colorname7.innerHTML = "pink";
}


function purpleSky (){
  document.getElementById("background").style.background = "url('background/purplesky.jpg') no-repeat";
  document.getElementById("background").style.backgroundSize = "cover";
  colorname.innerHTML = "purple";
  colorname2.innerHTML = "purple";
  colorname3.innerHTML = "purple";
  colorname4.innerHTML = "purple";
  colorname5.innerHTML = "purple";
  colorname6.innerHTML = "purple";
  colorname7.innerHTML = "purple";
}




// DISPLAY COLLECTED FLOWER 

function displayYellowFlower () {
  document.getElementById("yellowcollected").style.display =  "block"; 
  document.getElementById("whitecollected").style.display =  "none"; 
}

function displayWhiteFlower () {
  document.getElementById("whitecollected").style.display =  "block"; 
  document.getElementById("yellowcollected").style.display =  "none"; 
}




// DISPLAY OUTCOMES IN FINAL SCENES 

function displayOutcomes() {
  outcomeList.style.display = "block";
}

function closeOutcomes () {
  outcomeList.style.display = "none"
}

