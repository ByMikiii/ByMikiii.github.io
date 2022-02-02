<!DOCTYPE html>
<html>
<head>
    <meta charset = "utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="loginstyles.css">
<title>Login ByMikiii</title>
<link rel="icon" href="Images/icon.png" type="icon"/>

<nav> 
   <div class="header">

<ul>
    <li><a class="navbar-brand" href="index.html">
    <img src="Images/icon.png" alt="" class="logo">
    </a></li>
    <li><a href="index.html">Home</a></li>
    <li><a href="News.html">News</a></li>
    <li><a href="Contact.html">Contact</a></li>
    <li><a href="About.html">About</a></li>
    <li style="float:right"> <a href="Register.html">Register</a></li>
    <li style="float:right"> <a href="Login.php">Login</a></li>
</ul></div> 

</head>
<body>

<a href="https://twitter.com/ByMikiiii">
<img src="Images/twitter.png" alt="Twitter" class="twitter"></a>

<a href="https://www.youtube.com/channel/UCbcZJKDoKmS1zkli0LreEDQ">
<img src="Images/yt.png" alt="Youtube" class=youtube></a>

<a href="https://www.instagram.com/bymikiii/">
<img src="Images/ig.png" alt="Instagram" class=instagram >
</a>

<a href="https://www.twitch.tv/bymikiii">
<img src="Images/twitch.png" alt="Twitch" class= twitch>
</a>

<div class="center">

  <h1> Login </h1>

  <form method="POST" action = "login-script.php">
    
      <div class="txt_field">
        <input type="text" 
        name="username" 
        placeholder="Username"
        required>
    </div>
    <div class="txt_field">
        <input type="password" 
        name="password" 
        placeholder="Password"
        required>
    </div>
  
    <div class="pass"> <a href="Login.html">Forgot Password?</a></div>
    
    <div class="btn">
     <button type="submit">Login</button> 
    </div>
  
    <div class="member">
        <p> Not a member? <a href="Register.html"> Register  </a></p>
    </div>
      
  </form>
    </div>

</body>
</html>