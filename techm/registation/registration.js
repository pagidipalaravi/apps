/*
Author :Ravi
Date : 24-09-2021
Updated By : Nethra
Updated Date : 24-09-2021
*/

function firstName(){
	/*when we perform an action on a html page,
	an event will be triggered and subsequencial function will be excuted.*/
	//window.alert("this is firstName function");
	//console.log("firstName function");
	//console.log(document.getElementById("fname").value);
	var x = document.getElementById("fname").value;
	if(x == "taliban" || x == "terror"){
		//window.alert("taliban is not allowed as a firstname");
		document.getElementById("fname").value = "";
		document.getElementById("fname").style.borderColor = 
		"#FF0000 blue"
	}
	console.log("on every keypress = " + x);
	//TODO
}