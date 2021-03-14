

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
   let result=[...input]; 
      if (shift == 0 || shift < -25 || shift > 25 || shift == undefined){
        return false ;    
    } ;
    if (encode){
      for (let i=0 ; i< result.length ; i++){
         for (let j=0 ;  j < alphabet.length ; j++){
           
          if (result[i].toLowerCase() == alphabet[j] ) {
            if(shift<0) {result[i] = alphabet[j+shift + 26]; } else { result[i] = alphabet[j+shift]}
            break;
         } 
      }
     } return result.join("")
    } else {
      for (let i=0 ; i< result.length ; i++){
        for (let j=0 ;  j < alphabet.length ; j++){  
         if (result[i].toLowerCase() == alphabet[j] ) {
        result[i] = alphabet[j-shift+26]
           break;
        }
     }
    } return result.join("")
    }
  } 
  return {
    caesar,
  };
})();



module.exports = caesarModule.caesar;

