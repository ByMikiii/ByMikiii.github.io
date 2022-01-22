
    document.getElementById("demo").onclick = function() {myFunction()};
    let x = 0;
    
    function myFunction() {
      x= x + 1;
      document.getElementById("text").innerHTML = x;
    }
