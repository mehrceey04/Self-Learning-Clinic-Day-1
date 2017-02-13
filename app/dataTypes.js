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