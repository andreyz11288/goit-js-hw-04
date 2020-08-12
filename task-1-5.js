const countryName = "ddfr";

const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В выбранную страну доставка недоступна.";
const CHINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
    // Write code under this line
    case "Китай":
      price = 100;
      break;
    case "Австралия":
      price = 170;
      break;
    case "Индия":
      price = 80;
      break;
    case "Ямайка":
      price = 120;
      break;
    default:
      country = false;
  }
}
if (country) {
  // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
} else if (country === false) {
  message = "В выбранную страну доставка недоступна.";
}

console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'

// Второй вариант

const countryName = "Китай";

const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В выбранную страну доставка недоступна.";
const CHINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
    // Write code under this line
    case "Китай":
      price = 100;
      break;
    case "Австралия":
      price = 170;
      break;
    case "Индия":
      price = 80;
      break;
    case "Ямайка":
      price = 120;
      break;
  }
  if (price > 0) {
    // Write code on this line
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
  } else {
    message = "В выбранную страну доставка недоступна.";
  }
}
console.log(message);
