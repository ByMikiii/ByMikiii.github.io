
    document.getElementById("demo").onclick = function() {myFunction()};
    let x = 0;
    
    function myFunction() {
    var someVarName = localStorage.getItem(x);
      x= x + 1;
      document.getElementById("text").innerHTML = x;
    }
