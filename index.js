(function scrolltitle(text){
    document.title = text;
    setTimeout(function(){
    scrolltitle(text.substr(3) + text.substr(0, 3));
}, 500);
}("who really is gamerjimjam and why is he so ass at coding?"));


var facts = ["every second we are inching closer to death","AMONG US???","im bored","i shouldve gotten an ai to generate facts","totally tubular dude 🤙","facts dont care about your feelings"]

(function fact(){
    var random = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").innerHTML = facts[random];
    setTimeout(function(){
    fact();
}, 5000);
}());