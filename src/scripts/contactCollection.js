const contactCollection = {
    loadFromLocal: function(){
        console.log("scope test: ",contactCollection.contactList)
        let databaseString = localStorage.getItem("contactList");
        console.log(databaseString)
        console.log(JSON.parse(databaseString))
        contactCollection.contactList = JSON.parse(databaseString);
    },
    contactList: {
        HeatherHalterman: {
            name: "Heather Halterman",
            number: 66666666,
            notes: "Likes cookies and back rubs"
        },
        JesusChavez: {
            name: "Jesus Chavez",
            number: 1234567,
            notes: "Likes tacos and cumbia"
        },
        JeremyTillen: {
            name: "Jeremy Tillen",
            number: 9876545,
            notes: "Computer programmer"
        }
    },
    load: function(){
        return contactCollection.contactList;
    },
    save: function(obj){
        if(obj !== undefined){

            let contacts = contactCollection.load();
            contacts[obj.name.split(" ").join("")] = obj;

            console.log("contacts before save: ", contacts)

            let stringContact = JSON.stringify(contacts);
            localStorage.setItem("contactList", stringContact)
            contactCollection.loadFromLocal();

            console.log("Contacts after save: ", contactCollection.contactList)
        } else {
            let stringContact = JSON.stringify(contactCollection.contactList);
            localStorage.setItem("contactList", stringContact)
            contactCollection.loadFromLocal();
            console.log("no new contacts saved")
        }


        console.log("Save runs")
    }
}

module.exports = contactCollection;