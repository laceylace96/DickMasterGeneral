<?php
$film = $_POST["film"];
$cinema = $_POST["cinema"];

if ($film == "FO")
{
$array = array('Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
}
else if ($film =="CH")
{
	if ($cinema == "maxima")
	{
	$array = array('Saturday', 'Sunday');
	}
	else if ($cinema == "rivola")
	{
	$array = array('Wednesday', 'Thursday', 'Friday');
	}
}
else if ($film == "AC" && $cinema == "rivola")
{
$array = array('Saturday', 'Sunday');
}
else
{
$array = array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
}

echo 'Day<br />';
echo '<select id="day" name="day" required>';
echo '<option value="">Select Day</option>';
for ($i = 0; $i < count($array); $i++) 
{
	echo '<option value="' . $array[$i] . '">' ;
	echo $array[$i] ;
	echo '</option>';
}
echo '</select>';
?>