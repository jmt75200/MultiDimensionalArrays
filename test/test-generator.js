var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('../MultiDimensionalArray.js');
 
describe("mda", function() {
   
  describe('generator_1d', function() {
    
    it('Returns an array with 3 random boolean values', function() {
      var result = mda.generator_1d();
      
      expect( result ).to.be.a('array');
      result.should.have.length(3);
    
    });
  
  }); //end of first describe

  describe("generator_2d", function() {
    
    it("Return a single array with 4 random boolean values", function() {
      var result = mda.generator_2d();

      expect( result ).to.be.a('array');
      result.should.have.length(4);
    });

  });

});