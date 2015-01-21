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

    it("Return empty array when an argument is passed in and not a number", function() {
      var result = mda.generator_1d('potato');

      expect( result ).to.be.a('array');
      result.should.have.length(0);

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