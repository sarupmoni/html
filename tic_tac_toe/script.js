const createElement = (tag, className, position, id = "") => {
  const location = document.querySelector(position);
  const element = document.createElement(tag);
  element.setAttribute("class", className);
  element.setAttribute("id", id);
  location.appendChild(element);
};

const createStructure = () => {
  createElement("div", "container", "body");
  for (let index = 1; index < 10; index++) {
    createElement("div", "box", ".container", index);
  }
};

class Game {
  #players;
  #playersDetails;
  constructor(player1, player2) {
    this.#players = [player1, player2];
    this.#playersDetails = {};
    this.createObject();
    console.log("players", this.#playersDetails);
  }

  createObject() {
    this.#players.forEach((player) => {
      this.#playersDetails[player] = {
        moves: new Set(),
      };
    });
  }
}

const main = () => {
  createStructure();
  const player1 = prompt("Enter 1st player's Name");
  const player2 = prompt("Enter 2st player's Name");
  const game = new Game(player1, player2);
};

window.onload = main;
