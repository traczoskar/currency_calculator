# Currency Calculator
### **What is it about?**

Currency Calculator is a demo project of a currency converter. You can easily type in the amount of PLN (polish złoty), choose between 3 different and the most popular currencies, then just click "Przelicz" button and the magic will happen. My application will give you result in one of three currencies that you've choosen.

### **[Currency Calculator - App link](https://traczoskar.github.io/currency_calculator/)**

## Features

- Easily converts PLN up to amount of "10.000.000.000"
- You can choose the currency between EUR / GBP / USD
- The result is visible below the submit button - green text in the window.

 For now the calculator works only one way: calculating PLN to other three currencies. In future some more advanced features will be added.

## Used technologies and conventions

- BEM convention
- **camelCase** class and functions naming
- **CSS:** (normalize.css) applied
- **CSS:** (border-box: box-sizing) applied
- **JS:** Arrow functions

## Calculating module

The currency ratios are ```const```. The value's are taken from the **NBP (National Bank od Poland)** currency exchange list of 29.12.2023 r.
```javascript
const calculateResult = (amount, currency) => {

    const resultElement = document.querySelector(".js-result");
    const eur = amount * 0.23;
    const usd = amount * 0.26;
    const gbp = amount * 0.20;
```

To make a proper calculating module the "switch" operator has been used:
```javascript
switch (currency) {
        case "EUR":
            return resultElement.innerText = (`${eur.toFixed(2)} €`);
        case "USD":
            return resultElement.innerText = (`${usd.toFixed(2)} $`);
        case "GBP":
            return resultElement.innerText = (`£ ${gbp.toFixed(2)}`);
    }
```

### Thanks for visiting my repository.
I hope this application will be helpful also for You. Please, feel free to use it ;)
