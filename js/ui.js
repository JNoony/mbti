function htmlChange(){
    document.body.innerHTML = '<section class="survey" include-mbti="sub.html"></section>'
    includeHTML();
}

function nextPage(target){
    var parent = target.parentNode.parentNode;
    var next = parent.nextSibling.nextSibling;
    if( next === undefined || next === null ) return false;
    window.scrollTo({ top: next.offsetTop-100, behavior: "smooth" });
}

function prevPage(target){
    var parent = target.parentNode.parentNode;
    var prev = parent.previousSibling.previousSibling;
    if( prev === undefined || prev === null ) return false;
    window.scrollTo({ top: prev.offsetTop-100, behavior: "smooth" });
}