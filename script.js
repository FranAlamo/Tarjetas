// Card Image
const cardName = document.getElementById("name");
const cardNumber = document.getElementById("number");
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const cardCvc = document.getElementById("cvc");

// Inputs
const nameInp = document.getElementById("card_name");
const numberInp = document.getElementById("card_number");
const monthInp = document.getElementById("card_month");
const yearInp = document.getElementById("card_year");
const cvcInp = document.getElementById("card_cvc");

const confirmBtn = document.getElementById("submit_btn");
const thank = document.querySelector(".thank");
const continueBtn = document.querySelector("#continue");
const form = document.getElementById("formulario");
const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#formulario input");
let allInputValid = false;
let isNameValid = false;
let isCardNumberValid = false;
let isMonthValid = false;
let isYearValid = false;
let isCodeValid = false;

const expresiones = {
  name: /^[a-zA-Z\s]{5,30}$/,
  number: /^\d{16}$/,
  month: /^(0?[1-9]|1[0-2])$/,
  year: /^(20[2-9][3-9]|[3-9]\d{3})$/,
  cvc: /^\d{3}$/,
};

const validarFormulario = (e) => {
  switch (e.target.id) {
    case "card_name":
      if (expresiones.name.test(e.target.value)) {
        document.getElementById("card_name").classList.remove("form-incorrect");
        document.getElementById("card_name").classList.add("form-correct");
        document
          .querySelector("#formulario .card_name_error")
          .classList.remove("card_name_error-activo");
        isNameValid = true;
      } else {
        document.getElementById("card_name").classList.add("form-incorrect");
        document.getElementById("card_name").classList.remove("form-correct");
        document
          .querySelector("#formulario .card_name_error")
          .classList.add("card_name_error-activo");
        isNameValid = false;
      }
      break;
    case "card_number":
      if (expresiones.number.test(e.target.value)) {
        document
          .getElementById("card_number")
          .classList.remove("form-incorrect");
        document.getElementById("card_number").classList.add("form-correct");
        document
          .querySelector("#formulario .card_number_error")
          .classList.remove("card_number_error-activo");
        isCardNumberValid = true;
      } else {
        document.getElementById("card_number").classList.add("form-incorrect");
        document.getElementById("card_number").classList.remove("form-correct");
        document
          .querySelector("#formulario .card_number_error")
          .classList.add("card_number_error-activo");
        isCardNumberValid = false;
      }
      break;
    case "card_month":
      if (expresiones.month.test(e.target.value)) {
        document
          .getElementById("card_month")
          .classList.remove("form-incorrect");
        document.getElementById("card_month").classList.add("form-correct");
        document
          .querySelector("#formulario .card_month_error")
          .classList.remove("card_month_error-activo");
        isMonthValid = true;
      } else {
        document.getElementById("card_month").classList.add("form-incorrect");
        document.getElementById("card_month").classList.remove("form-correct");
        document
          .querySelector("#formulario .card_month_error")
          .classList.add("card_month_error-activo");
        isMonthValid = false;
      }
      break;
    case "card_year":
      if (expresiones.year.test(e.target.value)) {
        document.getElementById("card_year").classList.remove("form-incorrect");
        document.getElementById("card_year").classList.add("form-correct");
        document
          .querySelector("#formulario .card_year_error")
          .classList.remove("card_year_error-activo");
        isYearValid = true;
      } else {
        document.getElementById("card_year").classList.add("form-incorrect");
        document.getElementById("card_year").classList.remove("form-correct");
        document
          .querySelector("#formulario .card_year_error")
          .classList.add("card_year_error-activo");
        isYearValid = false;
      }
      break;
    case "card_cvc":
      if (expresiones.cvc.test(e.target.value)) {
        document.getElementById("card_cvc").classList.remove("form-incorrect");
        document.getElementById("card_cvc").classList.add("form-correct");
        document
          .querySelector("#formulario .card_cvc_error")
          .classList.remove("card_cvc_error-activo");
        isCodeValid = true;
      } else {
        document.getElementById("card_cvc").classList.add("form-incorrect");
        document.getElementById("card_cvc").classList.remove("form-correct");
        document
          .querySelector("#formulario .card_cvc_error")
          .classList.add("card_cvc_error-activo");
        isCodeValid = false;
      }
      break;
  }
  allInputValid =
    isNameValid &&
    isCardNumberValid &&
    isMonthValid &&
    isYearValid &&
    isCodeValid;
};
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
  //input.addEventListener("change", validarFormulario);
});

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = format(e.target.value);
}
function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}
numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);

//CONFIRM//

form.addEventListener("submit", (e) => {
  // prevenir el refresh de la pagina que lanza el formulario por defecto al presionar el boton submit
  e.preventDefault();
});
confirmBtn.addEventListener("click", (e) => {
  console.log(allInputValid);
  if (allInputValid) {
    form.classList.add("disabled");
    thank.classList.remove("disabled");
  }
});

continueBtn.addEventListener("click", (e) => {
  thank.classList.add("disabled");
  form.reset();
  document.getElementById("name").innerHTML = "Jane Appleseed";
  document.getElementById("number").innerHTML = "0000 0000 0000 0000";
  document.getElementById("month").innerHTML = "00";
  document.getElementById("year").innerHTML = "00";
  document.getElementById("cvc").innerHTML = "000";

  document.getElementById("card_name").classList.remove("form-correct");
  document.getElementById("card_number").classList.remove("form-correct");
  document.getElementById("card_month").classList.remove("form-correct");
  document.getElementById("card_year").classList.remove("form-correct");
  document.getElementById("card_cvc").classList.remove("form-correct");
  form.classList.remove("disabled");
});
