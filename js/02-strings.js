/* 
visos kombinacijos darbui su tekstu 
*/

//siandien yra: Kovo desimta.
const menuo = "Kovo";
const diena = 'desimta';

const dayString = 'Siandien yra: ' + menuo + ' ' + diena + '.';
console.log(dayString);

// Turiu vienguba (') ir dviguba (") kabutes.
const viengubaDviguba = "Turiu vienguba (') ir dviguba (\") kabutes."; // jei pries kabute padedama \ ji ignoruojama.
console.log(viengubaDviguba);

const navHTML = 
    '<nav>\
    <a href=""></a>\
    <a href=""></a>\
    <a href=""></a>\
    <a href=""></a> \
    </nav>';
    
const navHTML2 = 
    `<nav>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a> 
    </nav>`;

// Mano vardas: Petras.
const vardas = 'Petras';

const petrasBacktick = `Mano vardas: ${vardas}.`;
console.log(petrasBacktick);


console.log('----------------');
