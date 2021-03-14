
let grid ={
  11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
  12:"f", 22: "g", 32: "h", 42 : ["i", "j"], 52: "k",
  13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
  14:"q", 24: "r", 34: "s", 44:"t", 54: "u",
  15: "v", 25:"w", 35: "x", 45: "y", 55:"z"
}


const polybiusModule = (function () {

  function polybius(input, encode = true) {
   
    input = input.toLowerCase(); 
    let result=[];
    // when we have to encode 
   if(encode == true){
    
    let arrInput =[...input];
    
    for (let i=0; i< arrInput.length ; i++){
      if (arrInput[i]===" "){
        result.push(" ")
      };
      for(let key in grid){
        if(grid[key]=== arrInput[i] || grid[key][0]=== arrInput[i] || grid[key][1]=== arrInput[i]){
          result.push(key);
          break; 
        } 
      }
    } return result.join("") 
  }
  else {
      let arrInput=[...input]
      let theCode = [];
      // return false if the number given is odd
       let removeSpace = input.split(" ").join("")
       let remainder=removeSpace.length%2 
    if (remainder==1){
        return false
    }; 
    
      for (let i=0 ; i< arrInput.length -1 ; i+=2){
        // to escape spaces
         if(arrInput[i]===" "){
           theCode.push(" ");
           for(let j=i+1; j< arrInput.length -1 ; j+=2){
              let code = arrInput[j]+ arrInput[j+1]
              theCode.push(code);
              
    } break; 
  }     else {
         let code = arrInput[i]+ arrInput[i+1]
         theCode.push(code)
  }
}
  for (let i=0 ; i< theCode.length ; i++){
    if (theCode[i]===" "){
      result.push(" ")
    };
    for (let key in grid){
      if (key == theCode[i] ){
        result.push(grid[key])
      }
    }
}
 return result.join("")

  }
}
 

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;



