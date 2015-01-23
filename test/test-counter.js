var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('../MultiDimensionalArray.js');
 
describe("mda", function() {

  describe("counter", function() {
    
    it("Should be defined as a function", function() {
      expect(mda.count).to.be.a('function');
      expect(mda.count).to.be.instanceOf(Function);

    });

    it("Should return number of truthy values in sample_array.", function() {
      
      var sample_array = [1,0,0,1,0,0,0,0,1];
      var result = mda.count(sample_array);

      expect( results ).to.equal(3);
        
    });

  });// end of describe counter




}); //end of describe mda 
