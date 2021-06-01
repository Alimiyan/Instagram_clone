function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function call(id){
    var el = document.getElementById(id);
    el.style.visibility= 'visible';
}