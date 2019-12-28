const cards = [
  {
    name: "shell",
    img:
      "https://raw.githubusercontent.com/taniarascia/memory/master/img/blueshell.png"
  },
  {
    name: "star",
    img:
      "https://raw.githubusercontent.com/taniarascia/memory/master/img/star.png"
  },
  {
    name: "bobomb",
    img:
      "https://raw.githubusercontent.com/taniarascia/memory/master/img/bobomb.png"
  },
  {
    name: "mario",
    img:
      "https://raw.githubusercontent.com/taniarascia/memory/master/img/mario.png"
  },
  {
    name: "luigi",
    img:
      "https://raw.githubusercontent.com/taniarascia/memory/master/img/luigi.png"
  },
  {
    name: "peach",
    img:
      "https://raw.githubusercontent.com/taniarascia/memory/master/img/peach.png"
  },
  {
    name: "1up",
    img:
      "https://raw.githubusercontent.com/taniarascia/memory/master/img/1up.png"
  },
  {
    name: "mushroom",
    img:
      "https://raw.githubusercontent.com/taniarascia/memory/master/img/mushroom.png"
  },
  {
    name: "thwomp",
    img:
      "https://raw.githubusercontent.com/taniarascia/memory/master/img/thwomp.png"
  },
  {
    name: "bulletbill",
    img:
      "https://raw.githubusercontent.com/taniarascia/memory/master/img/bulletbill.png"
  },
  {
    name: "coin",
    img:
      "https://raw.githubusercontent.com/taniarascia/memory/master/img/coin.png"
  },
  {
    name: "goomba",
    img:
      "https://raw.githubusercontent.com/taniarascia/memory/master/img/goomba.png"
  }
];
let gameGrid = cards.concat(cards);
let clickCount = 0;
let guess1 = "";
let guess2 = "";
let previousClicked = null;
gameGrid.sort(() => 0.9 - Math.random());

function match() {
  const selected = document.querySelectorAll(".selected");
  selected.forEach(card => {
    card.classList.add("match");
  });
}

function reset() {
  const selected = document.querySelectorAll(".selected");
  selected.forEach(card => {
    card.classList.remove("selected");
  });
  previousClicked = null;
  guess1 = "";
  guess2 = "";
  clickCount = 0;
}

const game = document.getElementById("game");
const grid = document.createElement("section");

grid.setAttribute("class", "grid");

game.appendChild(grid);

gameGrid.forEach(item => {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.dataset.name = item.name;
  grid.appendChild(card);
  
  const front = document.createElement("div")
  front.setAttribute("class", "front")
  card.appendChild(front)
  
  const back = document.createElement("div")
  back.setAttribute("class", "back")
  back.style.backgroundImage = `url(${item.img})`;
  card.appendChild(back)
});

grid.addEventListener("click", function(event) {
  const clicked = event.target;
  if (clicked.nodeName === "SECTION" || clicked === previousClicked || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
    return;
  } else {
    previousClicked = clicked;
  }

  if (clickCount < 2) {
    clickCount += 1;
    if (clickCount === 1) {
      guess1 = clicked.parentNode.dataset.name;
    } else if (clickCount === 2) {
      guess2 = clicked.parentNode.dataset.name;
    }
    clicked.parentNode.classList.add("selected");
  }

  if (guess1 !== "" && guess2 !== "") {
    if (guess1 === guess2) {
      setTimeout(match, 1000);
    }

    setTimeout(reset, 1000)
  }
});
