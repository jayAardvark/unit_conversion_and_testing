function ConvertHandler() {
  
  let testSpellOut;
  
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
    let validUnits = ['gal','l','mi','km','lbs','kg'];
    //split on anything NOT letters
    let regex = /[^a-zA-Z]/gm;
    let splitInput = input.split(regex);
    //join without commas
    result = splitInput.join("").toLowerCase();
    //return result if unit is acceptable/valid
    if(validUnits.includes(result)){
      return result;
    }else {
      return false;
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
   
    if(initUnit !== false) {
      if (initUnit === 'gal') {
        result = 'l';
      }else if(initUnit === 'l'){
        result = 'gal';
      }else if(initUnit === 'mi'){
        result = 'km';
      }else if(initUnit === 'km'){
        result = 'mi';
      }else if(initUnit === 'lbs'){
        result = 'kg';
      }else if(initUnit === 'kg'){
        result = 'lbs';
      }
      return result;
    }
  };

  this.spellOutUnit = function(unit) {
    var result;
/*    if(unit === 'gal' || unit.toLowerCase() === 'gallons'){
      result = 'gallons';
    }else if(unit === 'l' || unit.toLowerCase() === 'liters'){
      result = 'liters';
    }    
*/
    if(unit === 'gal'){
      result = 'gallons';
    }else if (unit === 'l'){
      result = 'liters';
    }else if (unit === 'mi'){
      result = 'miles';
    }else if (unit === 'km'){
      result = 'kilometers';
    }else if (unit === 'lbs'){
      result = 'pounds';
    }else if (unit === 'kg'){
      result = 'kilograms';
    }
    
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
    if(initUnit !== false){
      let initUnitLC = initUnit.toLowerCase();
      if (initUnitLC === 'gal') {
        result = initNum * galToL;
      }else if(initUnitLC === 'l'){
        result = initNum * lToGal;
      }else if(initUnitLC === 'mi'){
        result = initNum * miToKm;
        //result = result.toFixed(5);
      }else if(initUnitLC === 'km'){
        result = initNum * kmToMi;
      }else if(initUnitLC === 'lbs'){
        result = initNum * lbsToKg;
      }else if(initUnitLC === 'kg'){
        result = initNum * kgToLbs;
      }
      return result;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    //convert unit abbreviations to whole unit words
    //let roundInit = initNum.toFixed(5);
    //let roundRet = returnNum.toFixed(5);
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    //result = result.toString();
    return result;
  };
  
}

module.exports = ConvertHandler;
