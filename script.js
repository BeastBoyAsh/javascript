/*
  let js='amazing';
  if (js='amazing') alert("JAVASCRIPT IS FUN");
  
  console.log(10+8+2-2);

  console.log("Jonas");
  console.log(23);

  let firstName = "Bob"; 

  let first
  let firstNamePerson //CARMEL-CASE and _,$ are allowed

  console.log(firstName);
  console.log(firstName);
  console.log(firstName);

  let myFirstJob='Programmer';
  let myCurrentJob='Teacher';

  let job1='programmer';
  let job2='teacher';

  console.log(myFirstJob);

  let PI=3.145;
  true;


  let javascriptIsFun=true;
  console.log(javascriptIsFun);

  console.log(typeof true); 
  console.log(typeof javascriptIsFun);
  console.log(typeof 23);
  console.log(typeof "Jonas");
  console.log(typeof 'Jonas');
  console.log(typeof Jonas);

  javascriptIsFun='YES!';
  console.log(typeof javascriptIsFun);

  let year;
  console.log(year);
  console.log(typeof year);

  year=2001;
  console.log(year);
  console.log(typeof year);

  console.log(typeof null);


let age=30;
age=31;

const birthYear=1991; //IMMUTABLE
// birthYear=1990;

//const job;

var job='programmer';
job='teacher';// don't use VAR

lastName='Singh';
console.log(lastName);//don't write it like this


const now=2023;
const ageAyush=now-2001;
const ageAryan=now-2003;
console.log(ageAyush,ageAryan);

console.log(ageAryan*2,ageAyush/10);

const firstName='Ayush';
const lastName='Singh';

console.log(firstName+' '+lastName);

let x=10+5;
console.log(x);


console.log(ageAryan>ageAyush);//>,<,>=,<=
console.log(ageAryan>=20);


const now=2023;
const ageAyush=now-2001;
const ageAryan=now-2003;

console.log(25-10-5);
let x,y;
x=y=25-10-5; // x=y=10 RIGHT TO LEFT
console.log(x,y);

const avgAge=(ageAryan+ageAyush/2);
console.log(ageAryan,ageAyush,avgAge);

*/

/*
let wM=95;
let hM=1.88;
let wJ=85;
let hJ=1.76;

const weightMark=wM;
const heightMark=hM;
const weightJohn=wJ;
const heightJohn=hJ;

let markBMI=weightMark/(heightMark*heightMark);
let johnBMI=weightJohn/(heightJohn*heightJohn);

console.log(markBMI);
console.log(johnBMI);

const markHigherBMI = markBMI>johnBMI ;
//console.log(markBMI>johnBMI);
console.log(markHigherBMI);
*/

/*
const firstName='Ayush';
const job='student';
const birthYear=2001;
const year=2023;

const ayush="I'm "+ firstName + ", a " + (year-birthYear)+ " years old "+ job +" ! ";
console.log(ayush);

const ayushNew=`I,m ${firstName} a ${job} age is ${year-birthYear}`;
console.log(ayushNew);


console.log(`string \n\ multi \n\ line `);
*/
/*
const age=12;
//const isOldEnough= age>=18;
//if(isOldEnough)
if(age>=18)
{
  console.log(`Sarah can start driving 😘`)
}
else
{
  const yearsLeft=18-age;
  console.log(`Sarah is too young, wait atleast ${yearsLeft} years`);
}

const birthYear=2001;
let century;
if(birthYear<=2000){
   century=20;
}
else
{
   century=21;
}
console.log(century);
*/
/*
let wM=95;
let hM=1.88;
let wJ=85;
let hJ=1.76;

const weightMark=wM;
const heightMark=hM;
const weightJohn=wJ;
const heightJohn=hJ;

let markBMI=weightMark/(heightMark*heightMark);
let johnBMI=weightJohn/(heightJohn*heightJohn);

console.log(markBMI);
console.log(johnBMI);

if(markBMI>johnBMI){
  console.log(`Mark's BMI is higher than John's `)
  console.log(`Mark's BMI ${jmarkBMI} is higher than John's BMI ${johnBMI} !`)
}
else
{
  console.log(`John's BMI is higher than Mark's `)
  console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI} !`)
}

*/
/*
const inputYear='1991';
console.log(Number(inputYear)+18) //TYPE CONVERSION
console.log(inputYear+18);

console.log(Number('Jonas'));  //NaN output
console.log(typeof NaN);

console.log(String(23),23);

//TYPE COERCION

console.log(`I'm `+ 23 +`years old`);
console.log(`23`-`10`-3);// - change the type
console.log(`23`+`10`+3);// + don't

*/

// 5 falsy values are false, 0,'',undefined,null,NaN i.e. they will return false in boolean.
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Ayush'));
console.log(Boolean({}));
console.log(Boolean('')) ;

const money=0;
if(money){
  console.log("Don't spend it all ");
}
else{
  console.log("Go get a job");
}

let height;
if (height){
  console.log("height is defined");
}
else{
  console.log("height is undefined");
}
*/
/*
const age='18';
if(age===18) console.log(`You just became adult 😁(strict)`);

if(age==18) console.log(`You just became adult 😁(loose)`); //avoid loose equalty operator



const favourite=Number(prompt("what's your favourite number?"));

console.log(typeof favourite);

if(favourite === 23){
  alert("Cool 23 is a good number");
  console.log(`Cool 23 is a good number`)
}
else if(favourite===7){
  alert("Cool but 23 is a good number");
  console.log(`Cool but 23 is a good number`)
}
else
{
  alert("Choose 23");
  console.log(`Choose 23`)
}

if(favourite!==23) console.log(`Why not 23`);
*/
/*
const hasdriversLicense=true;
const hasGoodVision=true;

console.log(hasdriversLicense && hasGoodVision);
console.log(hasdriversLicense || hasGoodVision);
console.log(!hasdriversLicense);

const shouldDrive=hasdriversLicense && hasGoodVision;

if(shouldDrive){
  console.log("Sarah is able to drive!");
}
else
{
  console.log("Let someone else drive!")
}


const isTired=true;
if(hasdriversLicense && hasGoodVision && !isTired){
  console.log("Sarah is able to drive!");
}
else
{
  console.log("Let someone else drive!")
}
*/ 

/*
const d1=97
const d2=112
const d3=101
const k1=109
const k2=95
const k3=1

const teamDolphins=d1+d2+d3;
const teamKoalas=k1+k2+k3;

const averageTeamDolphins=teamDolphins/3;
const averageTeamKoalas=teamKoalas/3;
*/
/*
if(averageTeamDolphins>averageTeamKoalas){
  console.log(`The score of Team Dolphins is ${averageTeamDolphins} and of Team Koalas is ${averageTeamKoalas} /n/ The winner is Team Dolphins.`);
}
else if(averageTeamDolphins<averageTeamKoalas){
  console.log(`The score of Team Koalas is ${averageTeamKoalas} and of Team Dolphins is ${averageTeamDolphins} /n/ The winner is Team Koalas.`);
}
else{
  console.log(`The score of Team Dolphins is ${averageTeamDolphins} and of Team Koalas is ${averageTeamKoalas} /n/ Its a draw.`);
}
*/

/*
const min=100;

if(averageTeamDolphins>averageTeamKoalas){
  console.log(`The score of Team Dolphins is ${averageTeamDolphins} and of Team Koalas is ${averageTeamKoalas}`);
  if(averageTeamDolphins>=min){
   console.log(`The winner is Team Dolphins.`)
  }
  else{
    console.log(`No one wins.`)
  }
}
else if(averageTeamDolphins<averageTeamKoalas){
  console.log(`The score of Team Koalas is ${averageTeamKoalas} and of Team Dolphins is ${averageTeamDolphins}`);
  if(averageTeamKoalas>=min){
    console.log(`The winner is Team Koalas.`)
   }
   else{
     console.log(`No one wins.`)
   }
}
else {
  console.log(`The score of Team Dolphins is ${averageTeamDolphins} and of Team Koalas is ${averageTeamKoalas}.`);
 if(averageTeamDolphins>=min && averageTeamKoalas>=min)
 {
  console.log(`Its a draw`);
 }
}
*/
/*
const day='sunday';

switch(day){
  case 'monday': //day==='monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup")
    break;
  case 'tuesday':
    console.log("Prepare theory videos")
    break;
  case'wedneday':
  case'thursday':
  console.log("Write code examples")
  break;
  case'friday':
  console.log("Record videos")
  break;
  case'saturday':
  case'sunday':
  console.log("Enjoy the weekend")
  break;
  default:
    console.log("Not a valid date")
}
*/
/*
const age=12;
age>=18? console.log(`I like to drink wine 🍷`): //if part
console.log(`I like to drink beer 🍺`); // else part

const drink=age>=18? 'wine ':'beer ';
console.log(drink);

console.log(`I Like yo drink ${drink=age>=18? 'wine ':'beer '}`)

*/

const bill=430;
let tip;
300>=bill>=50 ? tip=bill*0.15: tip=bill*0.2;
const total=bill+tip;
console.log(`The bill was ${bill} and the tip was ${tip} and the total value is ${total}`)
