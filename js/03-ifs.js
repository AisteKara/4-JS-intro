
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
