// ?
(function scrolltitle(text){
    document.title = text;
    setTimeout(function(){
        scrolltitle(text.substr(1) + text.substr(0, 1));
    }, 500);
}("who really is gamerjimjam and why is he so ass at coding?"));