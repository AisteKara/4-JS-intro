console.log(84555);
console.log(3.141529654);
console.log(3, 141529654);
console.log("Labas");
console.log('rytas');
console.log('Lietuva');
console.log('Mano', 'vardas', 'yra');
console.log('Man yra 5 metai');

console.log('----------------------');

/*
KINTAMUJU INICIAVIMO BUDAI:
const - kintamasis, kurio reiksmes negali is naujo priskirti *
let - kintamas, kurio reiksme gali buti priskirta kiek norite kartu (is naujo)
var - esant galimybei ⚠⚠⚠⚠ NENAUDOTI!!!! ⚠⚠⚠⚠
* - yra papildomu salygu su konpleksiniais kintamaisiais
*/

const vardas = 'Aistė';
console.log(vardas);

const pasisveikinimas = 'Labas rytas, Lietuva! 🟨🟩🟥';
console.log(pasisveikinimas);

const pirmasSkaicius = 7;
const antrasSkaicius = 77;
const suma = pirmasSkaicius + antrasSkaicius;

console.log(pirmasSkaicius);
console.log(antrasSkaicius);
console.log(suma);

console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);

const mathText = pirmasSkaicius + ' + ' + antrasSkaicius + ' = ' + suma;
console.log(mathText);

console.log('-----------');

const petrasName = 'Petras';
const age = 99;

// Petras age is 99.
const petrasAge = petrasName + ' age is ' + age + '.';
console.log(petrasAge);


console.log('-----------');

// sarasas (array)
const pazymiai = [5, 7, 8, 3, 10, 7];
console.log(pazymiai);

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(abc);

const pirmasPazymys = pazymiai[0];
console.log(pirmasPazymys);

const antrasPazymys = pazymiai[1];
console.log(antrasPazymys);

const pazymiuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4] + pazymiai[5];

const pazymiuKiekis = pazymiai.length;

const pazymiuVidurkis = pazymiuSuma / pazymiuKiekis;

console.log('Pazymiu suma:', pazymiuSuma);
console.log('Pazymiu kiekis:', pazymiuKiekis);
console.log('Pazymiu vidurkis:', pazymiuVidurkis);


const x = 'dsdsgdfdgssdfn;n';
console.log(x);

const abcIlgis =abc.length;
const paskutinesraidespozicija = abcIlgis - 1;

const paskutineRaide = abc[paskutinesraidespozicija];
console.log(paskutineRaide);
// is mums zinomos x raidziu abeceles paskutine yra 'y"
const abcAtsakymas = 'is mums zinomos ' + abcIlgis + ' raidziu abeceles paskutine yra "' + paskutineRaide + '".';
console.log(abcAtsakymas);