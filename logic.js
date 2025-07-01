const validPIN = "0000";


const checkPinButton = document.getElementById("pinSubmit");
const pinInput = document.getElementById("pin");

const enableFormFields = () => {
    const formElements = document.querySelectorAll("input[type='text'], select, button");
    formElements.forEach(el => el.disabled = false);
    pinInput.disabled = true;
    checkPinButton.disabled = true;
};

checkPinButton.addEventListener("click", () => {
    const enteredPin = pinInput.value.trim();
    if (enteredPin === validPIN) {
        enableFormFields();
    } else {
        alert("Invalid PIN. Please try again.");
    }
});





  ScrollReveal().reveal('.reveal-item',{
        duration:1000,
       
        origin:'bottom',
        distance:'30px',
        interval: 200,
  easing: 'ease-in-out',
  reset: false
    })