//Damian Vaartmans
//99061149
//software development

alert("WARNING THIS GAME ISNT FOR PEOPLE EASILY DISTURBED");
alert("Welcome to the Arc Game");
alert("its a text Game");
alert("it will show options with the numbers like 1, 2, 3");
var test = prompt("select the correct number if you understand. " + "\n" + "1: yes" + "\n" + "2: no");

if (test == "1"){
	alert("good job");
}
else if(test == "2"){
	alert("sorry it doesnt work like that");
	alert("but you will be able to just continue the game");
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
		alert("today we are going to see the Mosty Tower");		
		var resp1 = prompt("so what do you think of that kiddo?" + "\n" + "1: thats so cool" + "\n" + "2: no thanks id rather stay home")
		if(resp1 == "1"){
			alert("to the Mosty Tower we go");
			alert("once we get there you see your aunt");
			alert("she says hello " + fname + ", how are you?");
			var howru = prompt("how do you respond?" + "\n" + "1: im good, thanks" + "\n" + "2: i had a really weird dream about you two killing me");
		}
	}
	else if (sleep1 == "2") {
		alert("you go back go sleep");
		alert("you wake up again from a noise in your room");
		var yell1 = prompt("its your mom, she is yelling at you for oversleeping, what do you do?" + "\n" + "1: apologize to her" + "\n" + "2 yell back at her");
		if(yell1 == "1"){
		 	alert("you apologize to her" + "\n" + "she says that it is ok," + "\n" + "she has a special plan for today");
		 	alert("she tells you that you two are going to the pool");
		 	var pool1 = prompt("do you want to go with your mom to the pool?" + "\n" + "1: yes ofcourse" + "\n" + "2: no i dont want to go to the pool");

		}
		else if(yell1 == "2"){
			alert("you yell back at your mom");
			alert("she runs to the kitchen and you decide to follow her");
			alert("when she gets to the kitchen she stabs you, you can slowly see the world become blurry, you see she stab's herself before everything goes black");
			document.write("you died, refresh to start over");
		}
	}