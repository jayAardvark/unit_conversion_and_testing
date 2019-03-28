function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var result2;
    //let input = "23dog";
    //1. try to separate input on whitespace or letter
    //clue: use indexOf to check for whitespace or letter
    //2. store these into array? 
    //regex to target input by letters or whitespace
    let regex1 = /[a-zA-Z]|\s/gm;
    //regex to target input by numbers or whitespace
    let regex2 = /[0-9]|\s/gm;
    //split on the 2 regex
    let splitInput = input.split(regex1);
    let splitInput2 = input.split(regex2);
    //get rid of resulting commas from initial split
    splitInput = splitInput.join("");
    splitInput2 = splitInput2.join("");
    //input number defaults to 1 if there is no input number
    if(splitInput == ""){
      result = '1';
    }else {
      result = splitInput;
    }
 /*
    console.log(result);
    console.log(typeof result);
 */
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    //split on anything NOT letters
    let regex = /[^a-zA-Z]/gm;
    let splitInput = input.split(regex);
    //join without commas
    result = splitInput.join("");
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    //convert initUnit to lowercase then convert
    let initUnitLC = initUnit.toLowerCase();
    if (initUnitLC === 'gal') {
      result = 'l';
    }else if(initUnitLC === 'l'){
      result = 'gal';
    }else if(initUnitLC === 'mi'){
      result = 'km';
    }else if(initUnitLC === 'km'){
      result = 'mi';
    }else if(initUnitLC === 'lbs'){
      result = 'kg';
    }else if(initUnitLC === 'kg'){
      result = 'lbs';
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lToGal = 0.264172;
    const lbsToKg = 0.453592;
    const kgToLbs = 2.20462;
    const miToKm = 1.60934;
    const kmToMi = 0.621371;
    var result;
      //convert initUnit to lowercase then return appropriate conversion number
    let initUnitLC = initUnit.toLowerCase();
    if (initUnitLC === 'gal') {
      result = initNum * galToL;
    }else if(initUnitLC === 'l'){
      result = initNum * lToGal;
    }else if(initUnitLC === 'mi'){
      result = initNum * miToKm;
    }else if(initUnitLC === 'km'){
      result = initNum * kmToMi;
    }else if(initUnitLC === 'lbs'){
      result = initNum * lbsToKg;
    }else if(initUnitLC === 'kg'){
      result = initNum * kgToLbs;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
