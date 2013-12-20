// ==UserScript==
// @name        Remove Mingle Card Height
// @namespace   mingle
// @description Remove Mingle Card Height
// @include     *
// @version     1
// @grant       none
// ==/UserScript==

setMingleHeight = function(className) {
  elements = document.getElementsByClassName(className)

  for(i = 0; i < elements.length; i++) {
    elements[i].style.height = "auto"
  }
}

fixMingleCardHeight = function() {
  setMingleHeight("card-icon");
  setMingleHeight("card-inner-wrapper");
}

window.onload = fixMingleCardHeight;
setInterval(fixMingleCardHeight, 5000);
