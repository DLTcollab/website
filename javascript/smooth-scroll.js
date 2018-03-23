function smoothScroll(targetID) {

    var targetPos = document.getElementById(targetID).offsetTop;

    window.scroll({
        top: targetPos,
        left: 0,
        behavior: 'smooth'
    });
}