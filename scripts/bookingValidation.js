function validate() 
{
  validateCinema();
  calculate()
  unconfirm()
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
		time.options[0] = new Option ("3pm","3pm");
		time.options[1] = new Option ("6pm","6pm");
		time.options[2] = new Option ("9pm","9pm");
		document.getElementById("seat_adult").disabled = false;
		document.getElementById("seat_concession").disabled = false;
		document.getElementById("seat_child").disabled = false;
		document.getElementById("seat_bean").disabled = true;
		document.getElementById("seat_first_adult").disabled = true;
		document.getElementById("seat_first_child").disabled = true;
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
		time.options[0] = new Option ("12pm","12pm");
		time.options[1] = new Option ("4pm","4pm");
		time.options[2] = new Option ("7pm","7pm");
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
	document.getElementById("cost").innerHTML = "lol";
}
function unconfirm()
{
	document.getElementById("submit").disabled = true;
}

function confirm()
{
	if (document.getElementById("price").value > 0)
	{
	document.getElementById("submit").disabled = false;
	}
}