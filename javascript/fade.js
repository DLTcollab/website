var hero_div = document.getElementById("hero");

var features_div = document.getElementById("features");
var feature_item = document.getElementsByClassName("feature-item"); //feature_item[0] is introduction.
var feature_intro_offset = features_div.offsetTop - hero_div.offsetHeight;
var feature_item_offset = (features_div.offsetTop - hero_div.offsetHeight) + feature_item[0].offsetHeight;
var feature_count = 0;

var members_div = document.getElementById("members");
var member_item = document.getElementsByClassName("member-item"); //member_item[0] is introduction.
var member_intro_offset = members_div.offsetTop - hero_div.offsetHeight;
var member_item_offset = (members_div.offsetTop - hero_div.offsetHeight) + member_item[0].offsetHeight;
var member_count = 0;

var c2a_div = document.getElementById("c2a");

window.onscroll = function () {
    if (feature_count == 0 && (window.scrollY > feature_intro_offset)) {
        feature_item[0].style.opacity = 1;
        feature_count++;
    }
    if (feature_count == 1 && (window.scrollY > feature_item_offset)) {
        for(var i = 1 ; i < feature_item.length ; ++i){
            feature_item[i].style.transitionDelay = "0.5s";
            feature_item[i].style.opacity = 1;
        }
        feature_count++;
    }
    if (member_count == 0 && (window.scrollY > member_intro_offset)) {
        member_item[0].style.opacity = 1;
        member_count++;
    }
    if (member_count == 1 && (window.scrollY > member_item_offset)) {
        for(var i = 1 ; i < member_item.length ; ++i){
            member_item[i].style.transitionDelay = "0.5s";
            member_item[i].style.opacity = 1;
        }
        member_count++;
    }
    
}