function smoothScroll(source, targetID) {

    var targetPos = document.getElementById(targetID).offsetTop;
    var interestIn = document.getElementById('interest-in');

    interestIn.setAttribute("value",source);

    window.scroll({
        top: targetPos,
        left: 0,
        behavior: 'smooth'
    });
}