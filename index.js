(function scrolltitle(text){
    document.title = text;
    setTimeout(function(){
    scrolltitle(text.substr(3) + text.substr(0, 3));
}, 500);
}("who really is gamerjimjam and why is he so ass at coding?"));


var facts = ["every second we are inching closer to death","AMONG US???","im bored","i shouldve gotten an ai to generate facts","totally tubular dude 🤙","facts dont care about your feelings"]

(function displayfctwhenbutton(text){
    document.getElementBYId("button").onclick = function(){
        // makes fact appear word by word
        var i = 0;
        var txt = facts[i];
        var speed = 50;
        var x = setInterval(function(){
            if(i < facts.length){
                document.getElementById("fact").innerHTML += txt.charAt(i);
                i++;
            }
            else{
                clearInterval(x);
            }
        }, speed);
    }
}());

//mashallah inshalla ya khalil