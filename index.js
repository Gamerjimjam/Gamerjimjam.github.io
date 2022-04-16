(function scrolltitle(text){
    document.title = text;
    setTimeout(function(){
    scrolltitle(text.substr(3) + text.substr(0, 3));
}, 500);
}("who really is gamerjimjam and why is he so ass at coding?"));


var facts = ["every second we are inching closer to death","AMONG US???","im bored","i shouldve gotten an ai to generate facts","totally tubular dude 🤙","facts dont care about your feelings"]

// displays random fact every 5 seconds
// when every fact is displayed it enters word by word



// displays random fact every 5 seconds
// when every fact is displayed it enters word by word

fact_displayer = () => {
    //I added this line to make sure #fact is empty before I overwrite its content
    document.getElementById("fact").innerHTML='';
  
    var fact = facts[Math.floor(Math.random() * facts.length)];
  
    var i = 8;
  
    var timer = setInterval(function() {
      document.getElementById("fact").innerHTML += fact[i];
      i++;
  
      if (i >= fact.length) {
  
        clearInterval(timer);
  
        setTimeout(() => {
          document.getElementById("fact").innerHTML = "";
          setTimeout(() => {
            scrolltitle(fact);
         }, 1000);
        }, 1000);
      }
    }, 100);
  }
