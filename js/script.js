const calculateResult = (amount, currency) => {

    const resultElement = document.querySelector(".js-result");
    const eur = amount * 0.23;
    const usd = amount * 0.26;
    const gbp = amount * 0.20;

    switch (currency) {
        case "EUR":
            return resultElement.innerText = (`${amount} zł = ${eur.toFixed(2)} €`);
        case "USD":
            return resultElement.innerText = (`${amount} zł = ${usd.toFixed(2)} $`);
        case "GBP":
            return resultElement.innerText = (`${amount} zł = £ ${gbp.toFixed(2)}`);
    }
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = amountElement.value;
    const currency = currencyElement.value;

    calculateResult(amount, currency);
};

const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
};

init();