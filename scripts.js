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

const sisal = document.getElementById("sisal");
const publer = document.getElementById("publer");
const fiveca = document.getElementById("fiveca");

const sisalDex = document.getElementById("sisal-description");
const publerDex = document.getElementById("publer-description");
const fivecaDex = document.getElementById("fiveca-description");

sisal.addEventListener("click", function () {
  sisal.classList.add("active");
  sisalDex.classList.remove("hide");

  publer.classList.remove("active");
  publerDex.classList.add("hide");
  fiveca.classList.remove("active");
  fivecaDex.classList.add("hide");
});

publer.addEventListener("click", function () {
  publer.classList.add("active");
  publerDex.classList.remove("hide");

  sisal.classList.remove("active");
  sisalDex.classList.add("hide");
  fiveca.classList.remove("active");
  fivecaDex.classList.add("hide");
});

fiveca.addEventListener("click", function () {
  fiveca.classList.add("active");
  fivecaDex.classList.remove("hide");

  sisal.classList.remove("active");
  sisalDex.classList.add("hide");
  publer.classList.remove("active");
  publerDex.classList.add("hide");
});
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
