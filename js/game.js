alert("Welcome to the Arc Game");
alert("its a text Game");
alert("it will show options with the numbers like 1, 2, 3");
var test = prompt("select the correct number if you understand. " + "\n" + "1: yes" + "\n" + "2: no");

if (test == "1"){
	alert("good job");
	var fname = prompt("what is your character's first name");
	var lname = prompt("what is your character's last name");
	alert("hello " + fname + " " + lname + "," + "\n" + "Welcome to the Arc Game");
}
else if(test == "2"){
	alert("sorry it doesnt work like that");
}
