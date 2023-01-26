function printType(data) {
    let type = typeof data;

    if (type === 'string' || type === 'number') {
        console.log(type);
        console.log(data);
    } else {
        console.log(type);
        console.log(`Parameter is not suitable for printing`);
    }
}
printType(null);
