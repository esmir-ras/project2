  document.getElementById ("toggle-nav").addEventListener ("click", toggle, false);
  function toggle(){
    toggle = document.getElementById("nav-toggle").checked;
    if(!toggle){
      document.getElementById("nav-toggle").checked = true;
    }else{
      document.getElementById("nav-toggle").checked = false;
    }
  }