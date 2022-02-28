
      <?php
          if ($_POST['username'] == "bymikiii" && $_POST['password'] == "1234"){
            echo "Uspesne prihlaseny!";
          } else {
            echo "Nespravne meno alebo heslo!";
            header('Location: Login.php');
          }
      ?>