<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Bloo-Roo Pictures | Tickets</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
	<script src = "scripts/jquery-1.11.1.js"></script>
	<script src = "scripts/booking.js"></script>
	<style>
	.content
	{
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	}
	
	#info_box
	{
	order: 1;
	margin-right:15px;
	flex-basis:250px;
	background-color:black;
	border-radius: 25px;
	padding: 15px;
	flex-grow:1;
	}
	
	#book_form
	{
	order: 2;
	margin-right:15px;
	flex-basis:300px;
	background-color:black;
	border-radius: 25px;
	padding: 15px;
	flex-grow:1;
	}
	
	#movie_info
	{
	order: 3;
	flex-basis:400px;
	flex-grow:1;
	background-color:black;
	border-radius: 25px;
	padding: 15px;
	}
	
	#contact
	{
	padding:0px;
	}
	
	#toggle_buttons
	{
	text-align:center;
	}
	
	.info_table
	 {
	    border-collapse:collapse;
		border:2px solid #333;
		border-color: white;
	 }

	.info_table th, .info_table td
	  {
		border:2px solid #333;
		padding:10px 15px;
		border-color: white;
	  }
	  
	.MS-image
		{
		float:left;
		padding-right:15px;
		}
	
	.MS-rating img
		{
		display:block;
		padding-bottom:5px;
		}
	
	</style>
  </head>

  <body onload="checkFilm()">

    <?php 
	include('modules/header.html');
	?>
	
    <?php 
	include('modules/navigation.html');
	?>

    <main>
	<div id="toggle_buttons">
	<button type="button" id="schedule_toggle" onclick="showHideSchedule()" value="hidden">Show Schedule</button>
	<button type="button" id="pricing_toggle" onclick="showHidePricing()" value="hidden">Show Pricing</button>
	</div>
	<div id="schedule_table" hidden>
		<table class="info_table" style="width:100%">
  <tr>
    <th>Cinema</th>
    <th>Mon-Tue</th> 
    <th>Wed-Fri</th>
    <th> Sat-Sun</th>
  </tr>
  <tr>
    <td>Maxima</td>
    <td>6pm - ONCE A PRINCESS <br /> 9pm - GUARDIANS OF THE GALAXY </td> 
     <td>6pm - ONCE A PRINCESS <br /> 9pm - GUARDIANS OF THE GALAXY </td> 
      <td>3pm - PLANES: FIRE AND RESCUE <br /> 6pm - ONCE A PRINCESS <br /> 9pm - GUARDIANS OF THE GALAXY </td> 
  </tr>
  <tr>
  	<td> Rivola </td>
  	<td> Closed </td>
  	 <td>12pm - PLANES: FIRE AND RESCUE <br /> 7pm - MARDAANI</td> 
  	 <td>4pm - GUARDIANS OF THE GALAXY <br /> 7pm - MARDAANI </td>
  </tr>
</table>
<br />
</div>
	<div id="pricing_table" hidden>
		<table class="info_table" style="width:100%">
  <tr>
    <th>Cinema</th>
    <th>Regular Times</th> 
    <th>Regular Prices</th>
    <th>Discount Times</th> 
    <th>Discount Prices</th>
  </tr>
  <tr>
    <td>Maxima</td>
    <td>Monday<br />Tuesday</td> 
    <td>Adult ($12)<br />Concession($10)<br />Child($8)<br />First Class Adult($25)<br />First Class Child($20)<br />Beanbag($20)</td> 
	<td>Wednesday<br />Thursday<br />Friday<br />Saturday<br />Sunday </td> 
    <td>Adult ($18)<br />Concession($15)<br />Child($12)<br />First Class Adult($30)<br />First Class Child($25)<br />Beanbag($30)</td> 
  </tr>
  <tr>
  	<td> Rivola </td>
  	<td>Wednesday (12pm)<br />Thursday (12pm)<br />Friday (12pm)</td>
	<td>Adult ($12)<br />Concession($10)<br />Child($8)</td>
    <td>Wednesday (7pm)<br />Thursday (7pm)<br />Friday (7pm)<br />Saturday<br />Sunday </td> 
    <td>Adult ($18)<br />Concession($15)<br />Child($12)</td> 
	</tr>
</table>
	</div>
	<br />
	<div class="content">
	<div id="info_box">
	<h4>Having Trouble Booking? Want A Private Function?<br /><a id="contact" href="contact.html"><u>Contact Us</u>!</a></h4>
	<div id="times_info">Select a movie to find out more about it.</div>
	<div id="cinema_info"></div>
	</div>
	<!--~e54061/wp/movie-service.php--> 
	<div id="book_form">
	<form action="http://titan.csit.rmit.edu.au/~e54061/wp/form-tester-2.php" method="post">
	<h2> Book Now </h2>
	Film <br />
	<select id="filmID" name="filmID" onchange="grabData(); checkFilm()" required>
	<option value="">Select Movie</option>
	<option value="AC">GUARDIANS OF THE GALAXY</option>
	<option value="RC">ONCE A PRINCESS</option>
	<option value="CH">PLANES: FIRE AND RESCUE</option>
	<option value="FO">MARDAANI</option>
	</select>
	<div id="cinema">Cinema<br />
	<input id="maxima" type="radio" name="cinema" value="maxima" onchange="checkCinema()" required /> Maxima
	<input id="rivola" type="radio" name="cinema" value="rivola" onchange="checkCinema()" required /> Rivola </div>
	<div id="day_select"></div>
	<div id="time_select"></div>
	<table id="bookseating">
	<tr><td><b>Regular Seating</b></td><td></td></tr>
	<tr>
	<td>Adult</td>
	<td> <input id="seat_adult" type="number" name="seat_adult" min="0" max="40" value="0" onchange="check()" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required></td>
	</tr>
	<tr>
	<td>Concession</td>
	<td> <input id="seat_concession" type="number" name="seat_concession" min="0" max="40" value="0" onchange="unconfirm()" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required></td>
	</tr>
	<tr>
	<td>Child</td>
	<td> <input id="seat_child" type="number" name="seat_child" min="0" max="40" value="0" onchange="unconfirm()" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required></td>
	</tr>
	
	<tr><td><b>Beanbags</b></td><td></td></tr>
	<tr>
	<td>Number </td>
	<td> <input id="seat_bean" type="number" name="seat_bean" min="0" max="13" value="0" onchange="unconfirm()" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required></td>
	</tr>
	<tr><td><b>First Class Seating</b></td><td></td></tr>
	<tr>
	<td>Adult</td>
	<td> <input id="seat_first_adult" type="number" name="seat_first_adult" min="0" max="12" value="0" onchange="unconfirm()" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required></td>
	</tr>
	<tr>
	<td>Child</td>
	<td> <input id="seat_first_child" type="number" name="seat_first_child" min="0" max="12" value="0" onchange="unconfirm()" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required></td>
	</tr>
	</table>
	<input value="Select Seating Area" type="submit" />
	</form>
	</div>
	
	<div id="movie_info"></div>
	</div>
	</main>

    <?php 
	include('modules/footer.html');
	?>

  </body>

</html>