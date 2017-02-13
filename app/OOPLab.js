/*
  OOP using a MobilePhone as a real-world problem using OOP principles
*/

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
    return "Making a call with " + this.name + " " + this.model;
  }
  
  MobilePhone.prototype.addContact = function(contact){
    var newContact = contact;
    return newContact;
  }
}
