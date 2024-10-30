function lifeInWeeks(age) {
    let maxLife = 90;
    let days = (maxLife - age) * 365;
    let weeks = (maxLife - age) * 52;
    let months = (maxLife - age) * 12;

    console.log('you have ' + days + ' days, ' + weeks + ' weeks, ' + months + ' months left.');

}

lifeInWeeks();