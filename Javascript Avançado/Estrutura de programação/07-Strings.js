var nome = "  \n  daniel  \n";
console.log("🚀 ~ file: 07-Strings.js ~ line 2 ~ nome", nome)

var nomeSemEspaco = nome.trim();
console.log("🚀 ~ file: 07-Strings.js ~ line 4 ~ nomeSemEspaco", nomeSemEspaco)

console.log(nomeSemEspaco.charAt(5));

var str = 'Ser, ou não ser, eis a questão.';

console.log(str.includes('Ser'));

console.log('abc'.repeat(2));

const str1 = '5';

console.log(str1.padStart(3, '*'));
console.log(str1.padEnd(3, '*'));


const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
console.log("🚀 ~ file: 07-Strings.js ~ line 23 ~ last4Digits", last4Digits)
const maskedNumber = last4Digits.padEnd(fullNumber.length, '*');

console.log(maskedNumber);