(function scrolltitle(text){
    document.title = text;
    setTimeout(function(){
    scrolltitle(text.substr(3) + text.substr(0, 3));
}, 500);
}("who really is gamerjimjam and why is he so ass at coding?"));

(function rainbowtext(){
    var colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8F00FF"];
    var i = 0;
    setInterval(function(){
        document.getElementById("rainbow").style.color = colors[i];
        i++;
        if(i >= colors.length) i = 0;
    }, 500);
}());
// i pray to god that this works