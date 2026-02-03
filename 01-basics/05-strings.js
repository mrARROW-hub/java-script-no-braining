// our regular way  of writing strings is like-
const name = "rishabh" // but in nowadays it is not the right way.//
//console.log(name)

//instead this we write-
console.log(`hello world my name is ${name} `);//the $ is used to denote the variable, this method is more easy//

const gameName = new String('boyurut');//it's the other method of writting const//

console.log( gameName.toUpperCase());//it makes tthe letter uppercased (BOYURUT)//
console.log( gameName.charAt(2));//it tells us that which letter is standing at asked positon, like in this code (2)//
//similarly...
console.log(gameName.indexOf('r'));//it's used to find  out the position of the asked letter.//

const newString = gameName.slice(-8,5);//substring helps us to divide the string//
console.log(newString)

const newStringOne = "   rishabh   "
console.log(newStringOne.trim())//trim helps us to remove the extra white spaces//
console.log(newStringOne.trimStart())//trim helps us to remove the extra white spaces//
console.log(newStringOne.trimEnd())//trim helps us to remove the extra white spaces//
console.log(newStringOne)

const url="https://rishabh.com"
console.log(url.replace('rishabh','brawlstars'))//replace helps us to replace the words we want.//
console.log(url.includes('rishabh')) //helps us to identify wether the asked word is included in the variable or not.//
