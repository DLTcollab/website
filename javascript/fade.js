var intro_count = 0;

var hero_div = document.getElementById("hero");

var introductions = document.getElementsByClassName("introduction");

var features_div = document.getElementById("features");
var feature_item = document.getElementsByClassName("feature-item");
var feature_intro_offset = features_div.offsetTop - hero_div.offsetHeight;
var feature_item_offset = (feature_intro_offset) + introductions[intro_count++].offsetHeight;
var feature_count = 0;

var works_div = document.getElementById('works');
var works_item = document.getElementsByClassName("works-item");
var works_intro_offset = works_div.offsetTop - hero_div.offsetHeight;
var works_item_offset = works_intro_offset + introductions[intro_count++].offsetHeight;
var works_count = 0;


var members_div = document.getElementById("members");
var member_item = document.getElementsByClassName("member-item"); 
var member_intro_offset = members_div.offsetTop - hero_div.offsetHeight;
var member_item_offset = (member_intro_offset) + introductions[intro_count++].offsetHeight;
var member_count = 0;

// var partners_div = document.getElementById('partners');
// var partners_item = document.getElementsByClassName("partners-item");
// var partners_intro_offset = partners_div.offsetTop - hero_div.offsetHeight;
// var partners_item_offset = partners_intro_offset + introductions[intro_count++].offsetHeight;
// var partners_count = 0;

var c2a_div = document.getElementById("c2a");
var c2a_item = document.getElementsByClassName("c2a-item");
var c2a_item_center = document.getElementsByClassName("c2a-item")[1];
var c2a_logo = document.getElementById("action-logo");
var c2a_btn = document.getElementById("herobtn2");
var c2a_intro_offset = c2a_div.offsetTop - hero_div.offsetHeight;
var c2a_item_offset = (c2a_intro_offset) + introductions[intro_count++].offsetHeight;
var c2a_count = 0;

intro_count = 0;

window.onscroll = function () {
    if (feature_count == 0 && (window.scrollY > feature_intro_offset)) {
        introductions[intro_count++].style.opacity = 1;
        feature_count++;
    }
    if (feature_count == 1 && (window.scrollY > feature_item_offset)) {
        for (var i = 0; i < feature_item.length; ++i) {
            feature_item[i].style.transitionDelay = "0.5s";
            feature_item[i].style.opacity = 1;
        }
        feature_count++;
    }
    if (works_count == 0 && (window.scrollY > works_intro_offset)) {
        introductions[intro_count++].style.opacity = 1;
        works_count++;
    }
    if (works_count == 1 && (window.scrollY > works_item_offset)) {
        var works_delay = 0;
        for (var i = 0; i < works_item.length; ++i, works_delay += 0.3) {
            works_item[i].style.transitionDelay = works_delay + "s";
            works_item[i].style.opacity = 1;
        }
        works_count++;
    }
    if (member_count == 0 && (window.scrollY > member_intro_offset)) {
        introductions[intro_count++].style.opacity = 1;
        member_count++;
    }
    if (member_count == 1 && (window.scrollY > member_item_offset)) {
        var member_delay = 0;
        // introductions[intro_count++].style.opacity = 1;
        for (var i = 0; i < member_item.length; ++i, member_delay += 0.3) {
            member_item[i].style.transitionDelay = member_delay + "s";
            member_item[i].style.opacity = 1;
        }
        member_count++;
    }
    // if (partners_count == 0 && (window.scrollY > partners_intro_offset)) {
    //     introductions[intro_count++].style.opacity = 1;
    //     partners_count++;
    // }
    // if (partners_count == 1 && (window.scrollY > partners_item_offset)) {
    //     var partners_delay = 0;
    //     for (var i = 0; i < partners_item.length; ++i, partners_delay += 0.3) {
    //         partners_item[i].style.transitionDelay = partners_delay + "s";
    //         partners_item[i].style.opacity = 1;
    //     }
    //     partners_count++;
    // }
    if (c2a_count == 0 && (window.scrollY > c2a_intro_offset)) {
        introductions[intro_count++].style.opacity = 1;
        c2a_count++;
    }
    if (c2a_count == 1 && (window.scrollY > c2a_item_offset)) {
        var c2a_delay = 0;
        for (var i = 0; i < c2a_item.length; ++i, c2a_delay += 0.3) {
            c2a_item[i].style.transitionDelay = c2a_delay + "s";
            c2a_item[i].style.opacity = 1;
        }
        c2a_count++;
        c2a_btn.style.transform = "scale(1.2)";
        var myVar = setTimeout(shrink, 800);
        function shrink() {
            c2a_btn.style.transform = "scale(1)";
        }
    }
}