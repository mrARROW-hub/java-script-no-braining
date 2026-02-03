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
