const contactForm = require("./contactForm");
const contactCollection = require("./contactCollection");
const contactList = require("./contactList");

contactCollection.loadFromLocal();

contactList();

document.getElementById("submit").addEventListener("click", contactForm);