function celsiusToFahrenheit(temp) {
    c = temp;
    f = ((9 * c) / 5) + 32;
    return f;
}

function fahrenheitToCelsius(temp) {
    f = temp;
    c = (5 * (f - 32)) / 9;
    return c;
}

celsiusTemp = celsiusToFahrenheit(60);
console.log(celsiusTemp);

fahrenheitTemp = fahrenheitToCelsius(45);
console.log(fahrenheitTemp);