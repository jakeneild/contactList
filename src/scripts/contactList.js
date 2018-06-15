const contact = require("./contact");
const contactCollection = require("./contactCollection");
const domBuilder = require("./domBuilder");

const contactList = function(){
    document.getElementById("empty").innerHTML = "";
    for(item in contactCollection.contactList){
        domBuilder(contact(contactCollection.contactList[item]));
    }
    console.log("contact List runs")
}

module.exports = contactList;