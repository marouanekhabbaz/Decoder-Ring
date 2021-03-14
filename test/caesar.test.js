
const caesar = require("../src/caesar");
 const {expect} = require("chai"); 

describe("caesar", () => {
it("it should return false if shift = O ", ()=>{
    const input="hello everyone";
    const actual =caesar(input, 0 , encode = true) ;
    expect(actual).to.be.false
});

it("it should return false if shift is less than -25 ", ()=>{
    const input="hello everyone";
    const actual =caesar(input, 26 , encode = true) ;
    expect(actual).to.be.false
});
it("it should return false if shift is greater than 25", ()=>{
    const input="hello everyone";
    const actual =caesar(input, -27 , encode = true) ;
    expect(actual).to.be.false
});
it("it should maintain space and symboles  and ignore uppercase" , ()=> {
   const actual = caesar("This is a secret =>message!", 8); 
    const expected= 'bpqa qa i amkzmb =>umaaiom!';
    expect(actual).to.be.equal(expected)
});
it("it should work when shift is a negatif number " , ()=> {
    const actual = caesar("abcde", -1); 
     const expected= 'zabcd';
     expect(actual).to.be.equal(expected)
 });
it("it should working on decoding", ()=> {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false); 
    const expected ='this is a secret message!'
    expect(actual).to.be.equal(expected)
}); 
it(" When decoding it should work when shift is a negatif number " , ()=> {
    const actual = caesar("zabc", -1, false); 
     const expected= 'abcd';
     expect(actual).to.be.equal(expected)
 });
});
