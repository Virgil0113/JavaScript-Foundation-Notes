function showPic(whichpic){
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  var text= whichpic.getAttribute("title");
  var description = document.getElementById("description");
  description.firstChild.nodeValue = text;
}

function prepareGallery() {
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for (var i=0; i < links.length; i++) {
     links[i].onclick = function() {
        showPic(this);
        return false;
     }
  }
}

function countBody() {
  var body_element= document.getElementsByTagName("body")[0];
  alert(body_element.childNodes.length);  
}

window.onload = function() {
  prepareGallery();
  countBody();
}

/*function addLoadEvent(func) {
  var oldload = window.onload;
  if (typeof window.onload != 'function') {
     window.onload = func;
  } else {
     window.onload = function() {
       oldonload();
       func();
    }
  }
}

addLoadEvent(prepareGallery()); */