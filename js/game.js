alert("Welcome to the Arc Game");
alert("WARNING THIS GAME ISNT FOR PEOPLE EASILY DISTURBED");
alert("its a text Game");
alert("it will show options with the numbers like 1, 2, 3");
var test = prompt("select the correct number if you understand. " + "\n" + "1: yes" + "\n" + "2: no");

if (test == "1"){
	alert("good job");
}
else if(test == "2"){
	alert("sorry it doesnt work like that");
}

var fname = prompt("what is your character's first name");
	var lname = prompt("what is your character's last name");
	alert("logging in");
	alert("...");
	alert("hello " + fname + " " + lname + ".");
	alert("booting...");
	alert("boot complete");
var sleep1 = prompt("its a cold morning, you are in your bed, its time to get up what do you do" + "\n" + "1: get up" + "\n" + "2: sleep for another hour");
	if (sleep1 == "1") {
		alert("you decide to wake up");
		alert("when you go downstairs you see your mother, she sees you too and says good morning kiddo");
	}
	else if (sleep1 == "2") {
		alert("you go back go sleep");
		alert("you wake up again from a noise in your room");
		var yell1 = prompt("its your mom, she is yelling at you for oversleeping, what do you do?" + "\n" + "1: apologize to her" + "\n" + "2 yell back at her");
		if(yell1 == "1"){
		 	alert("you apologize to her" + "\n" + "she says that it is ok," + "\n" + "she has a special plan for today");
		}
		else if(yell1 == "2"){
			alert("you yell back at your mom");
			alert("she runs to the kitchen and you decide to follow her");
			alert("when she gets to the kitchen she stabs you, you can slowly see the world become blurry, you see she stab's herself before everything goes black");
			document.write("you died, refresh to start over");
		}
	}