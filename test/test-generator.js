var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('../MultiDimensionalArray.js');
 
describe("mda", function() {
   
  describe('generator_1d', function() {
    
    it("Should be defined as a function", function() {
      expect(mda.generator_1d).to.be.a('function');

    });

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
      expect( result ).to.be.empty();

    });//end of third it
  
  }); //end of first describe

  describe("generator_2d", function() {
    it("Should be defined as a function", function() {
      expect( mda.generator_2d ).to.be.a('function');

    });
    
    it("Return an array with 3 values containing 3 arrays with random values when no argument is given", function() {
      var result = mda.generator_2d();

      expect( result ).to.be.a('array');
      result.should.have.length(3);

      result.forEach(function(curr){
        expect( curr ).to.be.a('array');
        curr.should.have.length(3);

        // curr.forEach(function(value){
        //   expect.value.to.be.a('number');
        //   return value === 0 || value === 1;
        // });
      });
    });//end of first it for generator_2d

    it("Return an array with 4 arrays each with 3 values when one arguement is given with a value of 4.", function() {
      var result = mda.generator_2d(4);

      expect( result ).to.be.a('array');
      result.should.have.length(4);

      result.forEach(function(curr){
        expect( curr ).to.be.a('array');
        curr.should.have.length(3);
      });
    });//end of second it for generator_2d

    it("Return an array with 5 arrays with 4 values each, when two arguments with a value of 5 and 4", function() {
      var result = mda.generator_2d(5,4);

      expect( result ).to.be.a('array');
      result.should.have.length(5);

      result.forEach(function(curr){
        expect( curr ).to.be.a('array');
        curr.should.have.length(4);
      });
      
    });//end of seconf it
  }); //end of second describe for generator_2d

  describe("generator_3d", function() {
    it("Should be defined as a function", function() {
      expect(mda.generator_3d).to.be.a('function');


    });

    it("Return an array with 3 arrays each with 4 arrays and 5 values, when three arguments ", function() {
        var result = mda.generator_3d(3,4,5);

        expect( result ).to.be.a('array');
        result.should.have.length(3);

        result.forEach(function(curr){
          expect( curr ).to.be.a('array');
          curr.should.have.length(4);

          curr.forEach(function(tier3){
            expect( tier3 ).to.be.a('array');
            tier3.should.have.length(5);
          });
        });//end of first forEach

      });//end of first it in generator_3d
  });//end of describe generator_3d

});