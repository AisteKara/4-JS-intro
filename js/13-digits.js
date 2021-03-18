function digits(skaicius) {
    // input validation
    if (typeof skaicius !== 'number') {
        return "Pateikta netinkamo tipo reikšmė";
    }
    if (isNan(skaicius)) {
        return 'NaN nera normalus skaicius';
    } //jei infinity naudojam tai šitą irgi apima
    if (!isFinite(skaicius)) {
        return 'Infinity nera normalus skaicius';
    } // tik čia reikėtų pakeisti į
    // `${skaicius} nera normalius skaicius`;


    // logic

    //return result
    return 0;
}

console.log(digits(5), '->', 1);
console.log(digits(781), '->', 3) );
console.log(digits(37060123456), '->', 11) );
console.log(digits(true));
console.log(digits(Infinity));
console.log(digits(-Infinity));
console.log(digits());
console.log(digits(null));
console.log(digits(“asd”));
console.log(digits(NaN));
