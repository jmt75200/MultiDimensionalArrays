module.exports = {

  generator_1d : function (tier1){
    //should return new array
    var newArray = [];

    //if tier1 is undefined = 3
    if (tier1 === undefined){
      tier1 = 3;
    }

    //if tier1/potato is a string = empty array
    if (typeof tier1 !== 'number'){
      tier1 = 0;

    }else{
     
      //generate random boolean values with tier1
      for (var i = 0; i < tier1; i++){
        random = Math.random();
        newArray.push(Math.round(random));
      }
    }
    return newArray;

  },

  generator_2d : function (tier1, tier2){
    var newArray = [];

    //returns an array with 3 arrays with 3 values each with no argument
    if (tier1 === undefined){
      tier1 = 3;
    } 
    
    if (tier2 === undefined){
      tier2 = 3;
    }

      //returns tier1 arrays with tier2 values
      //loops new arrays based on tier1 parameter with generator_1d loops to return arrays with values based on tier2 parameters
      for (var i = 0; i < tier1; i++){
        newArray.push(this.generator_1d(tier2));
      }
      
      //return array filled with multiple dimensions of arrays
      return newArray;
    
  
  },

  generator_3d : function (tier1, tier2, tier3){
    var newArray = [];

    //if no arguments are passed return default to 3
    if (tier1 === undefined){
      tier1 = 3;
    }

    if (tier2 === undefined){
      tier2 = 3;
    }

    if (tier3 === undefined){
      tier3 = 3;
    }

    //returns tier1 arrays with tier2 arrays with tier3 values
    //returns new array with deeper dimensions based on gen_2d and gen_1d loops passing tier2 
    for (var i = 0; i < tier1; i++){ 
      newArray.push(this.generator_2d(tier2, tier3));
    }

    return newArray;

  },

  count : function (sample_array){

  

  }


};
