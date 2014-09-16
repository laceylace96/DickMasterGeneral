function validate() 
{
  validateCinema();
  validateMovie();
  unconfirm();
}

function validateCinema()
{
	var seat_adult = document.getElementById("seat_adult");
	var seat_concession = document.getElementById("seat_concession");
	var seat_child = document.getElementById("seat_child");
	var seat_bean = document.getElementById("seat_bean");
	var seat_first_adult = document.getElementById("seat_first_adult");
	var seat_first_child = document.getElementById("seat_first_child");
	
	if (document.getElementById("rivola").checked)
	{		
		document.getElementById("mon").disabled = true;
		document.getElementById("tue").disabled = true;
		document.getElementById("12pm").disabled = false;
		document.getElementById("4pm").disabled = false;
		document.getElementById("7pm").disabled = false;
		document.getElementById("3pm").disabled = true;
		document.getElementById("6pm").disabled = true;
		document.getElementById("9pm").disabled = true;
		seat_adult.disabled = false;
		seat_concession.disabled = false;
		seat_child.disabled = false;
		seat_bean.value = 0;
		seat_first_adult.value = 0;
		seat_first_child.value = 0;
		seat_bean.disabled = true;
		seat_first_adult.disabled = true;
		seat_first_child.disabled = true;
	}
	
	else if (document.getElementById("maxima").checked)
	{		
		document.getElementById("mon").disabled = false;
		document.getElementById("tue").disabled = false;
		document.getElementById("12pm").disabled = true;
		document.getElementById("4pm").disabled = true;
		document.getElementById("7pm").disabled = true;
		document.getElementById("3pm").disabled = false;
		document.getElementById("6pm").disabled = false;
		document.getElementById("9pm").disabled = false;
		seat_adult.disabled = false;
		seat_concession.disabled = false;
		seat_child.disabled = false;
		seat_bean.disabled = false;
		seat_first_adult.disabled = false;
		seat_first_child.disabled = false;
	}
	
	else
	{		
		seat_adult.disabled = true;
		seat_concession.disabled = true;
		seat_child.disabled = true;
		seat_bean.disabled = true;
		seat_first_adult.disabled = true;
		seat_first_child.disabled = true;
	}
}

function validateMovie()
{
	//<option value="F001">The 100 Year-Old Man Who Climbed Out Of The Window And Disappeared</option>
	//<option value="F002">Blended</option>
	//<option value="F003">The Lego Movie</option>
	//<option value="F004">Teenage Mutant Ninja Turtles</option>
}

function calculate()
{
	if (document.getElementById("maxima").checked)
	{
		if (document.getElementById("day").value=="Monday" || document.getElementById("day").value=="Tuesday")
		{
		calculateDiscountMaxima();
		}
		else
		{
		calculateFullMaxima();
		}
		confirm();
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
		confirm();
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
}

function confirm()
{
	if (document.getElementById("price").value == 0)
	document.getElementById("submit").value="Minimum 1 Ticket Must Be Purchased";
	
	else if (document.getElementById("price").value > 0)
	{
	document.getElementById("submit").disabled = false;
	document.getElementById("submit").value="Book Now!";
	}
}

function resetSelection()
{
	document.getElementById("day").selectedIndex = 0;
	document.getElementById("time").selectedIndex = 0;
}