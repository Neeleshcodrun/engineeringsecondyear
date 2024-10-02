let score =true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33"=>33
//"true"=>1   "false"=>0
//"33abc"=>NaN

let isLoggedIn=""

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1=>true  0=>false
//""=>false
//"name"=>true

let somenumber=33
let Snumber=String(somenumber)
console.log(Snumber);
console.log(typeof Snumber);
//number converted into string 


//converted into to string in boolean
//"565789"=>true  ""=>false
let strn="565789"
let boolenIsNumber=Boolean(strn)
console.log(strn);
console.log(boolenIsNumber);
console.log(typeof boolenIsNumber);


//***********Operation***** */


let value=3
let negValue=-value
//console.log(negValue); ==>-3 output

/*console.log(2+2); =>4
console.log(2-2);  =>0
console.log(2/2);  =>1
console.log(2**2); =>4
console.log(2%2); =>0
console.log(2*2);  =>4 */

let str1="neelesh"
let str2="yogesh"
let str3=str1+str2
console.log(str3); //neeleshyogesh

console.log("1"+2);//  ==>12
console.log(1+"2");//  ==>12
console.log("1"+2+2);//  =>122
console.log("1"+2+"2");// =>122
console.log(1+2+"2"); // ==>32

console.log(true);//=>true
console.log(+true);//=>>1
//console.log(true+);// =>error
console.log(+false);// =>0
//console.log(false-);// =>error

// AND MOST IMPORTANT THING THAT IS CONSISTANCY

let gamecounter=100
gamecounter++;// same in ++gamecounter
console.log(gamecounter);// increase by one

