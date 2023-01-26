function centuriesToMinutes(centur) {

    let years = (centur * 100) * 365.2422;
    years = Math.trunc(years);

    console.log(
        `${centur} centuries = ${centur * 100} years = ${years} days = ${
           years * 24
        } hours = ${years * 24 * 60} minutes`
    );
}

centuriesToMinutes(1);
