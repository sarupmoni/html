const drumKitConfigs = () => {
  return {
    hihat1: { key: "q", shell: 0, src: "../assets/hi-hat-3-231036.mp3" },
    hihat2: { key: "w", shell: 1, src: "../assets/hi-hat-4-231039.mp3" },
    hihat3: { key: "e", shell: 2, src: "../assets/hi-hat-5-231037.mp3" },
    hihat4: { key: "r", shell: 3, src: "../assets/hi-hat-6-231041.mp3" },
    hihat5: { key: "t", shell: 4, src: "../assets/hi-hat-7-231038.mp3" },
    hihat6: { key: "y", shell: 5, src: "../assets/hi-hat-8-231040.mp3" },
    crash1: {
      key: "u",
      shell: 6,
      src: "../assets/tr707-crash-cymbal-241376.mp3",
    },
    hihat7: { key: "i", shell: 7, src: "../assets/hi-hat-231042.mp3" },
    crash2: {
      key: "o",
      shell: 8,
      src: "../assets/tr808-crash-cymbal-241377.mp3",
    },
    tom1: { key: "s", shell: 9, src: "../assets/floor-tom-107404.mp3" },
    tom2: { key: "d", shell: 10, src: "../assets/low-floor-tom-89266.mp3" },
    tom3: { key: "f", shell: 11, src: "../assets/floor-tom-2-87286.mp3" },
    snaredrum1: {
      key: "a",
      shell: 12,
      src: "../assets/tr707-snare-drum-241412.mp3",
    },
    tom4: {
      key: "g",
      shell: 13,
      src: "../assets/062925_yamaha-custom-birch-floor-tom-143939-ffwav-92069.mp3",
    },
    snaredrum2: {
      key: "l",
      shell: 14,
      src: "../assets/tr909-snare-drum-241413 copy.mp3",
    },
    kick1: { key: "h", shell: 15, src: "../assets/tr707-kick-drum-241400.mp3" },
    bass: {
      key: "k",
      shell: 16,
      src: "../assets/bass-drum-sample-1-89204.mp3",
    },
    kick2: { key: "j", shell: 17, src: "../assets/tr909-kick-drum-241402.mp3" },
  };
};

const createParagraph = (drumData, drumContainer) => {
  const para1 = document.createElement("p");
  para1.textContent = `${drumData[0]}`;
  const para2 = document.createElement("p");
  para2.textContent = `[${drumData[1].key}]`;

  drumContainer.appendChild(para1);
  drumContainer.appendChild(para2);
};

const createAudio = (drumData, drumContainer) => {
  const newAudio = document.createElement("audio");
  newAudio.setAttribute("id", drumData[0]);
  newAudio.setAttribute("preload", "auto");
  const source = document.createElement("source");
  source.setAttribute("src", drumData[1].src);
  source.setAttribute("type", "audio/mpeg");

  newAudio.appendChild(source);
  drumContainer.appendChild(newAudio);
};

const createElement = (tagName, className, position, drumData) => {
  const location = document.querySelector(position);
  const newDiv = document.createElement(tagName);
  newDiv.setAttribute("class", className);

  if (drumData) {
    createParagraph(drumData, newDiv);
    createAudio(drumData, newDiv);
  }

  location.appendChild(newDiv);
};

const playDrumSound = (drum, drumId) => {
  const audio = document.getElementById(drumId);
  audio.currentTime = 0;
  audio.play();
  drum.classList.add("change");
};

const resetAnimation = (drum) => {
  drum.classList.remove("change");
};

const findDrumByKey = (drumObject, keyEvent) => {
  const drumData = drumObject.find(
    (object) => keyEvent.key === `${object[1].key}`
  );
  const drum = document.querySelectorAll(".drum")[drumData[1].shell];

  return { drum, drumData };
};

const onKeyRelease = (keyEvent, drumObject) => {
  const { drum } = findDrumByKey(drumObject, keyEvent);

  resetAnimation(drum);
};

const onKeyPress = (keyEvent, drumObject) => {
  const { drum, drumData } = findDrumByKey(drumObject, keyEvent);

  playDrumSound(drum, drumData[0]);
};

const createKeyHandlers = (drumObject) => {
  const handleKeyPress = (event) => onKeyPress(event, drumObject);
  const handleKeyRelease = (event) => onKeyRelease(event, drumObject);

  return { handleKeyPress, handleKeyRelease };
};

const setupEventListeners = (drumObject) => {
  const { handleKeyPress, handleKeyRelease } = createKeyHandlers(drumObject);

  document.addEventListener("keydown", handleKeyPress);
  document.addEventListener("keyup", handleKeyRelease);
};

const createHeading = () => {
  const heading = document.createElement("h1");
  heading.textContent = "MyOnline DrumPad";

  document.body.appendChild(heading);
};

const setupDrumKit = () => {
  createHeading();
  createElement("div", "drumPad", "body");
  const drumObjects = Object.entries(drumKitConfigs());

  for (const drumData of drumObjects) {
    createElement("div", "drum", ".drumPad", drumData);
  }

  setupEventListeners(drumObjects);
};

const main = () => {
  window.onload = () => {
    setupDrumKit();
  };
};

main();
