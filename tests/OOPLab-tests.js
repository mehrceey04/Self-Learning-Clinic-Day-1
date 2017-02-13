'use strict'

var MobilePhone = require('../app/OOPLab.js');
var SmartPhone = require('../app/OOPLab.js');
describe("MobilePhone class, creates a mobile phone, make a call", function() {
    it("The mobile phone should be a type of `object`, and an instance of the `MobilePhone` class", function() {
      var nokia = new MobilePhone('Nokia');
      expect(typeof nokia).toEqual(typeof {});
      expect(nokia instanceof MobilePhone).toEqual(true);
    });

    it("The mobile phone name and model should be a property of the phone", function() {
      var innjoo = new MobilePhone('Innjoo', 'Innjoo T1');
      expect(innjoo.name).toEqual('Innjoo');
      expect(innjoo.model).toEqual('Innjoo T1');
    });

    it("The mobile phone should be called 'General' if no name is passed as a parameter", function() {
      var myPhone = new MobilePhone();
      expect(myPhone.name).toEqual('MobilePhone');
      expect(myPhone.model).toEqual('Unknown model');
    });

    it("should return undefined when trying to access a private variable", function(){
      var nokia = new MobilePhone("Nokia")
      expect(nokia.hidden).toEqual(undefined)
    });

    it("should be able to make a call", function(){
      var iPhone = new MobilePhone("iPhone")
      expect(iPhone.call()).toEqual("Making a call")
    })

    it("should return undefined when trying to access a private variable", function(){
      var itel = new SmartPhone("Itel")
      expect(itel.hidden).toEqual(undefined)
    })

    it("should be able to add a contact", function(){
      var infinix = new SmartPhone("Infinix")
      var contact = {name: "Adebisi", number: "181818118"}
      expect(infinix.addContact(contact)).toEqual(contact)
    })

    it("should be able to send a message", function(){
      var iPhone = new MobilePhone("iPhone")
      expect(iPhone.message()).toEqual("Sending a message")
    })

    it("should be able to add a contact", function(){
      var innjoo = new MobilePhone("Innjoo")
      var contact = {name: "Mehrceey", number: "081313608"}
      expect(innjoo.addContact(contact)).toEqual(contact)
    })

    it("should return a msg for canBrowse()", function(){
      var mine = new SmartPhone("mine");
      expect(mine.canBrowse()).toEqual("I can browse")
    })

    it("should return a msg for canBrowse()", function(){
      var mine = new SmartPhone("mine");
      expect(mine.call()).toEqual("Making a call with my mine phone")
    })

  });
