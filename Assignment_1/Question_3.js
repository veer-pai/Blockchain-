function factorial(num) {
    if (num == 0) {
        return 1;
    }

    return num * factorial(num - 1);
}

facto = factorial(6);
console.log(facto);