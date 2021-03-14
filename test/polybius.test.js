
const polybius = require("../src/polybius");
 const {expect} = require("chai"); 

 describe("polybius", () => {
     describe(("encode"), ()=> {
        it("it should return a srting", ()=>{
            const actual =typeof(polybius("thinkful", true))
           const expected= typeof("111")
            expect(actual).to.be.equal(expected)
        });
        
            it("Spaces should be maintained throughout.", ()=>{
               const actual = polybius("hello world"); 
               const expected= '3251131343 2543241341'; 
                expect(actual).to.be.equal(expected); 
            });

            it("Capital letters can be ignored.", ()=>{
                const actual = polybius("HELLO WORLD"); 
                const expected= '3251131343 2543241341'; 
                 expect(actual).to.be.equal(expected); 
             });
          
     });
   
     describe(("decode"), ()=> {
        it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.", ()=>{
            const actual = polybius("112212 2", false)
            expect(actual).to.be.false
        });
        it("Spaces should be maintained throughout.", ()=>{
            const actual = polybius('3251131343 2543241341', false ); 
            const expected= "hello world"; 
             expect(actual).to.be.equal(expected); 
         });

        it("when 42 is present , both letters I and J  should somehow be shown.", ()=>{
            const actual = polybius("4432423352125413", false); //> "th(i/j)nkful
            
             expect(actual).to.include("i" , "j"); 
         });

     });
})