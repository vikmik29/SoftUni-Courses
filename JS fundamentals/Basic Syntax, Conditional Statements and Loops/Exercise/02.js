function rounding(m, n) {
    //     The input comes as two numbers. The first value is the number to be rounded and the second is the precision (significant decimal places). If the passed precision is more than 15, it should automatically be reduced to 15.
    // Remove trailing zeroes, if any (you can use parseFloat (number))
    // The output should be printed to the console. Do not print insignificant decimals

    if ( n > 15 ){
        n = 15;
    }

    let round = m.toFixed(n);

    console.log(Number.parseFloat(round));
}
rounding(10.5444,16);
