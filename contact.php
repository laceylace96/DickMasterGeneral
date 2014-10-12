<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <title>Bloo-Roo Pictures | Contact Us</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<style>
	.content
	{
	display: flex;
	flex-flow: row wrap;
	justify-content:center;
	}
	
	#info
	{
	order: 1;
	margin-right:15px;
	}
	
	#contact
	{
	order: 2;
	margin-left:15px;
	}
	</style>
  </head>

  <body>

    <?php 
	include('modules/header.html');
	?>
	
    <?php 
	include('modules/navigation.html');
	?>
	
    <main>
	<div class="content">
	<div id="info">
	<h2>Contact Details</h2>
	<p><b>Phone:</b> 1300-975-711<br /><b>Email:</b> contact@brpictures.com </p><hr />
	<h2>Address</h2>
	<p>101 Scenic Avenue <br />Cinematic Meadows <br />Moovay, 4102</p><hr />
	</div>

	<div id="contact">
	<h2>Contact Us</h2>
	<form action="http://titan.csit.rmit.edu.au/~e54061/wp/form-tester.php" method="post">
	Email Address <br /> <input type="email" name="email" placeholder="example@domain.com" required /> 
	<br /> Subject <br /> 
	<select name="subject">
	<option value="ticket-enquiry">Ticket Enquiry</option>
	<option value="private-booking">Private Booking</option>
	<option value="careers">Careers</option>
	<option value="feedback">Feedback</option>
	<option value="other">Other</option>
	</select>
	<br /> Message <br /> 
	<textarea name="message" required> </textarea> 
	<br /> <input type="submit" />
	</form>
	</div>
	</div>
    </main>

    <?php 
	include('modules/footer.html');
	?>

  </body>

</html>