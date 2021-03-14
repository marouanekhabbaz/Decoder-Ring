
const sortedAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function isDuplicate(alphabet){
  for( let i=0 ; i< alphabet.length ; i++){
    for( let j=0 ; j< alphabet.length ; j++){     
      if( alphabet[i]=== alphabet[j] && !(i===j)){
        return true 
      }
    } 
  } return false
}
const substitutionModule = (function () {

  function substitution(input, alphabet=" ", encode = true) {

       let result=[];
       input=[...input.toLowerCase()];
        alphabet=[...alphabet]; 
    
    if(alphabet.length<26){
      return false 
    };
    let duplicate = isDuplicate(alphabet); 
    if(duplicate){
      return false
    };
    if (encode){
      for (let i=0 ; i< input.length ; i++){
        for(let j=0; j<sortedAlphabet.length ; j++){
         if ((input[i])== " "){
           result.push(input[i]);
           break;
        }
          else if(input[i] === sortedAlphabet[j]){
            result.push(alphabet[j])
        }; 
      }
    } //return result.join("")
  }
    else {
      for (let i=0 ; i< input.length ; i++){
        for(let j=0; j<alphabet.length ; j++){
          if (!alphabet.includes(input[i])){
            result.push(input[i]);
            break;
         }
           else if(input[i] === alphabet[j]){
             result.push(sortedAlphabet[j])
         }; 
      }
    } 
  }
  return result.join("");
}
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
