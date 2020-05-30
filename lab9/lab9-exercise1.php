<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//exercise 1-9
 echo date("l, F S, o G:i:s")  . "<hr/>";
 //exercise 1-10
 $remaining = 365 - date("z");
 echo "Exercise 1-10: ";
 echo "There are ". $remaining . " days left in the year";
 echo "<hr/>";
 //exercise 1-11
 echo "Exercise 1-11: ";
 $remaining = 365 - date("z") + date("L");
 echo "There are ". $remaining . " days left in the year";
?>
</body>
</html>