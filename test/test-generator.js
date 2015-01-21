var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('../MultiDimensionalArray.js');
 
describe("MultiDimensionalArray", function() { 
  describe('Generator', function() {
    
    it('should do something', function() {
      
      var something = "some value";
      
      expect(something).to.be.a('string');
      something.should.equal('some value');
    
    });

    it("should return a single array with 3 boolean values", function() {
      var results = mda.generator();

      results.should.be.an('array');
      results.should.have.length(3);
    });

  }); // desc('Generate Funtion')
});