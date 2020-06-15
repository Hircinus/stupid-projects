window.onbeforeunload = clone();
  function clone() {
    clone = window.open("clone", "clone");
    document.clone.write("<script src=''></script>");
  }
