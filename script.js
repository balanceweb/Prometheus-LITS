

let person = {
  name: 'ComeBack',
  age: 40,
}
for (let a in person) {
  console.log(a, person[a]);
}

let arr = ['Banana', 'Orange', 'Apple', 'Pear'];

for (a = 0; a < arr.length; a++) {
  console.log(arr[a]);
}

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

let age = 40;
let prefix;

if (age === 1) { prefix = 'year' }
else { prefix = 'years' }

console.log(`You are ${age} ${prefix} old`);

let resultAge = age === 1 ? 'year' : 'years';
console.log(age + ' ' + resultAge);


let timeOfOder = 20;
let smsClosed = 'Sorry the office is closed.';

if (timeOfOder < 9 || timeOfOder > 18) {
  console.log(smsClosed);
}



let skills = ['web', 'bots', 'seo'];

let levelUp = skills.push("ppc", "txt");

console.log(levelUp);
console.log(skills);

console.log(skills.join(' + '));
console.log(skills.slice(0, 2));
console.log(skills.splice(4, 1, "tgt"));
console.log(skills.reverse());


let balanceString = "Liberty";

console.log(`Will be ${balanceString}`);

let balanceBooling = true;

console.log(`It is ${balanceBooling}`);

let random;

console.log(`random is ${random}`);

let liberty_1 = Symbol('id');

console.log(liberty_1);

let balanceObject = {
  profession: {
    first: 'Front-end',
    second: 'Bot developer'
  },
  credo: 'Be brave'

}

console.log(balanceObject);