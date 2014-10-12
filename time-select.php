<?php
$film = $_POST["film"];
$cinema = $_POST["cinema"];

if ($cinema == "rivola")
{
	if ($film == "CH")
	{
	$array = array('12pm');
	}
	else if ($film == "FO")
	{
	$array = array('7pm');
	}
	else if ($film == "AC")
	{
	$array = array('4pm');
	}
}

else if ($cinema == "maxima")
{
	if ($film == "CH")
	{
	$array = array('3pm');
	}
	else if ($film == "RC")
	{
	$array = array('6pm');
	}
	else if ($film == "AC")
	{
	$array = array('9pm');
	}
}

echo 'Time<br />';
echo '<select id="time" name="time" required>';
echo '<option value="">Select Day</option>';
for ($i = 0; $i < count($array); $i++) 
{
	echo '<option value="' . $array[$i] . '">' ;
	echo $array[$i] ;
	echo '</option>';
}
echo '</select>';
echo '<br />';
echo '<input type="submit">';
?>