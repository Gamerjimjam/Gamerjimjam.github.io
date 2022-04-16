(function scrolltitle(text){
    document.title = text;
    setTimeout(function(){
    scrolltitle(text.substr(3) + text.substr(0, 3));
}, 500);
}("who really is gamerjimjam and why is he so ass at coding?"));


var facts = ["every second we are inching closer to death","AMONG US???","im bored","i shouldve gotten an ai to generate facts","totally tubular dude 🤙","facts dont care about your feelings"]

// displays random fact every time the page is reloaded
function randomFact() {
    var randomNumber = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").innerHTML = facts[randomNumber];
    // adds scroll frame to the text so it looks cool
    scrolltitle(facts[randomNumber]);
}
// calls function every page reload
randomFact();