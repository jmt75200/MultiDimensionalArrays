var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('../MultiDimensionalArray.js');
 
describe("mda", function() {

  describe("counter", function() {
    it("Return number of truthy values with the mda.counter method with one argument, sample_array. ", function() {
      var result = MultiDimensionalArray.count(sample_array);

        result.reduce(function( curr ){
          expect( curr ).to.be.true();
          
        });
    });

  });// end of describe counter




}); //end of describe mda 
