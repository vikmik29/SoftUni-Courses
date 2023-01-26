function replaceChar(firstParam, char, secondParam) {
    let newWord = '';

    for (let i = 0; i < firstParam.length; i++) {
        let letter = firstParam[i];

        if (letter === '_') {
            letter = char;
        }

        newWord += letter + '';
    }
    console.log(newWord === secondParam ? 'Matched' : "Not Matched");
}

replaceChar('Str_ng', 'I', 'Strong');
