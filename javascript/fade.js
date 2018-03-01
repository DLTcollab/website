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
var c2a_item = document.getElementsByClassName("c2a-item"); //c2a_item[0] is introduction.
var c2a_item_right = document.getElementsByClassName("c2a-item-right")[0];
var c2a_logo = document.getElementById("action-logo");
var c2a_btn = document.getElementById("herobtn2");
var c2a_intro_offset = c2a_div.offsetTop - hero_div.offsetHeight;
var c2a_item_offset = (c2a_div.offsetTop - hero_div.offsetHeight) + c2a_item[0].offsetHeight;

var c2a_count = 0;

window.onscroll = function () {
    if (feature_count == 0 && (window.scrollY > feature_intro_offset)) {
        feature_item[0].style.opacity = 1;
        feature_count++;
    }
    if (feature_count == 1 && (window.scrollY > feature_item_offset)) {
        for (var i = 1; i < feature_item.length; ++i) {
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
        var member_delay = 0;
        for (var i = 1; i < member_item.length; ++i, member_delay += 0.3) {
            member_item[i].style.transitionDelay = member_delay + "s";
            member_item[i].style.opacity = 1;
        }
        member_count++;
    }
    if (c2a_count == 0 && (window.scrollY > c2a_intro_offset)) {
        c2a_item[0].style.opacity = 1;
        c2a_count++;
    }
    if (c2a_count == 1 && (window.scrollY > c2a_item_offset)) {
        var c2a_delay = 0;
        for (var i = 1; i < c2a_item.length; ++i, c2a_delay += 0.3) {
            c2a_item[i].style.transitionDelay = c2a_delay + "s";
            c2a_item[i].style.opacity = 1;
        }
        c2a_logo.style.transform = "rotate(360deg)";
        c2a_count++;
        c2a_item_right.style.transitionDelay = c2a_delay + "s";
        c2a_item_right.style.opacity = 1;

    }


}