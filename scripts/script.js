const imgNumber = document.querySelector('.js-img-number');
const imgName = document.querySelector('.js-img-name');
const imgMonth = document.querySelector('.js-img-month');
const imgYear = document.querySelector('.js-img-year');
const imgCvc = document.querySelector('.js-img-cvc');
const cardName = document.querySelector('.js-card-name');
const cardNumber = document.querySelector('.js-card-number');
const cardMonth = document.querySelector('.js-card-month');
const cardYear = document.querySelector('.js-class-year');
const cardCvc = document.querySelector('.js-card-cvc');
const button = document.querySelector('.js-btn');
const cardNameAlert = document.querySelector('.js-card-name-active');
const cardNumberAlert = document.querySelector('.js-card-number-active');
const cardDateAlert = document.querySelector('.js-card-date-active');
const cardcvcAlert = document.querySelector('.js-card-cvc-active');
const form = document.querySelector('.js-form');
const complete = document.querySelector('.js-complete');
const btnComplete = document.querySelector('.js-btn-continue');
let myName = cardName.value;
let number = cardNumber.value;
let month = +cardMonth.value;
let year = +cardYear.value;
let cvc = +cardCvc.value;

class card {
  name;
  number;
  month;
  year;
  cvc;

  constructor(name, num, mon, yr, cvc) {
    this.name = name;
    this.number = num;
    this.month = mon;
    this.year = yr;
    this.cvc = cvc;
  }

  renderCardName() {
    let holderName = this.name;
    imgName.innerText = holderName.toUpperCase();

    return function () {
      if (holderName === '') {
        cardNameAlert.innerText = 'Name is required';
      } else {
        cardNameAlert.innerText = '';
      }
    };
  }

  renderCardNumber() {
    let hcardNumber = +this.number;
    let firstGn = this.number.substr(0, 4);
    let secondG = this.number.substr(4, 4);
    let thirdG = this.number.substr(8, 4);
    let fourthG = this.number.substr(12, 4);

    imgNumber.innerText = `${+firstGn} ${+secondG} ${+thirdG} ${+fourthG}`;

    return function () {
      if (hcardNumber < 1) {
        cardNumberAlert.innerText = `Can't be blank`;
      } else if (isNaN(hcardNumber)) {
        cardNumberAlert.innerText = `Wrong format, numbers only`;
      } else if (hcardNumber > 9999999999999999n) {
        cardNumberAlert.innerText = `Wrong format`;
      } else {
        cardNumberAlert.innerText = '';
      }
    };
  }

  renderMonth() {
    let hcardMonth = this.month;
    imgMonth.innerText = hcardMonth;

    return function () {
      if (hcardMonth > 12) {
        cardDateAlert.innerText = `Wrong format`;
      } else {
        cardDateAlert.innerText = '';
      }
    };
  }

  renderYear() {
    let hcardYear = this.year;
    imgYear.innerText = hcardYear;

    return function () {
      if (hcardYear < 25 || hcardYear > 99) {
        cardDateAlert.innerText = `Wrong format`;
      } else {
        cardDateAlert.innerText = '';
      }
    };
  }

  renderCvc() {
    let hcardCvc = this.cvc;
    imgCvc.innerText = hcardCvc;

    return function () {
      if (hcardCvc > 999) {
        cardcvcAlert.innerText = `Wrong format`;
      } else if (hcardCvc < 100) {
        cardcvcAlert.innerText = `Wrong format`;
      } else {
        cardcvcAlert.innerText = '';
      }
    };
  }

  checkForm() {
    let nameCheck = this.renderCardName();
    let numCheck = this.renderCardNumber();
    let monthCheck = this.renderMonth();
    let yearCheck = this.renderYear();
    let cvcCheck = this.renderCvc();
    nameCheck();
    numCheck();
    monthCheck();
    yearCheck();
    cvcCheck();

    if (
      cardNameAlert.innerText == '' &&
      cardNumberAlert.innerText == '' &&
      cardDateAlert.innerText == '' &&
      cardcvcAlert.innerText == ''
    ) {
      form.classList.add('hide');
      complete.classList.remove('hide');
    } else {
      form.classList.remove('hide');
      complete.classList.add('hide');
    }
  }
}

function getInput() {
  myName = cardName.value;
  number = cardNumber.value;
  month = +cardMonth.value;
  year = +cardYear.value;
  cvc = +cardCvc.value;
}

cardName.addEventListener('keydown', () => {
  getInput();
  const myCard = new card(myName, number, month, year, cvc);
  myCard.renderCardName();
});

cardNumber.addEventListener('keydown', () => {
  getInput();
  const myCard = new card(myName, number, month, year, cvc);
  myCard.renderCardNumber();
});

cardMonth.addEventListener('keydown', () => {
  getInput();
  const myCard = new card(myName, number, month, year, cvc);
  myCard.renderMonth();
});

cardYear.addEventListener('keydown', () => {
  getInput();
  const myCard = new card(myName, number, month, year, cvc);
  myCard.renderYear();
});

cardCvc.addEventListener('keydown', () => {
  getInput();
  const myCard = new card(myName, number, month, year, cvc);
  myCard.renderCvc();
});

button.addEventListener('click', () => {
  getInput();
  const myCard = new card(myName, number, month, year, cvc);
  myCard.checkForm();
});

btnComplete.addEventListener('click', () => {
  location.reload();
});
