function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let number = '';
        for (let m = 1; m <= i; m++) {
            number += i + ' ';
        }

        console.log(number);
    }
}

triangleOfNumbers(3);
