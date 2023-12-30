# Currency Calculator
### _What is it about?_

Currency Calculator is a demo project of a currency converter. You can easily type in the amount of PLN (polish złoty), choose between 3 different and the most popular currencies, then just click "Przelicz" button and the magic will happen. My application will give you result in one of three currencies that you've choosen.

## Features

- Easily converts PLN up to amount of "10.000.000.000"
- You can choose the currency between EUR / GBP / USD
- The result is shown below, colored green in the window.

## Used technologies and conventions

- BEM convention
- camelCase class and funtions naming
- CSS (normalize.css) applied
- CSS (border-box: box-sizing) applied

## Calculating module

To make a proper calculating mode the "switch" operator has been used:
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


I hope this application will be helpful also for You. Please, feel free to use it ;)