function sum(n, m) {
    let sum = 0;
    let print = '';

    for (let i = n; i <= m; i++) {
        print += i + ' ';
        sum += i;
    }
    console.log(print);
    console.log(`Sum: ${sum}`);
}
sum(50, 60);
