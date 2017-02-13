'use strict'

var MobilePhone = require('../app/OOPLab.js');
var SmartPhone = require('../app/OOPLab1.js');

describe("MobilePhone class, creates a mobile phone", function() {
    it("The mobile phone should be a type of `object`, and an instance of the `MobilePhone` class", function() {
      var nokia = new MobilePhone('Nokia');
      expect(typeof nokia).toEqual(typeof {});
      expect(nokia instanceof MobilePhone).toEqual(true);
    });

    it("The mobile phone should be called 'MobilePhone' if no name is passed as a parameter", function() {
      var myPhone = new MobilePhone();
      expect(myPhone.name).toEqual('MobilePhone');
    });

    it("The mobile phone model should be called 'Unknown model' if no model is passed as a parameter", function() {
      var myPhone = new MobilePhone();
      expect(myPhone.model).toEqual('Unknown model');
    });

    it("should return undefined when trying to access a private variable", function(){
      var nokia = new MobilePhone("Nokia", 1600);
      expect(nokia.hidden).toEqual(undefined);
    });

    it("should be able to make a call", function(){
      var itel = new MobilePhone("Itel", 2080);
      expect(itel.call()).toEqual("Making a call with Itel 2080");
    });

    it("should be able to add a contact", function(){
      var mhorse = new MobilePhone("Mhorse")
      var contact = {name: "Mehrceey", number: "081313608"}
      expect(mhorse.addContact(contact)).toEqual(contact)
    });

  });

describe("SmartPhone class, creates a smart phone", function() {
    it("The smart phone should be a type of `object`, and an instance of the `SmartPhone` class", function() {
      var nokiaLumia = new SmartPhone('Nokia Lumia', 5500);
      expect(typeof nokiaLumia).toEqual(typeof {});
      expect(nokiaLumia instanceof SmartPhone).toEqual(true);
    });

    it("The smart phone name and model should be a property of the phone", function() {
      var innjoo = new MobilePhone('Innjoo', 'T1');
      expect(innjoo.name).toEqual('Innjoo');
      expect(innjoo.model).toEqual('T1');
    });

    it("The smart phone name to be a property of the phone", function() {
      var nokiaLumia = new SmartPhone('Nokia Lumia', 5500);
      expect(nokiaLumia.name).toEqual('Nokia Lumia');
    });

    it("should return undefined when trying to access a private variable, and true as an instance of the `SmartPhone` class", function(){
      var itel = new SmartPhone("Itel")
      expect(itel.hidden).toEqual(undefined);
      expect(itel instanceof SmartPhone).toEqual(true);
    });

    it("should be able to add a contact", function(){
      var infinix = new SmartPhone("Infinix")
      var contact = {name: "Adebisi", number: "181818118"}
      expect(infinix.addContact(contact)).toEqual(contact)
    });

    it("should be able to send a message", function(){
      var iPhone = new SmartPhone("iPhone")
      expect(iPhone.message()).toEqual("Sending a voice message on my iPhone")
    });

    it("should return a msg for canBrowse()", function(){
      var innjoo = new SmartPhone("Innjoo", "T1");
      expect(innjoo.canBrowse()).toEqual("My Innjoo T1 can browse")
    });

    it("should return a msg for call()", function(){
      var innjoo = new SmartPhone("Innjoo");
      expect(innjoo.call()).toEqual("Making a BBM call with my Innjoo phone")
    });

    it("should return a msg for dualCam()", function(){
      var tecno = new SmartPhone("Tecno", "C8");
      expect(tecno.dualCam()).toEqual("My Tecno C8 has a dual camera")
    });
});