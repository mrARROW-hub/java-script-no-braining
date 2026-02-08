const score = 100;//it's our regular way of writting number in js//

const balance = new Number(102);//by writting this way,it becomes obvious that the value is number//

//console.log(balance);//it will obviously show number specificaly in front if 102 and will just show 100 in score//
//console.log(score);

//these Numbers have various methods through which we can use its features,some few methods are-

const otherNumber = 123.8966;

//console.log(otherNumber.toFixed(2))//by writting to fixed, we can ensure that how much no. we want after the decimal and the no. shown will be round offed//

//console.log(otherNumber.toPrecision(5));//through to precision,we can tell the js script that in how many digits of the number we want focus,for example by writting 5 it will only focus on the first 5 digits,and the no. shown will be also round offed//

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));//by locale string we can add comas to any no. like 1000000 geys converted into 10,00,000//

//console.log(balance.toString());//by this we can convert any no. into a string//

//**********************************************Maths***************************************************//

//just like numbers maths also have some methods or features, like-

//console.log(Math.abs(-4));//by writting abs the negative no. given will be converted into positive//
//console.log(Math.round(4.6));//by using round the no. given gets round offed,like 4.6 will get converted into 4//
//console.log(Math.ceil(4.6));//by writting ceil(ceiling),the no. given will get converted into its highest form,like 4.6 gets converted into 5//
//console.log(Math.floor(4.6));//by floor, the no. given gets converted into its lowest form//
//console.log(Math.min(4,5,3,6));//by the min feature, we can find out the lowest number among the given numbers//
//console.log(Math.max(4,5,3,6));//its same like min but we get the highest number available//

//********important*******//
console.log(Math.random())//by writting random we get a random number between 0-1//
console.log((Math.random() * 10) + 1)//by multiplying the random no. with 10 and then adding it with 1 we get a no. which is larger than 0 and the no. outside the decimal is also greater than 0//
console.log(Math.floor((Math.random() * 10) + 1));//by adding math floor the random no. will not be shown in decimal form.//

const min = 1
const max = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min);//by multiplying the random no. with max-min (average)instead of 10 and then adding min to it we get a random no. between min and max//
