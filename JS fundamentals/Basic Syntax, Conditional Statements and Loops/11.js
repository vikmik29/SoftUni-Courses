function sumOfNumbers(n) {
    let sum = 0;
    let i = 1;

    while (i <= n * 2) {
        if (i % 2 !== 0) {
            console.log(i);
            sum = sum + i;
        }

        i++;
    }
    console.log(`Sum: ${sum}`);
}
sumOfNumbers(3);
