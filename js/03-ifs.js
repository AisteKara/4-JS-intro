/*
IF STATEMENT:
logikos sablonai
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} ...  else if {}
if () {} else if {} ...  else if {} else {}
palyginimo operatoriai:
- visi: >, <, >=, <=, ==, !=, ===, !==, !
- naudotini: >, <, >=, <=, ===, !==, !
- nenaudotini: ==, !=   (nes nera tikrinamas reiksmiu tipas)
loginiai operatoriai: &&, ||
*/

const cookiesAgreed = true;

if (cookiesAgreed === false) {
    console.log('Ismetame cookies sutikimo bloka...1');
}

if (!cookiesAgreed) {
    console.log('Ismetame cookies sutikimo bloka...2');  // ! apsuka reiksme is true i false ir atvirksciai
}

console.log('------------');
const userLoggedIn = true;

if (userLoggedIn) {
    console.log('Log out');
} else {
    console.log('Log in');
}
