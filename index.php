<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <title>Bloo-Roo Pictures | Home</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
	<style>
	.flexbox
	{
	display: flex;
	flex-flow: row wrap;
	align-items: flex-start;
	}
	
	#maxima
	{
	order: 1;
	margin-right:15px;
	flex-basis:450px;
	flex-grow:1;
	}
	
	#rivola
	{
	order: 2;
	margin-left:15px;
	flex-basis:450px;
	flex-grow:1;
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
	<div>
    <p> Our quaint cinema has overgone some new renovations, combining our old world charm with the style and technologies of the modern age. We currently have two different cinema rooms, both with their own charm and seating arrangments. </p>
	</div>
	
	<div class="flexbox">
	<div id="maxima">
	<h2> Cinema Maxima </h2>
	<p>This large cinema is perfect for those into modern technology. On the large screen plays all mainstream and 3D movies. If that's not exciting enough, there are three different types of seating to choose from:
	</p>
	<dl>
		<dt>Normal Seats</dt>
		<dd>(Full, Concession and Child under 12 pricing options)</dd>
		<dt>First Class Seats</dt>
		<dd>(Full and Child pricing options)</dd>
		<dt>Bean Bag Seats</dt>
		<dd>Can accommodate 2 adults, 1 adult + 1 child OR 3 children (under 12)</dd>
	</dl>
	<!-- Image sourced from www.rmit.edu.au for educational purposes only -->
	<img src="images/Cinema_Maxima.png" alt="Cinema Maxima" width = "250" height = "200"/>
	</div>
	
	<div id="rivola">
	<h2> Cinema Rivola</h2>
	<p>This quaint cinema features one smaller screen and un-renovated, conventional seating. Playing foreign language films, art house films and films near the end of their distribution. All of these films are shown in 2D only. This cinema is perfect to be hired for community or corporate functions. </p>
	<!-- Image sourced from www.rmit.edu.au for educational purposes only -->
	<img src="images/Cinema_Rivola.png" alt="Cinema Rivola" width = "250" height = "200"/>
	</div>
	</div>

	</main>

	<?php 
	include('modules/footer.html');
	?>

  </body>

</html>