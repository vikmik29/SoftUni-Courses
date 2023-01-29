function gladiatorExpenses(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalSum = 0;

    for (let i = 2; i <= lostFight; i += 2) {
        totalSum += helmetPrice;
    }
    for (let z = 3; z <= lostFight; z += 3) {
        totalSum += swordPrice;
    }
    for (let y = 6; y <= lostFight; y += 6) {
        totalSum += shieldPrice;
    }

    for (let k = 12; k <= lostFight; k += 12) {
        totalSum += armorPrice;
    }

    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);
}
gladiatorExpenses(
   23,

12.50,

21.50,

40,

200
);
