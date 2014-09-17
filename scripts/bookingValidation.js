function validateCinema()
{
	//resets selections
	document.getElementById("day").selectedIndex = 0;
	document.getElementById("time").selectedIndex = 0;
	//declare variables
	var film = document.getElementById("film").value;
	var seat_adult = document.getElementById("seat_adult");
	var seat_concession = document.getElementById("seat_concession");
	var seat_child = document.getElementById("seat_child");
	var seat_bean = document.getElementById("seat_bean");
	var seat_first_adult = document.getElementById("seat_first_adult");
	var seat_first_child = document.getElementById("seat_first_child");
	var mon = document.getElementById("mon");
	var tue = document.getElementById("tue");
	var wed = document.getElementById("wed");
	var thu = document.getElementById("thu");
	var fri = document.getElementById("fri");
	var sat = document.getElementById("sat");
	var sun = document.getElementById("sun");
	var time_12 = document.getElementById("12pm");
	var time_4 = document.getElementById("4pm");
	var time_7 = document.getElementById("7pm");
	var time_3 = document.getElementById("3pm");
	var time_6 = document.getElementById("6pm");
	var time_9 = document.getElementById("9pm");
	//disable all options
	seat_adult.disabled = true;
	seat_concession.disabled = true;
	seat_child.disabled = true;
	seat_bean.disabled = true;
	seat_first_adult.disabled = true;
	seat_first_child.disabled = true;
	mon.disabled = true;
	tue.disabled = true;
	wed.disabled = true;
	thu.disabled = true;
	fri.disabled = true;
	sat.disabled = true;
	sun.disabled = true;
	time_12.disabled = true;
	time_4.disabled = true;
	time_7.disabled = true;
	time_3.disabled = true;
	time_6.disabled = true;
	time_9.disabled = true;
	
	//checks conditions to re-enable relevant options
	if (document.getElementById("rivola").checked)
	{		
		if (film == "F003")//LEGO
		{
		time_12.disabled = false;
		wed.disabled = false;
		thu.disabled = false;
		fri.disabled = false;
		}
		else if (film == "F004")//TMNT
		{
		time_4.disabled = false;
		sat.disabled = false;
		sun.disabled = false;
		}
		else if (film == "F001")//100YRMAN
		{
		time_7.disabled = false;
		wed.disabled = false;
		thu.disabled = false;
		fri.disabled = false;
		sat.disabled = false;
		sun.disabled = false;	
		}
		seat_adult.disabled = false;
		seat_concession.disabled = false;
		seat_child.disabled = false;
		seat_bean.value = 0;
		seat_first_adult.value = 0;
		seat_first_child.value = 0;
	}
	
	else if (document.getElementById("maxima").checked)
	{		
		if (film == "F004")//TMNT
		{
		mon.disabled = false;
		tue.disabled = false;
		wed.disabled = false;
		thu.disabled = false;
		fri.disabled = false;
		sat.disabled = false;
		sun.disabled = false;
		time_9.disabled = false;
		}
		else if (film == "F002")//BLENDED
		{
		mon.disabled = false;
		tue.disabled = false;
		wed.disabled = false;
		thu.disabled = false;
		fri.disabled = false;
		sat.disabled = false;
		sun.disabled = false;
		time_6.disabled = false;
		}
		else if (film == "F003")//LEGO
		{
		sat.disabled = false;
		sun.disabled = false;
		time_3.disabled = false;
		}
		seat_adult.disabled = false;
		seat_concession.disabled = false;
		seat_child.disabled = false;
		seat_bean.disabled = false;
		seat_first_adult.disabled = false;
		seat_first_child.disabled = false;
	}
}

function validateMovie()
{
	var film = document.getElementById("film").value;
	var maxima = document.getElementById("maxima");
	var rivola = document.getElementById("rivola");
	var message = document.getElementById("variable_message");
	rivola.checked = false;
	maxima.checked = false;
	if (film == "F001") //The 100 Year-Old Man Who Climbed Out Of The Window And Disappeared
	{
	maxima.disabled = true;
	rivola.disabled = false;
	message.innerHTML = "<i>The 100 Year-Old Man Who Climbed Out Of The Window And Disappeared</i> is currently only airing at <b>7pm Wednesday-Sunday</b> at the <b>Rivola Cinema</b>";
	}
	else if (film == "F002")//Blended
	{
	maxima.disabled = false;
	rivola.disabled = true;
	message.innerHTML = "<i>Blended</i> is currently only airing at <b>6pm everyday</b> at the <b>Maxima Cinema</b>";
	}
	else if (film == "F003")//The Lego Movie
	{
	maxima.disabled = false;
	rivola.disabled = false;
	message.innerHTML = "<i>The Lego Movie</i> is currently only airing at <b>12pm Wednesday-Friday</b> at the <b>Rivola Cinema</b> and <b>3pm Saturday-Sunday</b> at the <b>Maxima Cinema</b>";
	}
	else if (film == "F004")//Teenage Mutant Ninja Turtles
	{
	maxima.disabled = false;
	rivola.disabled = false;
	message.innerHTML = "<i>Teenage Mutant Ninja Turtles</i> is currently only airing at <b>9pm everyday</b> at the </b>Maxima Cinema</b> and <b>4pm Saturday-Sunday</b> at the <b>Rivola Cinema</b>";
	}
	validateCinema();
}

function calculate()
{
	if (document.getElementById("maxima").checked)
	{
		if (document.getElementById("day").value=="mon" || document.getElementById("day").value=="tue")
		{
		calculateDiscountMaxima();
		}
		else
		{
		calculateFullMaxima();
		}
	}
	else if (document.getElementById("rivola").checked)
	{
		if (document.getElementById("time").value=="12pm")
		{
		calculateDiscountRivola();
		}
		else
		{
		calculateFullRivola();
		}
	}
	document.getElementById("cost").innerHTML = "$" + (document.getElementById("price").value);
}

function calculateDiscountMaxima()
{
	var seatAdult = document.getElementById("seat_adult").value;
	document.getElementById("price_adult").innerHTML = "$" + (seatAdult*12);
	
	var seatConcession = document.getElementById("seat_concession").value;
	document.getElementById("price_concession").innerHTML = "$" + (seatConcession*10);
	
	var seatChild = document.getElementById("seat_child").value;
	document.getElementById("price_child").innerHTML = "$" + (seatChild*8);
	
	var seatFirstAdult = document.getElementById("seat_first_adult").value;
	document.getElementById("price_first_adult").innerHTML = "$" + (seatFirstAdult*25);
	
	var seatFirstChild = document.getElementById("seat_first_child").value;
	document.getElementById("price_first_child").innerHTML = "$" + (seatFirstChild*20);
	
	var seatBean = document.getElementById("seat_bean").value;
	document.getElementById("price_bean").innerHTML = "$" + (seatBean*20);
	
	document.getElementById("price").value = seatAdult*12 + seatChild*8 + seatConcession*10 +seatFirstAdult*25 + seatFirstChild*20 + seatBean*20;
}

function calculateDiscountRivola()
{
	var seatAdult = document.getElementById("seat_adult").value;
	document.getElementById("price_adult").innerHTML = "$" + (seatAdult*12);
	
	var seatConcession = document.getElementById("seat_concession").value;
	document.getElementById("price_concession").innerHTML = "$" + (seatConcession*10);
	
	var seatChild = document.getElementById("seat_child").value;
	document.getElementById("price_child").innerHTML = "$" + (seatChild*8);
	
	document.getElementById("price").value = seatAdult*12 + seatChild*8 + seatConcession*10;
}

function calculateFullMaxima()
{
	var seatAdult = document.getElementById("seat_adult").value;
	document.getElementById("price_adult").innerHTML = "$" + (seatAdult*18);
	
	var seatConcession = document.getElementById("seat_concession").value;
	document.getElementById("price_concession").innerHTML = "$" + (seatConcession*15);
	
	var seatChild = document.getElementById("seat_child").value;
	document.getElementById("price_child").innerHTML = "$" + (seatChild*12);
	
	var seatFirstAdult = document.getElementById("seat_first_adult").value;
	document.getElementById("price_first_adult").innerHTML = "$" + (seatFirstAdult*30);
	
	var seatFirstChild = document.getElementById("seat_first_child").value;
	document.getElementById("price_first_child").innerHTML = "$" + (seatFirstChild*25);
	
	var seatBean = document.getElementById("seat_bean").value;
	document.getElementById("price_bean").innerHTML = "$" + (seatBean*30);
	
	document.getElementById("price").value = seatAdult*18 + seatChild*12 + seatConcession*15 +seatFirstAdult*30 + seatFirstChild*25 + seatBean*30;
}

function calculateFullRivola()
{
	var seatAdult = document.getElementById("seat_adult").value;
	document.getElementById("price_adult").innerHTML = "$" + (seatAdult*18);
	
	var seatConcession = document.getElementById("seat_concession").value;
	document.getElementById("price_concession").innerHTML = "$" + (seatConcession*15);
	
	var seatChild = document.getElementById("seat_child").value;
	document.getElementById("price_child").innerHTML = "$" + (seatChild*12);
	
	document.getElementById("price").value = seatAdult*18 + seatChild*12 + seatConcession*15;
}

function unconfirm()
{
	document.getElementById("submit").disabled = true;
	document.getElementById("submit").value="Please Calculate Total";
	document.getElementById("price_first_adult").innerHTML = "";
	document.getElementById("price_first_child").innerHTML = "";
	document.getElementById("price_bean").innerHTML = "";
	document.getElementById("price_adult").innerHTML = "";
	document.getElementById("price_child").innerHTML = "";
	document.getElementById("price_concession").innerHTML = "";
	document.getElementById("cost").innerHTML = "";	
}

function confirm()
{
	var submit = document.getElementById("submit");
	if (document.getElementById("maxima").checked == false && document.getElementById("rivola").checked == false )
	{
		submit.value="Please Select Cinema";
	}
	else if (document.getElementById("day").selectedIndex == 0)
	{
		submit.value="Please Select Day";
	}
	else if (document.getElementById("time").selectedIndex == 0)
	{
		submit.value="Please Select Time";
	}
	else
	{
		calculate();
		if (document.getElementById("price").value == 0)
		{
			submit.value="Minimum 1 Ticket Must Be Purchased";
		}
		else if (document.getElementById("price").value > 0)
		{
			submit.disabled = false;
			submit.value="Book Now!";
		}
	}
}

function showHideSchedule()
{
	var schedule_button = document.getElementById("schedule_toggle");
	var schedule_table = document.getElementById("schedule_table");
	if (schedule_button.value == "hidden")
		{
		schedule_button.value = "shown";
		schedule_button.innerHTML = "Hide Schedule";
		schedule_table.hidden = false;
		}
	else if (schedule_button.value == "shown")
		{
		schedule_button.value = "hidden";
		schedule_button.innerHTML = "Show Schedule";
		schedule_table.hidden = true;
		}
}

function showHidePricing()
{
	var pricing_button = document.getElementById("pricing_toggle");
	var pricing_table = document.getElementById("pricing_table");
	if (pricing_button.value == "hidden")
		{
		pricing_button.value = "shown";
		pricing_button.innerHTML = "Hide Pricing";
		pricing_table.hidden = false;
		}
	else if (pricing_button.value == "shown")
		{
		pricing_button.value = "hidden";
		pricing_button.innerHTML = "Show Pricing";
		pricing_table.hidden = true;
		}
}