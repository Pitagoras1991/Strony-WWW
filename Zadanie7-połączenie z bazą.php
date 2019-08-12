<html>
<head>
 	<title>Baza</title>
</head>
 <body>


<?php

$connection = @mysql_connect('localhost', 'kacper1991', 'Arsenal1991'); //połączenie z bazą

	$db = @mysql_select_db('kacper1991', $connection);

if($_POST['button']=='OK')
{
	$pomoc1= $_POST['Imie'];
	$pomoc2= $_POST['Nazwisko'];
$sql="insert into Tabela1(Imie,Nazwisko) values('$pomoc1','$pomoc2')";
$wynik2=mysql_query($sql)or die(mysql_error());
}

if($_POST['button']=='Usuń')
{
	$pomoc3=$_POST['ukryte'];
	$sql="delete from Tabela1 where(ID = '$pomoc3')";
	$wykonaj=mysql_query($sql);
}	
	
$sql="SELECT ID, Imie, Nazwisko FROM Tabela1";
$wynik=mysql_query($sql); 
while($linia=mysql_fetch_array($wynik))
{ 

	$pomoc = $linia['ID'];
	echo "<form method='post'>";
    echo "<input type='hidden' value='$pomoc' name='ukryte'>";
	echo "<input type='submit' name='button' value='Usuń'>";
	echo $linia['Imie'].' '.$linia['Nazwisko'];	
	echo "</form>";
}	

echo "<form method='post'>";
    echo "<input type='text' name='Imie'>";
	echo "<input type='text' name='Nazwisko'>";
	echo "<input type='submit' value='OK' name='button'>";
	echo "</form>";

	?>
 
</body>
</html>
