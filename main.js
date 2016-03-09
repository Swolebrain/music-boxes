$(document).ready(function(){
  var notes = {
    c:  document.getElementById("c-note"),
    d:  document.getElementById("d-note"),
    e:  document.getElementById("e-note"),
    f:  document.getElementById("f-note"),
    g:  document.getElementById("g-note"),
    a:  document.getElementById("a-note"),
    b: document.getElementById("b-note")
  };
    $("#instrument").find("div").on("click mouseover", 
                              function(){
      console.log($(this).attr("id"));
      play($(this).attr("id"));
    });
    
    //Question 1: 
    $(document).on("keypress", function(evt){
      console.log(evt.keyCode);
        if (evt.keyCode === 122) play("c");
        else if (evt.keyCode === 120) play("d");
        else if (evt.keyCode === 99) play("e");
        else if (evt.keyCode === 118) play("f");
        else if (evt.keyCode === 98) play("g");
        else if (evt.keyCode === 110) play("a");
        else if (evt.keyCode === 109) play("b");
        
    });
    function play(x){
      notes[x].currentTime = 0;
      notes[x].play();
    }
    
});














