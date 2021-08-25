// var usd_uzs = 10641;

// var name = prompt('Ismingizni kiriting:');
// var surname = prompt('Familiyangizni kiring:');
// var age = prompt('Yoshingizni kiriting:');
// var passportId = prompt('Passport raqamingizni kiriting:');
// var dollar = prompt('Dollardagi summa:');
// var summa = dollar * usd_uzs;

// console.log('Ism ' + name + '\nFamiliya ' + surname + '\nYosh ' + age + '\nPassport raqami ' + passportId + '\nDollar ' + dollar + '\nSumma ' + summa);

// var USD_TO_UZS = 10641;

// var name = prompt('Ism');
// var surname = prompt('Familiya');
// var age = prompt('Yosh');
// var passportId = prompt('Pasport raqami');
// var moneyInUSD = prompt('Dollardagi summa');
// var moneyInUZS = moneyInUSD * USD_TO_UZS;

/* console.log('Ism-familiya: ' + name + ' ' + surname + '\nYosh: ' + age + '\nPasport raqami: ' + passportId + '\nDollardagi pul: $' + moneyInUSD + '\nSo\'mdagi pul: ' + moneyInUZS + ' so\'m'); */

// console.log(`Ism-familiya: ${name} ${surname}
// Yosh: ${age}
// Pasport: ${passportId}
// Dollardagi pul: $${moneyInUSD}
// So'mdagi pul: ${moneyInUZS} so'm`);

var form = document.querySelector('.js-intro-form');

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var inputSumma = document.querySelector('.input-summa');
  var inputSelect = document.querySelector('.js-select');
  var inputResult = document.querySelector('.js-convert');

  var currentlyResult = Number(inputSumma.value) * Number(inputSelect.value);
  inputResult.textContent = currentlyResult;
});

// -----------------------------------------------------------------------------------

var elFizzForm = document.querySelector('.js-fizz-form');
var elInputFizzNumber = document.querySelector('.js-fizz-input');
var elOutputNumber = document.querySelector('.js-fizz-output');

elFizzForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if(Number(elInputFizzNumber.value) > 0) {
    if(Number(elInputFizzNumber.value) % 5 === 0 && Number(elInputFizzNumber.value)){
      elOutputNumber.textContent = "Fizz Buzz";
    } else if(Number(elInputFizzNumber.value) % 5 === 0){
      elOutputNumber.textContent = "Fizz";
    } else if(Number(elInputFizzNumber.value) % 3 === 0){
      elOutputNumber.textContent = "Buzz";
    } else{
      elOutputNumber.textContent = elInputFizzNumber.value;
    }
  } else{
    elOutputNumber.textContent = "Son kiriting";
  }
});


// ----------------------------------------------------------------------

// X = Math.floor(Math.random() * (max - min + 1) + min);

var elGameForm = document.querySelector('.js-game-form');

elGameForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var elGameInput = document.querySelector('.js-game-input');
  var elGameInfo = document.querySelector('.js-game-output');
  var randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  var elNum = document.querySelector('.js-game-num');
  var i = 6;
  var num = i;

  if(i == 0) {
    elGameInfo.textContent = "Imkoniyatingiz qolmadi :)";
  }else if(+elGameInput.value > randomNumber){
    --i;
    elGameInfo.textContent = "Tanlagan soningiz katta!";
    elNum.textContent = "Imkoniyatingiz " + num + " ta qoldi";
  }else if(+elGameInput.value < randomNumber){
    --i;
    elGameInfo.textContent = "Tanlagan soningiz kichik!";
    elNum.textContent = "Imkoniyatingiz " + num + " ta qoldi";
  }else if( lGameInput.value == randomNumber){
    elGameInfo.textContent = "Tabriklaymiz topdingiz."
  }
});