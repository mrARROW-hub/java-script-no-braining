   //******************************************Notes****************************************************/


   //there are two types of datatypes//
   //Primitve and NON primitive//

   //PRIMITIVE//
   //like strings,numbers,boolean,null,undefined,symbol,Bigint//there are total 7 types of primitive datatypes.//

      //FOR example//
      //strings-  
      const score= 100   
      //numbers-
      const scoreValue= 100
      //boolean-
      const isLogedIn=false
      //null-
      const temp=null
      //undefined-
      let userEmails; //or
      let userEmail=undefined
      //symbol
      const id = Symbol('123')        //to check wether they are different due to applying the symbol//
      const anotherId = Symbol('123')
      console.log(id === anotherId);
      //BigInt
      const bigNumber=12345678900987654321n
      //**************************************************************************************************/
   //Reference (Non Primitive)// (important)
     
   //Array, Objects, Functions//

    //array****************************************************************************//array
   const heros = ["spiderman", "ironman", "thor"]
     //objects*************************************************************************//objects
    let myObject= {
      name:"rishabh",
      age:"15",
     }
     //functions**********************************************************************//functions
     const myFunction= function(){
      console.log('hello! world');
     }
//*********************************************Memory********************************************/


//there are two types of memory//

//     stack (primitive)   heap(Non-primitive)
   
         //stack//
let myYoutubename = "rishabhdotcom"
let anothername = myYoutubename

anothername = "brawlstars"   
//in stack memory the value of the 'myYoutubename' variable didn't change becuase the stack memory provides us th e copy of the orignal value not the value itself, that is why the value didn't change for the forst variable even after changing it.//

      //heap//

let user={
   email: "mr.arrow.com",
   upi: "user@xyz"
}

let userOne = {
   email: "mr.arrow@google.com"
}

let userTwo = userOne 

userTwo.email = "brawlstars.com"

//in this situation the value will change because the heap memory provides the user with origanle value not the copy, that is why the value didn't change and remained the same.// 

 
console.log(myYoutubename)
console.log(anothername)

console.log(userOne)
console.log(userTwo)
