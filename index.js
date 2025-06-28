const characters = [
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
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1Element = document.getElementById("password1");
let password2Element = document.getElementById("password2");

password1Element.addEventListener("click", () => {
  navigator.clipboard.writeText(password1Element.innerText);
  // console.log("Content copied to clipboard")
  alert(password1Element.innerText + " Content copied to clipboard");
});

password2Element.addEventListener("click", () => {
  navigator.clipboard.writeText(password2Element.innerText);
  // console.log("Content copied to clipboard")
  alert(password2Element.innerText + " Content copied to clipboard");
});

const lengthInput = document.getElementById("password-length");
const generateBtn = document.querySelector(".generate-btn");

function validateLengthInput() {
  if (!lengthInput.validity.valid || lengthInput.value < 8) {
    generateBtn.disabled = true;
  } else {
    generateBtn.disabled = false;
  }
}

lengthInput.addEventListener("input", validateLengthInput);

validateLengthInput();

// function passwordGenerator() {
//   let lengthInput = document.getElementById("password-length");
//   let length = parseInt(lengthInput.value, 10) || 8;
//   if (length < 8) length = 8;

//   const includeSymbolsCheckbox = document.getElementById("include-symbols");
//   const includeNumbersCheckbox = document.getElementById("include-numbers");

//   // To check if toggles are ON:
//   const includeSymbols = includeSymbolsCheckbox.checked;
//   const includeNumbers = includeNumbersCheckbox.checked;

//   let password1 = "";
//   for (let i = 0; i < length; i++) {
//     if (includeNumbers && includeSymbols) {
//       let index = Math.floor(Math.random() * characters.length);
//       password1 += characters[index];
//     } else if (!includeNumbers && !includeSymbols) {
//       let index = Math.floor(Math.random() * 52);
//       password1 += characters[index];
//     } else if (includeNumbers && !includeSymbols) {
//       let index = Math.floor(Math.random() * 62);
//       password1 += characters[index];
//     } else if (!includeNumbers && includeSymbols) {
//       const letters = characters.slice(0, 52);
//       const symbols = characters.slice(62);
//       const lettersAndSymbols = letters.concat(symbols);
//       let index = Math.floor(Math.random() * lettersAndSymbols.length);
//       password1 += lettersAndSymbols[index];
//     }
//   }

//   password1Element.textContent = password1;

//   let password2 = "";
//   for (let i = 0; i < length; i++) {
//     if (includeNumbers && includeSymbols) {
//       let index = Math.floor(Math.random() * characters.length);
//       password2 += characters[index];
//     } else if (!includeNumbers && !includeSymbols) {
//       let index = Math.floor(Math.random() * 52);
//       password2 += characters[index];
//     } else if (includeNumbers && !includeSymbols) {
//       let index = Math.floor(Math.random() * 62);
//       password2 += characters[index];
//     } else if (!includeNumbers && includeSymbols) {
//       const letters = characters.slice(0, 52);
//       const symbols = characters.slice(62);
//       const lettersAndSymbols = letters.concat(symbols);
//       let index = Math.floor(Math.random() * lettersAndSymbols.length);
//       password2 += lettersAndSymbols[index];
//     }
//   }

//   password2Element.textContent = password2;
// }

// better logic
function passwordGenerator() {
  let lengthInput = document.getElementById("password-length");
  let length = parseInt(lengthInput.value, 10) || 8;
  if (length < 8) length = 8;

  const includeSymbols = document.getElementById("include-symbols").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;

  // Build allowed character set
  let allowed = characters.slice(0, 52); // always include letters
  if (includeNumbers) allowed = allowed.concat(characters.slice(52, 62));
  if (includeSymbols) allowed = allowed.concat(characters.slice(62));

  // If both toggles are off, only letters are used (already handled above)

  function generatePassword() {
    let pwd = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * allowed.length);
      pwd += allowed[index];
    }
    return pwd;
  }

  password1Element.textContent = generatePassword();
  password2Element.textContent = generatePassword();
}
