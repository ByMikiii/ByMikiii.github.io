   var number = 0;
   var pnumber = 0;
    
    function myFunction() {
      localStorage.setItem(number, pnumber);
      number+= 1; 
      document.getElementById("text").innerHTML = number;
      pnumber = localStorage.getItem(number);
    }
