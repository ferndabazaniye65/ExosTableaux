let myAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "$",
    "*",
    "/",
    "-",
    "+",
];
  
function myAlphabetLength() {
    console.log(myAlphabet.length);
}
myAlphabetLength();

// exo 2

const planets = ["Vénus", "Uranus", "Terre", "Mercure", "Jupiter"];

planets.forEach((planet, index) => {
    console.log(planet, index);
});