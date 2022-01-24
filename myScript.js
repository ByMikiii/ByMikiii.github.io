   var number = 0;
   var pnumber = 0;

    
    function myFunction() {
      localStorage.setItem('number', pnumber);
      number+= 1; 
      pnumber = localStorage.getItem(number);
      document.getElementById("cislo").innerHTML = number;
    }

