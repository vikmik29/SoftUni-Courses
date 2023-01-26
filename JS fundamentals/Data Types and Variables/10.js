function latinLetters(num) {
    for (let i = 0; i < num; i++) {
        for (let x = 0; x < num; x++) {
            for (let z = 0; z < num; z++) {
                let char1 = String.fromCharCode(97 + i);
                let char2 = String.fromCharCode(97 + x);
                let char3 = String.fromCharCode(97 + z);
                console.log(`${char1}${char2}${char3}`);
            }
        }
    }
}

latinLetters(2);
