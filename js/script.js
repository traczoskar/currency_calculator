const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const formElement = document.querySelector(".js-form");
const resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = amountElement.value;
    const eur = amount * 0.23;
    const usd = amount * 0.26;
    const gbp = amount * 0.20;

    switch (currencyElement.value) {
        case "EUR":
            resultElement.innerText = (`${eur.toFixed(2)} €`);
            break;
        case "USD":
            resultElement.innerText = (`${usd.toFixed(2)} $`);
            break;
        case "GBP":
            resultElement.innerText = (`£ ${gbp.toFixed(2)}`);
            break;
    }
})