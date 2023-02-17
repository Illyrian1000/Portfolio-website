const logo = document.querySelector(`#logo`);

const nameLetters = ["I", "L", "I", "J", "A", "N"];
const surnameLetters = ["P", "R", "E", "V", "A", "Z", "I"];

const alphabet = [];

for (let i = 0; i < 26; i++) {
  alphabet.push(String.fromCharCode(65 + i)); // uppercase letters A-Z
  alphabet.push(String.fromCharCode(97 + i)); // lowercase letters a-z
}

for (let i = 0; i < 10; i++) {
  alphabet.push(String(i)); // numbers 0-9
}

console.log(alphabet);

// const logoLetterChange = function () {
//   let i = 0;
//   setInterval(function () {
//     console.log(`interval`);
//     logo.textContent = nameLetters[i];
//     i++;
//     if (i === nameLetters.length) {
//       i = 0;
//     }
//   }, 200);
// };
