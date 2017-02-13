/*
   * dataTypes(value)
   * returns length of a string, if value is a string
   * returns a msg if value is null or undefined 
   * returns true, if value is a function
   * returns true, if true is a boolean and vice-versa
   * returns a msg, if value is a number
   * returns the 3rd index of an object whose length is greater than or equal to 3, 
      otherwise it returns 'undefined'
*/
module.exports = {
  dataTypes : function(value) {
    if(typeof(value) === 'string') {
      return value.length;
    }
    else if((value === null) || typeof(value) === 'undefined') {
      return 'no value';
    }
    else if(typeof(value) === 'function') {
    return value(true);  
    } 
    else if(typeof(value) === 'boolean') {
      return value;
    }
    else if(typeof(value) === 'number') {
      if(value < 100) return 'less than 100';
      else if(value === 100) return 'equal to 100';
      else if(value > 100) return 'more than 100';
    }
    else if(typeof(value) === 'object' && value.length >= 3) {
      return value[2];
    } else { 
      return 'undefined';
    }
  }
}