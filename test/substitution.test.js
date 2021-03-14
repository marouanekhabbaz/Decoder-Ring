
const substitution= require("../src/substitution");
 const {expect} = require("chai"); 

 describe("substitution", () => {

    describe(("error handling"), ()=> {
       it("it should return false if he substitution alphabet is missing ", ()=>{
           const actual = substitution("thinkful");
           expect(actual).to.be.false
       });
       
           it("should return false if the substitution alphabet is not exactly 26 characters", ()=>{
              const actual = substitution("thinkful", "short") 
               expect(actual).to.be.false 
           });

           it("should return false if the substitution alphabet does not contain unique characters", ()=>{
               const actual =substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
                expect(actual).to.be.false
            });
         
    });
  
    describe(("encode"), ()=> {
       it("should encode a message by using the given substitution alphabet", ()=>{
           const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
           const expected= 'jrufscpw';
           expect(actual).to.be.equal(expected)
       });
       it("Spaces should be maintained throughout and Capital letters can be ignored.", ()=>{
           const actual =  substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); 
           const expected= 'elp xhm xf mbymwwmfj dne'; 
            expect(actual).to.be.equal(expected); 
        });

        it("The input could include spaces and letters as well as special characters such as #, $, *, etc.", ()=>{
            const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); 
            const expected= "y&ii$r&";
            expect(actual).to.be.equal(expected)

   });
});
describe(("decode"), ()=> {
    it("should decode a message by using the given substitution alphabet", ()=>{
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> 
        const expected= "message";
        expect(actual).to.be.equal(expected)
    });
    it("Spaces should be maintained throughout and Capital letters can be ignored.", ()=>{
        const actual =  substitution('elp xhm xf mbymwwmfj dne', "xoyqmcgrukswaflnthdjpzibev", false); //
        const expected= "you are an excellent spy" ; 
         expect(actual).to.be.equal(expected); 
     });

     it("The input could include spaces and letters as well as special characters such as #, $, *, etc.", ()=>{
         const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); 
         const expected= "message";
         expect(actual).to.be.equal(expected)

});
});

})