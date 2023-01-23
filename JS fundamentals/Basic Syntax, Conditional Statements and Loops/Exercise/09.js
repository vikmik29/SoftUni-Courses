function login(data) {
    let user = data[0];
    let index = 1;
    let passTried = data[index];

    let correctPass = user.split('').reverse().join('');
    let count = 0;

    while (passTried !== correctPass) {
        count++;
        index++;
        passTried = data[index];

        if (count > 3) {
            console.log(`User ${user} blocked!`);
            return;
        }

        console.log('Incorrect password. Try again.');
    }

    console.log(`User ${user} logged in.`);
}
login(['sunny','rainy','cloudy','sunny','notsunny']);
