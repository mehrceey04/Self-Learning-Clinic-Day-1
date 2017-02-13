module.exports = 
function MobilePhone(name, model){
  if(name === undefined){
    this.name = "MobilePhone";
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

  //Encapsulation: Private methods(hidden from the user)
  var hidden = function(){
    return "some specification hidden from user";
  }

  MobilePhone.prototype.message = function(){
    return "Sending a message";
  }

  MobilePhone.prototype.call = function(){
    return "Making a call";
  }
  
  MobilePhone.prototype.addContact = function(contact){
    var newContact = contact;
    return newContact;
  }
 
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

    //Inheritance: SmartPhone inherits properties and methods from the MobilePhone class
    SmartPhone.prototype = new MobilePhone()

    //Prototypes for the SmartPhone class
    SmartPhone.prototype.dualCam = function(){
      return "I have dualCam";
    }
    SmartPhone.prototype.canBrowse = function(){
      return "I can browse";
    }

    //Polymorphism: Overwriting call and message method of the Super class 
    SmartPhone.prototype.call = function(){
      return "Making a BBM call with my " + this.name + " phone";
    }
    SmartPhone.prototype.message = function(){
    return "Sending a voice message" + this.name + " phone";
  }
  } 
}