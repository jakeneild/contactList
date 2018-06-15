const domBuilder = function(frag){
    document.getElementById("empty").appendChild(frag);
}

module.exports = domBuilder;