   var number = 0;

   /*
    function myFunction() {
      number+= 1;
      document.getElementById("cislo").innerHTML = number;
      
      localStorage.setItem("cislo", storedValue);
      var storedValue = localStorage.getItem("cislo");
      console.log(storedValue);
    }
    */
    document.getElementById("clicks").innerHTML = localStorage.clicks;
    
    function clickCounter(){
      if (localStorage.hasOwnProperty('clicks')) {
        localStorage.clicks = Number(localStorage.clicks)+1;
    } else {
        localStorage.clicks = 0;
    }
    document.getElementById("clicks").innerHTML = localStorage.clicks;
    }