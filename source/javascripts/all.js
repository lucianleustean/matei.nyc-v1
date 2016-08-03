// Scroll effect on navigation
function animate(elem, style, unit, from, to, time, prop) {
    if (!elem) return;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1, (new Date().getTime()-start)/time);
            if (prop) {
                elem[style] = (from+step*(to-from))+unit;
            } else {
                elem.style[style] = (from+step*(to-from))+unit;
            }
            if( step == 1) clearInterval(timer);
        }, 1);
    elem.style[style] = from+unit;
}

window.onload = function () {
    var target = document.getElementById("container");
    animate(document.body, "scrollTop", "", 0, target.offsetTop, 500, true);
};

// background-image on mouse over navigation
var navUrls = document.getElementsByClassName("nav");

for (var i = 0; i < navUrls.length; i++) {
    navUrls[i].addEventListener("mouseover", mouseOver, false);
    navUrls[i].addEventListener("mouseout", mouseOut, false);
}

function mouseOver (e) {
    var className = e.target.attributes.data.value;
    document.getElementById("header").classList.add("hovered");
    document.getElementById("header").setAttribute("style", "background-image: url('/images/intro/" + className + ".jpg');");
}

function mouseOut (e) {
  var className = e.target.attributes.data.value;
  document.getElementById("header").classList.remove("hovered");
  document.getElementById("header").removeAttribute("style", "background-image: url('/images/intro/" + className + ".jpg');");
}
