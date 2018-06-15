const contact = function(obj){
    console.log(obj)

    let frag = document.createDocumentFragment();

    let nameP = document.createElement("p");
    nameP.textContent = "Name: " + obj.name;
    frag.appendChild(nameP);

    let numP = document.createElement("p");
    numP.textContent = "Number: " + obj.number;
    frag.appendChild(numP);

    let notesP = document.createElement("p");
    notesP.textContent = "Notes: " + obj.notes;
    frag.appendChild(notesP);

    frag.appendChild(document.createElement("br"));

    return frag;
}


module.exports = contact;