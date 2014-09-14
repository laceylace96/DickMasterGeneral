function validate() 
{
  unconfirm()
  validateCinema();
}

function validateCinema()
{
	var day = document.getElementById("day");
	var time = document.getElementById("time");
	
	if (document.getElementById("rivola").checked)
	{		
		clear(day);
		day.options[0] = new Option ("Wednesday","Wednesday");
		day.options[1] = new Option ("Thursday","Thursday");
		day.options[2] = new Option ("Friday","Friday");
		day.options[3] = new Option ("Saturday","Saturday");
		day.options[4] = new Option ("Sunday","Sunday");
		clear(time);
		time.options[0] = new Option ("12pm","12pm");
		time.options[1] = new Option ("4pm","4pm");
		time.options[2] = new Option ("7pm","7pm");
		document.getElementById("seat_adult").disabled = false;
		document.getElementById("seat_concession").disabled = false;
		document.getElementById("seat_child").disabled = false;
		document.getElementById("seat_bean").disabled = true;
		document.getElementById("seat_first_adult").disabled = true;
		document.getElementById("seat_first_child").disabled = true;
		document.getElementById("seat_bean").value = 0;
		document.getElementById("seat_first_adult").value = 0;
		document.getElementById("seat_first_child").value = 0;
	}
	
	else if (document.getElementById("maxima").checked)
	{		
		clear(day);
		day.options[0] = new Option ("Monday","Monday");
		day.options[1] = new Option ("Tuesday","Tuesday");
		day.options[2] = new Option ("Wednesday","Wednesday");
		day.options[3] = new Option ("Thursday","Thursday");
		day.options[4] = new Option ("Friday","Friday");
		day.options[5] = new Option ("Saturday","Saturday");
		day.options[6] = new Option ("Sunday","Sunday");
		clear(time);
		time.options[0] = new Option ("3pm","3pm");
		time.options[1] = new Option ("6pm","6pm");
		time.options[2] = new Option ("9pm","9pm");
		document.getElementById("seat_adult").disabled = false;
		document.getElementById("seat_concession").disabled = false;
		document.getElementById("seat_child").disabled = false;
		document.getElementById("seat_bean").disabled = false;
		document.getElementById("seat_first_adult").disabled = false;
		document.getElementById("seat_first_child").disabled = false;
	}
	
	else
	{		
		document.getElementById("seat_adult").disabled = true;
		document.getElementById("seat_concession").disabled = true;
		document.getElementById("seat_child").disabled = true;
		document.getElementById("seat_bean").disabled = true;
		document.getElementById("seat_first_adult").disabled = true;
		document.getElementById("seat_first_child").disabled = true;
	}
}
function clear(dropdown)
{
    var i;
    for(i=dropdown.options.length-1;i>=0;i--)
    {
        dropdown.remove(i);
    }
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
	document.getElementById("cost").innerHTML = document.getElementById("price").value;
}

function calculateDiscountMaxima()
{
	var seatAdult = document.getElementById("seat_adult").value;
	document.getElementById("price_adult").innerHTML = seatAdult*12;
	
	var seatConcession = document.getElementById("seat_concession").value;
	document.getElementById("price_concession").innerHTML = seatConcession*10;
	
	var seatChild = document.getElementById("seat_child").value;
	document.getElementById("price_child").innerHTML = seatChild*8;
	
	var seatFirstAdult = document.getElementById("seat_first_adult").value;
	document.getElementById("price_first_adult").innerHTML = seatFirstAdult*25;
	
	var seatFirstChild = document.getElementById("seat_first_child").value;
	document.getElementById("price_first_child").innerHTML = seatFirstChild*20;
	
	var seatBean = document.getElementById("seat_bean").value;
	document.getElementById("price_bean").innerHTML = seatBean*20;
	
	document.getElementById("price").value = seatAdult*12 + seatChild*8 + seatConcession*10 +seatFirstAdult*25 + seatFirstChild*20 + seatBean*20;
}

function calculateDiscountRivola()
{
	var seatAdult = document.getElementById("seat_adult").value;
	document.getElementById("price_adult").innerHTML = seatAdult*12;
	
	var seatConcession = document.getElementById("seat_concession").value;
	document.getElementById("price_concession").innerHTML = seatConcession*10;
	
	var seatChild = document.getElementById("seat_child").value;
	document.getElementById("price_child").innerHTML = seatChild*8;
	
	document.getElementById("price").value = seatAdult*12 + seatChild*8 + seatConcession*10;
}

function calculateFullMaxima()
{
	var seatAdult = document.getElementById("seat_adult").value;
	document.getElementById("price_adult").innerHTML = seatAdult*18;
	
	var seatConcession = document.getElementById("seat_concession").value;
	document.getElementById("price_concession").innerHTML = seatConcession*15;
	
	var seatChild = document.getElementById("seat_child").value;
	document.getElementById("price_child").innerHTML = seatChild*12;
	
	var seatFirstAdult = document.getElementById("seat_first_adult").value;
	document.getElementById("price_first_adult").innerHTML = seatFirstAdult*30;
	
	var seatFirstChild = document.getElementById("seat_first_child").value;
	document.getElementById("price_first_child").innerHTML = seatFirstChild*25;
	
	var seatBean = document.getElementById("seat_bean").value;
	document.getElementById("price_bean").innerHTML = seatBean*30;
	
	document.getElementById("price").value = seatAdult*18 + seatChild*12 + seatConcession*15 +seatFirstAdult*30 + seatFirstChild*25 + seatBean*30;
}

function calculateFullRivola()
{
	var seatAdult = document.getElementById("seat_adult").value;
	document.getElementById("price_adult").innerHTML = seatAdult*18;
	
	var seatConcession = document.getElementById("seat_concession").value;
	document.getElementById("price_concession").innerHTML = seatConcession*15;
	
	var seatChild = document.getElementById("seat_child").value;
	document.getElementById("price_child").innerHTML = seatChild*12;
	
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