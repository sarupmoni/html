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
  #currentPlayer;
  constructor(player1, player2) {
    this.#players = [player1, player2];
    this.#playersDetails = {};
    this.createObject();
    this.#currentPlayer = this.#players[0];
  }

  createObject() {
    this.#players.forEach((player) => {
      this.#playersDetails[player] = {
        moves: new Set(),
      };
    });
  }

  switchPlayer() {
    this.#currentPlayer =
      this.#currentPlayer === this.#players[0]
        ? this.#players[1]
        : this.#players[0];
  }

  addMove(cellNumber) {
    console.log(this.#currentPlayer);
    this.#playersDetails[this.#currentPlayer].moves.add(cellNumber);
    console.log(this.#playersDetails[this.#currentPlayer]);
  }
}

const controller = (event, game) => {
  const id = event.target.id;
  game.addMove(id);
  game.switchPlayer();
  console.log(id);
};

const main = () => {
  createStructure();
  const player1 = prompt("Enter 1st player's Name");
  const player2 = prompt("Enter 2st player's Name");
  const game = new Game(player1, player2);
  document.addEventListener("click", (event) => {
    controller(event, game);
  });
};

window.onload = main;
