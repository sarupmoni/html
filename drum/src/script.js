window.onload = () => {
  createAndAppendElement();
};

const createAudio = (idNameAndSrc) => {
  const newAudio = document.createElement("audio");
  newAudio.setAttribute("id", idNameAndSrc[0]);
  newAudio.setAttribute("preload", "auto");
  const source = document.createElement("source");
  source.setAttribute("src", idNameAndSrc[1]);
  source.setAttribute("type", "audio/mpeg");

  document.body.appendChild(newAudio);
  document.getElementById(idNameAndSrc[0]).appendChild(source);
};

function objectInnerTexts() {
  return {
    hihat1: "q",
    hihat2: "w",
    hihat3: "e",
    hihat4: "r",
    hihat5: "t",
    hihat6: "y",
    crash1: "u",
    hihat7: "i",
    crash2: "o",
    tom1: "s",
    tom2: "d",
    tom3: "f",
    snaredrum1: "a",
    tom4: "g",
    snaredrum2: "l",
    kick1: "h",
    bass: "k",
    kick2: "j",
  };
}

function objectIdsSource() {
  return {
    tr909snareDrum: "../assets/tr909-snare-drum-241413 copy.mp3",
    tr707snareDrum: "../assets/tr707-snare-drum-241412.mp3",
    hihat1: "../assets/hi-hat-3-231036.mp3",
    hihat2: "../assets/hi-hat-4-231039.mp3",
    hihat3: "../assets/hi-hat-5-231037.mp3",
    hihat4: "../assets/hi-hat-6-231041.mp3",
    hihat5: "../assets/hi-hat-7-231038.mp3",
    hihat6: "../assets/hi-hat-8-231040.mp3",
    hihat7: "../assets/hi-hat-231042.mp3",
    crash1: "../assets/tr707-crash-cymbal-241376.mp3",
    crash2: "../assets/tr808-crash-cymbal-241377.mp3",
    tom1: "../assets/floor-tom-107404.mp3",
    tom2: "../assets/low-floor-tom-89266.mp3",
    tom3: "../assets/floor-tom-2-87286.mp3",
    tom4: "../assets/062925_yamaha-custom-birch-floor-tom-143939-ffwav-92069.mp3",
    bass: "../assets/bass-drum-sample-1-89204.mp3",
    kick1: "../assets/tr707-kick-drum-241400.mp3",
    kick2: "../assets/tr909-kick-drum-241402.mp3",
  };
}

const createElementWithClass = (element, className, position, innerHtml) => {
  const location = document.querySelector(position);
  const newDiv = document.createElement(element);
  newDiv.setAttribute("class", className);
  if (innerHtml) {
    newDiv.innerHTML = `${innerHtml[0]}<br />[${innerHtml[1]}]`;
  }

  location.appendChild(newDiv);
};

const createAndAppendElement = () => {
  createElementWithClass("div", "drumPad", "body");
  const innerHtmls = Object.entries(objectInnerTexts());
  const idNameAndSrcs = Object.entries(objectIdsSource());

  for (const innerHtml of innerHtmls) {
    createElementWithClass("div", "drum", ".drumPad", innerHtml);
  }

  for (const idAndSrc of idNameAndSrcs) {
    createAudio(idAndSrc);
  }

  initialize();
};

function initialiseDrum(audio) {
  const drum = document.querySelectorAll(".drum");
  const { handleKeyPress, handleKeyRelease } = initializeDrumHandler(
    audio,
    drum
  );

  document.addEventListener("keydown", handleKeyPress);
  document.addEventListener("keyup", handleKeyRelease);
}

function initializeDrumHandler(audio, drum) {
  const handleKeyPress = (event) => playDrum(event, audio, drum);
  const handleKeyRelease = (event) => resetDrumAnimation(event, drum);
  return { handleKeyPress, handleKeyRelease };
}

function playDrum(event, audio, drum) {
  switch (event.key) {
    case "q":
      playAudio(audio, drum, "hihat1", 0);
      break;
    case "w":
      playAudio(audio, drum, "hihat2", 1);
      break;
    case "e":
      playAudio(audio, drum, "hihat3", 2);
      break;
    case "r":
      playAudio(audio, drum, "hihat4", 3);
      break;
    case "t":
      playAudio(audio, drum, "hihat5", 4);
      break;
    case "y":
      playAudio(audio, drum, "hihat6", 5);
      break;
    case "u":
      playAudio(audio, drum, "hihat7", 6);
      break;
    case "i":
      playAudio(audio, drum, "crash1", 7);
      break;
    case "o":
      playAudio(audio, drum, "crash2", 8);
      break;
    case "s":
      playAudio(audio, drum, "tom1", 9);
      break;
    case "d":
      playAudio(audio, drum, "tom2", 10);
      break;
    case "f":
      playAudio(audio, drum, "tom3", 11);
      break;
    case "a":
      playAudio(audio, drum, "tr909snareDrum", 12);
      break;
    case "g":
      playAudio(audio, drum, "tom4", 13);
      break;
    case "l":
      playAudio(audio, drum, "tr707snareDrum", 14);
      break;
    case "h":
      playAudio(audio, drum, "kick1", 15);
      break;
    case "k":
      playAudio(audio, drum, "bass", 16);
      break;
    case "j":
      playAudio(audio, drum, "kick2", 17);
      break;
    default:
      break;
  }
}

function playAudio(audio, drum, filePath, padId) {
  audio[filePath].currentTime = 0;
  audio[filePath].play();
  drum[padId].classList.add("change");
}

function resetDrumAnimation(event, drum) {
  switch (event.key) {
    case "q":
      resetAnimation(drum, 0);
      break;
    case "w":
      resetAnimation(drum, 1);
      break;
    case "e":
      resetAnimation(drum, 2);
      break;
    case "r":
      resetAnimation(drum, 3);
      break;
    case "t":
      resetAnimation(drum, 4);
      break;
    case "y":
      resetAnimation(drum, 5);
      break;
    case "u":
      resetAnimation(drum, 6);
      break;
    case "i":
      resetAnimation(drum, 7);
      break;
    case "o":
      resetAnimation(drum, 8);
      break;
    case "s":
      resetAnimation(drum, 9);
      break;
    case "d":
      resetAnimation(drum, 10);
      break;
    case "f":
      resetAnimation(drum, 11);
      break;
    case "a":
      resetAnimation(drum, 12);
      break;
    case "g":
      resetAnimation(drum, 13);
      break;
    case "l":
      resetAnimation(drum, 14);
      break;
    case "h":
      resetAnimation(drum, 15);
      break;
    case "k":
      resetAnimation(drum, 16);
      break;
    case "j":
      resetAnimation(drum, 17);
      break;
  }
}

function resetAnimation(drum, padId) {
  drum[padId].classList.remove("change");
}

function initialize() {
  const audio = {
    tr909snareDrum: document.querySelector("#tr909snareDrum"),
    tr707snareDrum: document.querySelector("#tr707snareDrum"),
    hihat1: document.querySelector("#hihat1"),
    hihat2: document.querySelector("#hihat2"),
    hihat3: document.querySelector("#hihat3"),
    hihat4: document.querySelector("#hihat4"),
    hihat5: document.querySelector("#hihat5"),
    hihat6: document.querySelector("#hihat6"),
    hihat7: document.querySelector("#hihat7"),
    crash1: document.querySelector("#crash1"),
    crash2: document.querySelector("#crash2"),
    tom1: document.querySelector("#tom1"),
    tom2: document.querySelector("#tom2"),
    tom3: document.querySelector("#tom3"),
    tom4: document.querySelector("#tom4"),
    bass: document.querySelector("#bass"),
    kick1: document.querySelector("#kick1"),
    kick2: document.querySelector("#kick2"),
  };

  initialiseDrum(audio);
}
