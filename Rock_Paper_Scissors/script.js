"use strict";

// Globale Variablen werden in getValue() mit Werten besetzt, welche dann an detemineResult() weitergegeben werden um den Gewinner festzustellen
let selectedValue;
let randomChoice;
let result;
let randomIndex;
const choiceRock = document.querySelector(".choice.rock");
const choicePaper = document.querySelector(".choice.paper");
const choiceScissors = document.querySelector(".choice.scissors");

// Event-Listener für das `select`-Element hinzufügen
document.getElementById("handGestures").addEventListener("change", getValue);

const options = ["Rock", "Paper", "Scissors"];
const imgOptions = [
  "/images/rock3.png",
  "/images/paper2.png",
  "/images/scissors1.png",
];
// Funktion, um den Wert der ausgewählten Option zu erhalten
function getRandomHandGesture(options) {
  randomIndex = Math.floor(Math.random() * options.length);
  let chosenImg = imgOptions[randomIndex];
  console.log(chosenImg);
  document.querySelector(".choiceImg.js").src = `${chosenImg}`;
  document.querySelector(".choiceImg.js").style.display = "block";
  console.log(randomIndex);
  return options[randomIndex];
}

function getValue() {
  getRandomHandGesture(options);
  // Ausgewählte Element von Select Option wird als variable gespeichert
  let selectElement = document.getElementById("handGestures");
  if (randomIndex === 0) {
    randomChoice = "rock";
  } else if (randomIndex === 1) {
    randomChoice = "paper";
  } else if (randomIndex === 2) {
    randomChoice = "scissors";
  }
  // Ausgewähltes und zufällig gewählte Werte, werden zur Überprüfung in der Console angezeigt
  selectedValue = selectElement.value;
  console.log("Selected value:", selectedValue);
  randomChoice = getRandomHandGesture(options);
  console.log("Random value:", randomChoice);
  // Ausgewählter Wert, wird mit DOM auf der Webseite displayed
}

function determineResult() {
  console.log(selectedValue);

  // Zuerst die Farbe zurücksetzen, um vorherige Ergebnisse zu löschen
  document.getElementById("result").style.color = "black";
  document.querySelector(".result-text").style.display = "block";
  // Standardfarbe

  // Ergebnisvariable deklarieren
  let result;

  document.getElementById("jsChoiceElement").textContent = randomChoice;
  document.getElementById("result").textContent = result;
  document.querySelector(".reset-button").style.display = "block";
  document.querySelector(".result-text.js").style.display = "none";
  document.querySelector(".result-text").style.display = "none";
}

function resetSelection() {
  document.querySelector(".player").classList.add(
    "choose-section",
    "row",
    "px-5",
    "pt-5",

    "player--0",
    "player--active"
  );
  document.querySelector(".versus").classList.add("hideVersus");
  document.querySelector(".choiceImg.mine").style.display = "none";
  document.querySelector(".choiceImg.js").style.display = "none";
  document.querySelector(".player").classList.remove("hide-section");
  const selectElement = document.getElementById("handGestures");

  document.querySelector(".choose-section").classList.remove(".hide-section");
  // Setze die erste Option als ausgewählt
  selectedValue = selectElement.options[0].textContent;
  selectElement.value = selectedValue;

  // Stelle sicher, dass die erste Option aktiv ist (nicht deaktiviert)
  // Hebe die Deaktivierung auf

  // Blende den Reset-Button aus
  document.querySelector(".reset-button").style.display = "none";
  document.getElementById("result").textContent = ""; // Ergebnis zurücksetzen
  document.getElementById("myChoiceElement").textContent = ""; // Auswahl zurücksetzen
  document.getElementById("jsChoiceElement").textContent = ""; // Zufällige Auswahl zurücksetzen
  // Blende result-text aus
  document.querySelector(".result-text").style.display = "none";
  document.querySelector(".result-text.js").style.display = "none";
}

document.querySelectorAll(".choice").forEach((choice) => {
  choice.addEventListener("click", () => {
    document.querySelector(".choose-section").classList.add("hide-section");
    document.querySelector(".choose-section").classList.remove(
      "choose-section",
      "row",
      "px-5",
      "pt-5",

      "player--0",
      "player--active"
    );
    document.querySelector(".versus").classList.remove("hideVersus");
  });
});

choiceRock.addEventListener("click", () => {
  console.log("hey");
});

// Wähle alle img-Elemente aus, die das class="choice" haben
const choices = document.querySelectorAll(".choice");

// Füge jedem dieser Elemente einen Event-Listener für "mouseover" hinzu
choices.forEach(function (choice) {
  choice.addEventListener("mouseover", shadowChoice);
});

function shadowChoice(event) {
  // Das event.target verweist auf das Element, über das der Mauszeiger fährt
  let hoveredElement = event.target;

  // Der Wert des "value"-Attributs des gehoberten Elements
  let value = hoveredElement.getAttribute("value");
  console.log("Gehovert über:", value);

  // Optional: Visuelle Änderung
  hoveredElement.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.5)";

  // Optional: Schatten entfernen, wenn der Mauszeiger das Bild verlässt
  hoveredElement.addEventListener("mouseleave", function () {
    hoveredElement.style.boxShadow = "none";
  });
  if (hoveredElement === choiceRock) {
    document.querySelector(".choice.paper").classList.add("choice-shadow");
    document.querySelector(".choice.scissors").classList.add("choice-shadow");
  } else if (hoveredElement === choicePaper) {
    document.querySelector(".choice.rock").classList.add("choice-shadow");
    document.querySelector(".choice.scissors").classList.add("choice-shadow");
  } else if (hoveredElement === choiceScissors) {
    document.querySelector(".choice.rock").classList.add("choice-shadow");
    document.querySelector(".choice.paper").classList.add("choice-shadow");
  }
}

// Füge jedem dieser Elemente Event-Listener hinzu
choices.forEach(function (choice) {
  // Wenn über das Element gehovert wird
  choice.addEventListener("mouseover", function (event) {
    const hoveredElement = event.target;
    const value = hoveredElement.getAttribute("value");

    console.log(`Momentan wird über: ${value} gehovert`);
  });
  choice.addEventListener("mouseout", function () {
    document.querySelector(".choice.rock").classList.remove("choice-shadow");
    document.querySelector(".choice.paper").classList.remove("choice-shadow");
    document
      .querySelector(".choice.scissors")
      .classList.remove("choice-shadow");
  });
});

choices.forEach(function (choice) {
  choice.addEventListener("click", function (event) {
    const clickedElement = event.target;
    const value = clickedElement.getAttribute("value");

    getRandomHandGesture(options);
    getValue(options);
    if (randomIndex === 0) {
      randomChoice = "rock";
    } else if (randomIndex === 1) {
      randomChoice = "paper";
    } else if (randomIndex === 2) {
      randomChoice = "scissors";
    }
    randomChoice = getRandomHandGesture(options);
    console.log("Random value:", randomChoice);
    console.log(`Es wurde ${value} geklickt`);
    if (value === "rock") {
      document.getElementById("myChoiceElement").textContent = "Rock";
      document.getElementById("jsChoiceElement").textContent = randomChoice;
      document.querySelector(".choiceImg.mine").src = "/images/rock3.png";
      if (randomIndex === 2) {
        document.getElementById("result").textContent = "WINNER + 1";
        document.getElementById("result").style.color = "rgb(75, 167, 75)";
        document.querySelector(".result-text").style.display = "block";
        document.querySelector(".result").textContent = "LOST !";
        document.querySelector(".result").style.color = "rgb(227, 99, 75)";
        document.querySelector(".result-text.js").style.display = "block";
        myScoreCount();
      } else if (randomIndex === 1) {
        document.querySelector(".result.js").textContent = "WINNER 🤯+ 1";
        document.getElementById("result").textContent = "LOST !";
        document.getElementById("result").style.color = "rgb(227, 99, 75)";
        document.querySelector(".result.js").style.color = "rgb(75, 167, 75)";
        document.querySelector(".result-text.js").style.display = "block";
        document.querySelector(".result-text").style.display = "block";
        jsScoreCount();
      } else if (randomIndex === 0) {
        document.querySelector(".result.js").textContent = "DRAW";
        document.querySelector(".result.js").style.color = "rgb(49, 49, 49)";
        document.getElementById("result").textContent = "DRAW";
        document.getElementById("result").style.color = "rgb(49, 49, 49)";
        document.querySelector(".result-text.js").style.display = "block";
        document.querySelector(".result-text").style.display = "block";
      }
      document.querySelector(".choiceImg.mine").style.display = "block";
    } else if (value === "paper") {
      document.getElementById("myChoiceElement").textContent = "Paper";
      document.getElementById("jsChoiceElement").textContent = randomChoice;
      document.querySelector(".choiceImg.mine").src = "/images/paper2.png";
      document.querySelector(".choiceImg.mine").style.display = "block";
      if (randomIndex === 0) {
        document.getElementById("result").textContent = "WINNER + 1";
        document.getElementById("result").style.color = "rgb(75, 167, 75)";
        document.querySelector(".result-text").style.display = "block";
        document.querySelector(".result").textContent = "LOST !";
        document.querySelector(".result").style.color = "rgb(227, 99, 75)";
        document.querySelector(".result-text.js").style.display = "block";
        myScoreCount();
      } else if (randomIndex === 2) {
        document.querySelector(".result.js").textContent = "WINNER 🤯+ 1";
        document.getElementById("result").textContent = "LOST !";
        document.getElementById("result").style.color = "rgb(227, 99, 75)";
        document.querySelector(".result.js").style.color = "rgb(75, 167, 75)";
        document.querySelector(".result-text.js").style.display = "block";
        document.querySelector(".result-text").style.display = "block";
        jsScoreCount();
      } else if (randomIndex === 1) {
        document.querySelector(".result.js").textContent = "DRAW";
        document.querySelector(".result.js").style.color = "rgb(49, 49, 49)";
        document.getElementById("result").textContent = "DRAW";
        document.getElementById("result").style.color = "rgb(49, 49, 49)";
        document.querySelector(".result-text.js").style.display = "block";
        document.querySelector(".result-text").style.display = "block";
      }
    } else if (value === "scissors") {
      document.getElementById("myChoiceElement").textContent = "Scissors";
      document.getElementById("jsChoiceElement").textContent = randomChoice;
      document.querySelector(".choiceImg.mine").src = "/images/scissors1.png";
      document.querySelector(".choiceImg.mine").style.display = "block";
      if (randomIndex === 1) {
        document.getElementById("result").textContent = "WINNER +1";
        document.getElementById("result").style.color = "rgb(75, 167, 75)";
        document.querySelector(".result-text").style.display = "block";
        document.querySelector(".result").textContent = "LOST !";
        document.querySelector(".result").style.color = "rgb(227, 99, 75)";
        document.querySelector(".result-text.js").style.display = "block";
        myScoreCount();
      } else if (randomIndex === 0) {
        document.querySelector(".result.js").textContent = "WINNER 🤯+ 1";
        document.getElementById("result").textContent = "LOST !";
        document.getElementById("result").style.color = "rgb(227, 99, 75)";
        document.querySelector(".result.js").style.color = "rgb(75, 167, 75)";
        document.querySelector(".result-text.js").style.display = "block";
        document.querySelector(".result-text").style.display = "block";
        jsScoreCount();
      } else if (randomIndex === 2) {
        document.querySelector(".result.js").textContent = "DRAW";
        document.querySelector(".result.js").style.color = "rgb(49, 49, 49)";
        document.getElementById("result").textContent = "DRAW";
        document.getElementById("result").style.color = "rgb(49, 49, 49)";
        document.querySelector(".result-text.js").style.display = "block";
        document.querySelector(".result-text").style.display = "block";
      }
    }
    document.querySelector(".reset-button").style.display = "block";
    let myScore = parseInt(document.querySelector(".myCount").textContent, 10);
    let jsScore = parseInt(document.querySelector(".jsCount").textContent, 10);
    if (myScore > jsScore) {
      document.querySelector(".myCount").style.color = "rgb(75, 167, 75)";
    } else if (jsScore > myScore) {
      document.querySelector(".jsCount").style.color = "rgb(75, 167, 75)";
    } else if (jsScore === myScore) {
      document.querySelector(".jsCount").style.color = "beige";
      document.querySelector(".myCount").style.color = "beige";
    }
  });
});

function myScoreCount() {
  let myScore = parseInt(document.querySelector(".myCount").textContent, 10);
  myScore += 1;
  document.querySelector(".myCount").textContent = myScore;

  if (myScore === 3) {
    document.querySelector(".modal").classList.add("show");
    document.querySelector(".modal.show").style.display = "block";
    document.querySelector(".myCount.endOfGame").textContent = "won against";
    document.querySelector("main").style.filter = "blur(5px)";
    document.querySelector(".modal-header").textContent =
      "Congratulations ! 😊🎉";
    document.querySelector(".modal-text").textContent = "You won the game";
  }
}

function jsScoreCount() {
  let jsScore = parseInt(document.querySelector(".jsCount").textContent, 10);
  jsScore += 1;
  document.querySelector(".jsCount").textContent = jsScore;

  if (jsScore === 3) {
    document.querySelector(".modal").classList.add("show");
    document.querySelector(".modal.show").style.display = "block";
    document.querySelector(".myCount.endOfGame").textContent = "lost against";
    document.querySelector(".modal-header").textContent = "What a pity ! 😣";
    document.querySelector(".modal-text").textContent = "Wanna try again ?";
    document.querySelector("main").style.filter = "blur(5px)";
  }
}

function getModal() {
  if (Score === 3) {
    document.querySelector(".modal").style.display = "block";
  }
}

document.querySelector(".close-modal").addEventListener("click", () => {
  document.querySelector(".modal.show").style.display = "none";
  document.querySelector(".modal").classList.remove("show");

  document.querySelector("main").style.filter = "";
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".myCount").textContent = 0;
  document.querySelector(".jsCount").textContent = 0;
  document.querySelector(".myCount").style.color = "beige";
  document.querySelector(".jsCount").style.color = "beige";
  document.querySelector(".choiceImg.js").src = "";
  document.querySelector(".choiceImg.mine").src = "";
  document.getElementById("result").textContent = "";
  document.querySelector(".result.js").textContent = "";
  document.querySelector(".player").classList.add(
    "choose-section",
    "row",
    "px-5",
    "pt-5",

    "player--0",
    "player--active"
  );
  document.querySelector(".choose-section").classList.remove(".hide-section");
  document.querySelector(".versus").classList.add("hideVersus");
  document.querySelector(".reset-button").style.display = "none";
});
