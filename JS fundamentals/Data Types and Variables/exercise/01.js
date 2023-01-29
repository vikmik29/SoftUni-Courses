function sumOfNumbers(num) {
    num = num + '';
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        let char = num[i];

        char = Number(char);

        sum += char;
    }

    console.log(sum);
}

sumOfNumbers(245678);
