function showHideSchedule()
{
	if ($("#schedule_toggle").val() == "hidden")
		{
		$("#schedule_toggle").val("shown");
		$("#schedule_toggle").html("Hide Schedule");
		}
	else if ($("#schedule_toggle").val() == "shown")
		{
		$("#schedule_toggle").val("hidden");
		$("#schedule_toggle").html("Show Schedule");
		}
	$("#schedule_table").toggle();
}

function showHidePricing()
{
	if ($("#pricing_toggle").val() == "hidden")
		{
		$("#pricing_toggle").val("shown");
		$("#pricing_toggle").html("Hide Pricing");
		}
	else if ($("#pricing_toggle").val() == "shown")
		{
		$("#pricing_toggle").val("hidden");
		$("#pricing_toggle").html("Show Pricing");
		}
	$("#pricing_table").toggle();
}

function checkFilm()
{
$("#maxima").attr('checked',false);
$("#rivola").attr('checked',false);
$("#maxima").attr('disabled',false);
$("#rivola").attr('disabled',false);
$("#cinema").attr('hidden',false);
$("#day_select").attr('hidden',true);
$("#time_select").attr('hidden',true);
if ($("#filmID").val() == "AC")
{
$("#times_info").html("<i>GUARDIANS OF THE GALAXY</i> is currently only airing at <b>9pm everyday</b> at the </b>Maxima Cinema</b> and <b>4pm Saturday-Sunday</b> at the <b>Rivola Cinema</b>");
}
else if ($("#filmID").val() == "RC")
{
$("#rivola").attr('disabled',true);
$("#times_info").html("<i>ONCE A PRINCESS</i> is currently only airing at <b>6pm everyday</b> at the <b>Maxima Cinema</b>");
}
else if ($("#filmID").val() == "CH")
{
$("#times_info").html("<i>PLANES: FIRE AND RESCUEe</i> is currently only airing at <b>12pm Wednesday-Friday</b> at the <b>Rivola Cinema</b> and <b>3pm Saturday-Sunday</b> at the <b>Maxima Cinema</b>");
}
else if ($("#filmID").val() == "FO")
{
$("#maxima").attr('disabled',true);
$("#times_info").html("<i>MARDAANI</i> is currently only airing at <b>7pm Wednesday-Sunday</b> at the <b>Rivola Cinema</b>");
}
else
{
$("#times_info").html("Select a movie to find out more about it.");
$("#cinema").attr('hidden',true);
}
}

function checkCinema()
{
if ($("#filmID").val() != "")
{
$.ajax
	({
	url:"day-select.php",
	type:"post",
	data:{
		film: $("#filmID").val(),
		cinema: $("input[name=cinema]:checked").val()},
	success: function(result) 
		{
		$("#day_select").html(result); 
		$("#day_select").attr('hidden',false);
		$("#time_select").attr('hidden',false);
		}
	});
$.ajax
({
	url:"time-select.php",
	type:"post",
	data:{
		film: $("#filmID").val(),
		cinema: $("input[name=cinema]:checked").val()},
	success: function(result)
	{
	$("#time_select").html(result);
	}
});
}
else
{
$("#day_select").html("");
}
if ($("input[name=cinema]:checked").val() == "rivola")
{
$("#seat_bean").attr('disabled',true);
$("#seat_bean").val("0");
$("#seat_first_child").attr('disabled',true);
$("#seat_first_child").val("0");
$("#seat_first_adult").attr('disabled',true);
$("#seat_first_adult").val("0");
$("#cinema_info").html("<p>Beanbags and first class seating are unavailable in the Rivola Cinema</p>");
}
else
{
$("#seat_bean").attr('disabled',false);
$("#seat_first_child").attr('disabled',false);
$("#seat_first_adult").attr('disabled',false);
$("#cinema_info").html("");
}
}

function grabData()
{
if ($("#filmID").val()!="")
{
$.ajax
	({
	url:window.location.origin+"/~e54061/wp/movie-service.php",
	type:"post",
	data:{
		CRC:"s3492627",
		filmID:$("#filmID").val()},
	success: function(result) 
		{
		$("#movie_info").html(result);
		}
	});
}
else {$("#movie_info").html("");}
}
