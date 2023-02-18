const logo = document.querySelector(`#logo`);

const nameLetters = ["I", "L", "I", "J", "A", "N"];
const surnameLetters = ["P", "R", "E", "V", "A", "Z", "I"];

let logoArr = [];
let logoStr = "";

function addAndRemove(name, surname) {
  let originalNameArray = name.slice();
  let originalSurnameArray = surname.slice();
  let str = "";
  let count = 2;

  const intervalId = setInterval(() => {
    if (name.length > 0) {
      str += name.shift();
      logo.textContent = str;
    } else if (str.length > 0) {
      str = str.slice(0, str.length - 1);
      logo.textContent = str;
    } else {
      name = originalNameArray.slice();
      count++;
    }
  }, 200);
}

addAndRemove(nameLetters, surnameLetters);

//
//
//
//

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
