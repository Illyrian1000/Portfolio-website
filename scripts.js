const logo = document.querySelector(`#logo`);

const nameLetters = ["I", "L", "I", "J", "A", "N"];

const logoLetterChange = function () {
  let i = 0;
  setInterval(function () {
    console.log(`interval`);
    logo.textContent = nameLetters[i];
    i++;
    if (i === nameLetters.length) {
      i = 0;
    }
  }, 200);
};

logoLetterChange();
