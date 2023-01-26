function printAmazingNumber(num) {
    num = num + '';

    let sum = 0;
    let validation = 9;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    console.log(`${num} Amazing? ${sum.toString().includes(validation) ? 'True' : 'False'}`);
}

printAmazingNumber(999);
