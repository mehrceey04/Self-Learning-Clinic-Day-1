/*
  OOP using a MobilePhone and SmartPhone as a real-world problem using OOP principles
*/
var MobilePhone = require('../app/OOPLab.js'); //requires the MobilePhone class
function SmartPhone(name, model){
  if(name === undefined){
  	this.name = "SmartPhone";
  }
  else{
  	this.name = name;
  }
  if(model === undefined){
    this.model = "Unknown model"; 
  }
  else{
    this.model = model;
   }
}
//Inheritance: SmartPhone inherits properties and methods from the MobilePhone class
SmartPhone.prototype = new MobilePhone()

//Prototypes for the SmartPhone class
SmartPhone.prototype.dualCam = function(){
    return "My " + this.name + " " + this.model + " has a dual camera";
}
SmartPhone.prototype.canBrowse = function(){
    return "My " + this.name + " " + this.model + " can browse";
}

//Polymorphism: Overwrites call and message method of the Super class 
SmartPhone.prototype.call = function(){
    return "Making a BBM call with my " + this.name + " phone";
}
SmartPhone.prototype.message = function(){
    return "Sending a voice message on my " + this.name;
} 
module.exports = SmartPhone;