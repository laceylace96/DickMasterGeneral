<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <title>Bloo-Roo Pictures | Movies</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
	<script src = "scripts/jquery-1.11.1.js"></script>
	<script>
	function grabData()
	{	
	$.ajax
	({
	url:window.location.origin+"/~e54061/wp/movie-service.php",
	type:"post",
	data:{
		CRC:"s3492627",
		filmID:"ALL"},
	success: function(result) 
		{
		$("#films").html(result);
		}
	});
	}	
	</script>
	<style>
	.flexbox
	{
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	}
	
	#MS-FO
	{
	order: 1;
	flex-basis:400px;
	flex-grow: 1;
	}
	
	#MS-CH
	{
	order: 2;
	flex-basis:400px;
	flex-grow: 1;
	}
	
	#MS-RC
	{
	order: 3;
	flex-basis:400px;
	flex-grow: 1;
	}
	
	#MS-AC
	{
	order: 4;
	flex-basis:400px;
	flex-grow: 1;
	}
	
	.MS-image
	{
	float:left;
	padding:10px 10px 0px 5px;
	}
	
	.MS-rating img
	{
	display:block;
	padding-bottom:5px;
	}
	
	.MS-rating
	{
	font-size:70%;
	padding-bottom:5px;
	text-transform: uppercase;
	}
	
	.MS-title
	{
	font-size: 170%;
	font-weight: bold;
	}
	
	.MS-film
	{
	clear:both;
	padding: 10px;
	margin: 5px;
	background-color:black;
	border-radius: 25px;
	}
	</style>
  </head>

  <body onload="grabData()">

    <?php 
	include('modules/header.html');
	?>
	
    <?php 
	include('modules/navigation.html');
	?>

    <main>
	<div id="films" class="flexbox">
	</div>

	</main>

    <?php 
	include('modules/footer.html');
	?>
  </body>

</html>