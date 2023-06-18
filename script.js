'use strict';
/*
let hasdriversLicense=false;
const passTest=true;

if(passTest) hasdriversLicense=true;
if(hasdriversLicense) console.log(`I can drive`);

//const interface='Audio';
//const private=534;

*/
/*
function logger(){ //making the function
    console.log(`My name is Ayush`);
}
logger(); //invoking the function
*/

/*
function fruitProcessor(apples,oranges){
    const juice=`Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice=fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice=fruitProcessor(2,3);
console.log(appleOrangeJuice);
*/
/*
 !function declaration
function calcAge1(birthYear){
    /const age=2023-birthYear;
    return 2023-birthYear;
}
const age1=calcAge1(2001);
console.log(age1);


!function expression
const calcAge2=function(birthYear) //no-name function
{
    return 2023-birthYear;
}
const age2=calcAge2(2001);
console.log(age2);
*/
/*
!arrow function
const calcAge3=birthYear=>2023-birthYear;
const age3=calcAge3(2001)
console.log(age3);

const yearsUntilRetirements =(birthYear,firstName)=> {
const age=2023-birthYear;
const retirement=65-age;
return retirement;
}
console.log(yearsUntilRetirements(2001));
*/
/*
function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples,oranges){
const applePieces=cutFruitPieces(apples);
const orangePieces=cutFruitPieces(oranges);

    const juice=`Juice with ${applePieces} apple piece and ${orangePieces} orange piece.`;
    return juice;
}
console.log(fruitProcessor(2,3));
*/ 
/*
const calcAverage=(a,b,c)=>(a+b+c)/3;
console.log(calcAverage(3,4,5));

let scoreDolphins=calcAverage(44,23,71);
let scoreKoalas=calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);

const checkWinner=function(avgDolphins,avgKoalas)
{
    if(avgDolphins>=2*avgKoalas){
        console.log(`Dolphins win ${avgDolphins}`);
    }
    else if(avgKoalas>=2*avgDolphins){
        console.log(`Koalas win ${avgKoalas}`);
    }
    else{
        console.log(`No team wisn`);
    }
}

checkWinner(scoreDolphins,scoreKoalas);
*/
/*
const friend1='Michael';
const friend2='Steven';//pain to add more.

const friends=['Michael','Steven','Peter'];
console.log(friends);

const years=new Array(1990,1991,1992,1993);
console.log(years);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2]='Jay'; //only primitive value is immutable in constant.
console.log(friends);

const ayush=['Ayush','Singh',2001,2023-2001,friends];
console.log(ayush);


const calcAge=function(birthYear){
    return 2023-birthYear;
}
const birthYear=[1990,1967,2002,2010,2018];
const age1=calcAge(years[0]);
const age2=calcAge(years[1]);
const age3=calcAge(years[2]);
console.log(age1,age2,age3);

const ages=[calcAge(years[0]),calcAge(years[1]),calcAge(years[2])];
console.log(ages);
*/

/*
const friends=['Michael','Steven','Peter'];
const newLength=friends.push('Jay'); //add at last
console.log(friends);
console.log(newLength);
friends.unshift('John'); //add at front
console.log(friends);

friends.pop(); //remove last
const popped=friends.pop();
console.log(popped);

friends.shift(); //remove first
console.log(friends);

console.log(friends.indexOf('Steven'));//index of element

console.log(friends.indexOf('Bob'));


console.log(friends.includes('Steven'));//boolean whether element is present or not

console.log(friends.includes('Bob'));

if(friends.includes('Steven')){
    console.log('You have a Steven');
}
*/


/*
const calcTip=function (bill){
   return bill>=50 && bill<=300  ? bill*0.15:bill*0.20;
}
const bills=[125,555,44];
const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const totals=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(bills,tips,totals);
*/
/*
 const ayushArray=[
    'Ayush',
    'Singh',
    2023-2001,
    'Student',
    ['Michael','Jones','Joe']
  ];

  const ayush={
firstName:'Ayush',
lastName:'Singh',
age:2023-2001,
job:'Student',
friends:['Michael','Jones','Joe']
  };

  console.log(ayush);
  console.log(ayush.lastName);
  console.log(ayush['lastName']);

  const nameKey='Name';
  console.log(ayush['first'+nameKey]);
  console.log(ayush['last'+nameKey]); 
/*
  const interestedIn=prompt('what do you want to know about ayush?choose betweem firstName.lastName,age.job and friends');


  if(jonas[interestedIn]){
    console.log(ayush[interestedIn]);
  }
  else{
    console.log('wrong request');
  }
*/
/*
  ayush.location='Durg';
  ayush['ig']='@ayushhh_'

  console.log(ayush);
  */
 /*
  const ayush={
    firstName:'Ayush',
    lastName:'Singh',
    birthYear:2001,
    job:'Student',
    friends:['Michael','Jones','Joe'],
    hasDriversLicense:true,
      

      //calcAge : function(birthYear)
       // return 2023-birthYear;
      
      
      // calcAge : function(this){
      //return 2023-this.birthYear;
       
      calcAge : function(){
this.age=2022-this.birthYear;
return this.age;
      },
      getSummary:function(){
        return `${this.firstName} is a ${this.calcAge()}
        -year old ${ayush.job}, and he has ${this.hasDriversLicense ? 'a':'no'} driver's license.`
      }
    };
    console.log( ayush.age);
    console.log(ayush.getSummary());
    */
/*
    for (let rep=1; rep<=10; rep++ ) {
    console.log(`lifting weights repetition ${rep}.`);
    }
*/
/*
const ayush={
    firstName:'Ayush',
    lastName:'Singh',
    birthYear:2001,
    job:'Student'};

    for (let i=0;i<5;i++){
        console.log(ayush[i]);
    }
    */
/*

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}
*/
/*
const ayush=[
  'Ayush',
  'Singh',
  2023-2001,
  'Student',
  ['Micky','Licky','Ricky'],
  true
];

for(let i=ayush.length-1;i>=0;i--){
console.log(i,ayush[i]);
}

/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}
*/
/*
for(let exercise=1;exercise<4;exercise++){
  console.log(`Starting extercise ${exercise}`);
    
  for(let rep=1;rep<=5;rep++){
    console.log(`Lifting weight repetition ${rep}`);
  }
}
*/
/*
let rep=1;
while(rep<=10){
  console.log(`Lifting weight repetition ${rep}`);
  rep++
}
*/
/*
let dice=Math.trunc(Math.random()*6)+1;

while(dice !== 6){
  console.log(`You rolled a ${dice}`);
  dice=Math.trunc(Math.random()*6)+1;
}
*/
/*
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));