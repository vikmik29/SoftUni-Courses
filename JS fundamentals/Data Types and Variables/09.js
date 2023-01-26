function specialNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let numAsString = i.toString();
        let sum = 0;

        for (j = 0; j < numAsString.length; j++) {
            let charNew = numAsString[j];
            let charNewNumber = Number(charNew);

            sum += charNewNumber;
        }

        let isSpecial = sum === 5 || sum === 7 || sum === 11;

        console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`);
    }
}
specialNumbers(15);
