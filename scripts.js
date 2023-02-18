const logo = document.querySelector(`#logo`);

const nameLetters = ["I", "L", "I", "R", "J", "A", "N"];
const surnameLetters = ["P", "R", "E", "V", "A", "Z", "I"];

const random = Math.floor(Math.random() * 2);

function addAndRemove(name) {
  let originalNameArray = name.slice();
  let str = "";

  const intervalId = setInterval(() => {
    if (name.length > 0) {
      str += name.shift();
      logo.textContent = str;
    } else if (str.length > 0) {
      str = str.slice(0, str.length - 1);
      logo.textContent = str;
    } else {
      name = originalNameArray.slice();
    }
  }, 200);
}

addAndRemove(nameLetters);

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
