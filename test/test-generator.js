var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('../MultiDimensionalArray.js');
 
describe("mda", function() {
   
  describe('generator_1d', function() {
    
    it('Returns an array with 3 random boolean values when no arguments are given', function() {
      var result = mda.generator_1d();
      
      expect( result ).to.be.a('array');
      result.should.have.length(3);
    });//end of first it

    it("Return a single array with 4 random boolean values when a single argument with value 4 is given", function() {
      var result = mda.generator_1d(4);

      expect( result ).to.be.a('array');
      result.should.have.length(4);
    });//end of second it

    it("Return empty array when an argument is passed in and not a number", function() {
      var result = mda.generator_1d('potato');

      expect( result ).to.be.a('array');
      result.should.have.length(0);

    });//end of third it
  
  }); //end of first describe

  describe("generator_2d", function() {
    
    it("Return an array with 3 values containing 3 arrays with random values when no argument is given", function() {
      var result = mda.generator_2d();

      expect( result ).to.be.a('array');
      result.should.have.length(3);

      result.forEach(function(curr){
        expect( curr ).to.be.a('array');
        curr.should.have.length(3);
      });
    });//end of first it

    it("Return an array with 4 arrays each with 3 values when one arguement is given with a value of 4.", function() {
      var result = mda.generator_2d(4);

      expect( result ).to.be.a('array');
      result.should.have.length(4);

      result.forEach(function(curr){
        expect( curr ).to.be.a('array');
        curr.should.have.length(3);
      });
    });//end of second it

    it("Return an array with 5 arrays with 4 values each, when two arguments with a value of 5 and 4", function() {
      var result = mda.generator_2d(5,4);

      expect( result ).to.be.a('array');
      result.should.have.length(5);

      result.forEach(function(curr){
        expect( curr ).to.be.a('array');
        curr.should.have.length(4);
      });
      
    });//end of seconf it

  }); //end of second describe

});