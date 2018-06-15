const contactCollection = require("./contactCollection");
const domBuilder = require("./domBuilder");
const contactList = require("./contactList")

const contactForm = function(){
    let nameI = document.getElementById("name").value;
    let numberI = document.getElementById("number").value;
    let notesI = document.getElementById("notes").value;

    if(nameI.length > 0 && numberI.length > 0 && notesI.length > 0){
        let contact = {}
        contact.name = nameI;
        contact.number = numberI;
        contact.notes = notesI;
        console.log("save contact: ", contact)
        contactCollection.save(contact);
        contactList();
        console.log("contact form runs")
    } else {
        alert("Please fill out all fields")
    }
}

module.exports = contactForm;