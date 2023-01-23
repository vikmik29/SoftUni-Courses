function vacation(people, type, day) {
    let price = 0;

    if (type === 'Business' && people >= 100) {
        people = people - 10;
    }

    switch (day) {
        case 'Friday':
            switch (type) {
                case 'Students':
                    price = people * 8.45;
                    break;
                case 'Business':
                    price = people * 10.9;
                    break;
                case 'Regular':
                    price = people * 15;
                    break;

                default:
                    break;
            }
            break;
        case 'Saturday':
            switch (type) {
                case 'Students':
                    price = people * 9.8;
                    break;
                case 'Business':
                    price = people * 15.6;
                    break;
                case 'Regular':
                    price = people * 20;
                    break;

                default:
                    break;
            }
            break;
        case 'Sunday':
            switch (type) {
                case 'Students':
                    price = people * 10.46;
                    break;
                case 'Business':
                    price = people * 16;
                    break;
                case 'Regular':
                    price = people * 22.5;
                    break;

                default:
                    break;
            }
            break;

        default:
            break;
    }

    if (type === 'Students' && people >= 30) {
        price = price * 0.85;
    }

    if (type === 'Regular' && people >= 10 && people <= 20) {
        price = price * 0.95;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(
    40,

    'Regular',

    'Saturday'
);
