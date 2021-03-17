let str = '';

for (let i = 0; i < 9; i++) {
  str += i;
}

console.log(str);

/*
ats: Intervale nuo 0 iki 4 suma yra:
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 - 4       = 10
-50 - 50    = 0
0 - 100     = 5050
574 - 815   =
-70 - 30    = -2020
0 - 0       = 0
*/

const nuo = 574;
const iki = 815;
let suma = 0;

for (let i = nuo; i <= iki; i++) {
    suma += i;
}
//const ats = 'Intervale nuo ' + nuo + ' iki ' + iki + ' suma yra ' + suma + '.';
const ats = `Intervale nuo ${nuo} iki ${iki} suma yra ${suma}.`;
console.log( ats);

/*
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”

*/
/*
const text = 'abcdef';
let reverse = '';

for (let i = text.length - 1; i >= 0;  i--) {
    console.log(i, text[i]);
    reverse += text[i];
}
console.log(text, '-->', reverse);
*/

/*
const text = 'abcdef';
let reverse = '';

for (let i = text.length; i > 0;  i--) {
    console.log(i, text[i - 1]);
    reverse += text[i - 1];
}
console.log(text, '-->', reverse);
*/

