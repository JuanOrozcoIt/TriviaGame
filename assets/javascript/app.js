var q_set = [];
var a_set = [];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 20;
var intervalID;
var data = [
	{
		q: "Which London team's ground is Craven Cottage?",
		a: ["Millhall", "Chelsea", "Fulham", "Westham United"],
		c: 2,
		e: "Fulham is in West London. The ground is formerly the site of a house and grounds called .. Craven Cottage."
	},
	{
		q: "Which team did Pele play for?",
		a: ["USA", "Canada", "England", "Brasil"],
		c: 3,
		e: "Brasil."
	},
	{
		q: "Netherland's national flag colours are red, white and blue, but what colour is their soccer jersey?",
		a: ["Yellow", "Blue", "Green", "Orange"],
		c: 3,
		e: "Orange (same as Australia)."
	},
	{
		q: "This G is a Turkish club which is famed for its notoriously colorful supporters?",
		a: ["Garistanbul", "Grasshoppers", "Galatasaray", "Gone!"],
		c: 2,
		e: "Galatasaray are up there with the best in Europe"
	},
	{
		q: "An assistant referee is slow to raise their flag for offside after the ball is played. what is the assistant normally doing?",
		a: ["", "", "Waiting to see if the player offside is going to be involved in active play", ""],
		c: 2,
		e: "Waiting to see if the player offside is going to be involved in active play."
	},
	{
		q: "The name of a Dutch star player, regarded as one of the greats of the game. He was named three times European Footballer of the Year (1971, 1973, 1974), and European Player of the Century by the IFFHS in 1999. Who is this?",
		a: ["johan cruijff", "jordi cruijff", "johan neeskens", "marco van basten"],
		c: 0,
		e: "The Dutch Super Cup was named after him, 'Johan Cruijff-Schaal'."
	},
	{
		q: "The 2 female soccer players in the list have the same nationality. They won with their national team gold on the 1996 Olympic Games in Atlanta. Their names are what?",
		a: ["selma garciaparra and margaret young", "michelle akers and mia hamm", "christie rampone and brandi chastain", "clara fawcett and shannon macmillan"],
		c: 1,
		e: "The USA have always had a women soccer team that could have competed with the best. Their Olympic record proves it, gold in 1996 and 2004, and silver in 2000."
	},
	{
		q: "Although a Dutchman, he enjoyed his greatest club successes with Anderlecht. He won the European Cup Winners' Cup in 1976 and 1978, and was runner-up in the same cup in 1977. Who was this?",
		a: ["johnny rep", "arie haan", "robbie rensenbrink", "johan cruyff"],
		c: 2,
		e: "In 1978, Rensenbrink scored 5 times, and in the finale with only 30 seconds remaining on the clock, and with a draw on the scoreboard, his shot was deflected by the goalpost, leaving him centimeters from eternal fame."
	},
	{
		q: "Both in his homeland and in Turkey, he was a hero. He won his country's 'Player of the Year' award a record six times. In Turkey, he made his fame by winning the UEFA Cup in 1999-00 with Galatasaray. Who was this?",
		a: ["gheorghe hagi", "mircea lucescu", "dorinel munteanu", "gheorghe popescu"],
		c: 0,
		d: "Hagi was a close friend of Gheorghe Popescu, a former teammate from FC Barcelona and Galatasaray."
	},
	{
		q: "This player scored 24 goals in 80 matches for the Polish national team. He won a bronze medal at the 1982 World Cup. He also won Cup Winners' Cup (1984), European Super Cup (1984), and European Cup (1985). Who is it?",
		a: ["wlodzimierz lubanski", "andrzej szarmach", "zbigniew boniek", "grzegorz lato"],
		c: 2,
		e: "In the World Cup 1982, he scored 4 goals, three of them in 1 match against Belgium."
	},
	{
		q: "This player was born May 22th, 1946, and died November 25th, 2005. Most remembered for his halcyon days with Manchester United where he played winger between 1963 and 1974. He was voted European Footballer of the Year in 1968. Who is he?",
		a: ["bobby charlton", "norman whiteside", "jacky charlton", "george best"],
		c: 3,
		e: "TA colourful player on and of the pitch. One of his quotes says it all. 'I spent a lot of money on booze, birds and fast cars. The rest I just squandered'."
	},
	{
		q: "The one player from Cameroon on the list, achieved international stardom at the age of 38, an age at which most soccer players have retired, by scoring four goals at the 1990 World Cup and helping the Cameroon team reach the quarterfinals. Who is it?",
		a: ["emmanuel kunde", "roger milla", "samuel etoo", "francois omam-biyik"],
		c: 1,
		e: "And in 1994, age 42, he still managed to score once more for his national team at a World Cup."
	},
	{ 
		q: "15 Brasilian players were selected. One of these was the first player to participate in three consecutive World Cup finals. This happened in 2002, as captain of the team. Who was it?",
		a: ["carlos alberto", "cafu", "kaka", "ronaldo"],
		c: 1,
		e: "Cafu has shown his interest in participating in the 2010 World Cup, when he will be 40 years of age."
	},
	{
		q: "This Belgium goalkeeper was one of three Belgian players selected, together with Jan Ceulemans and Franky Vander Elst. His name is what?",
		a: ["jean nicolay", "michel preud'homme", "jean-marie pfaff", "christian piot"],
		c: 2,
		e: "Once a star on the pitch of Bayern Munich, later a TV-star in Belgium with the reality show, 'De Pfaffs'."
	},
	{
		q: "The figure 100 refers to the 100th anniversary of FIFA and not the number of players listed, which is actually higher. Pele found it too difficult to list just 100. What was the number of players which he selected?",
		a: ["200", "188", "165", "125"],
		c: 3,
		e: "On the list, 123 men and 2 women players. At the time the FIFA 100 was selected, 50 of the players were still active, with the remaining 75 retired from soccer."
	}
];
// Random question picker, question number assignment.
// Answers by question numbers to arrays q_set and a_set.
function makeQuestionSet(){
	for (var i = 1; i <= 10; i++) {
		var pushed = false;
		while (!pushed) {
			var rand = Math.floor(Math.random()*data.length);
			if (!(q_set.indexOf(rand) > -1)) {
				q_set.push(rand);
				pushed = true;
			};
		};
	};
	console.log(q_set)
};

// Print and display answer 
function nextQuestion(){
	$("#question_space").html(' ');
	$("#answers_space").html(' ');
	$("#question_timer").html('<p>Timer : 20 seconds remaining</p>')
	var question = q_set[correct + incorrect + unanswered];
	if (intervalID) {
		clearTimeout(intervalID);
	}
	if ((correct + incorrect + unanswered) === 10) {
		showResults();
	} else {
		intervalID = setInterval("showCountdown(" + question + ")", 1000);
		$("#question_space").html(data[question]["q"]);
		for (var i = 0; i < data[question]["a"].length; i++) {
			$("#answers_space").append('<div id="' + i + '" class="answer">' + data[question]["a"][i] + '</div>');
		};
		$("#answers_space").unbind().on("click", ".answer", function(){
			displayAnswer(this.id, question);
		});
	};
};

// Show the right answer for 5 seconds
function displayAnswer(answer, question) {
	if (answer == data[question]["c"]) {
		console.log("correct " + answer);
		correct++;
		$("#answers_space").html('<h3>' + "Correct!" + '</h3>');
		$("#answers_space").append('<p>' + data[question]["e"] + '</p>');
		console.log("total correct so far is " + correct);
	} else {
		console.log("wrong " + answer);
		incorrect++;
		$("#answers_space").html('<h3>' + "Wrong!" + '</h3>');
		if (answer === "time expired") {
			$("#answers_space").append('<p>Time\'s Up!</p>');
		} else {
			$("#answers_space").append('<p>You answered: ' + data[question]["a"][answer] + '</p>');
		}
		$("#answers_space").append('<p>' + data[question]["e"] + '</p>');
		console.log("total wrong so far is " + incorrect);
	};
	clearTimeout(intervalID);
	$("#question_timer").html(' ')
	time = 20;
	intervalID = setTimeout("nextQuestion()", 8000);
};

function showCountdown(question) {
	if (--time > 0){
		$("#question_timer").html('<p>Timer : ' + time + ' seconds remaining</p>');
	} else {
		unanswered++;
		clearTimeout(intervalID);
		displayAnswer("time expired", question);
	};
};

function showResults() {
	$("#question_space").html(' ');
	$("#question_timer").html(' ');
	$("#answers_space").html('\
		<p>Correct answers: ' + correct + '\
		<p>Inorrect answers: ' + incorrect + '\
		<p>Unanswered questions: ' + unanswered + '\
	');
	$("#other").html('<button id="btn-reset" class="btn btn-info">Play Again!</button>');
};

$("#other").unbind().on("click", "#btn-reset", function(){
	$("#question_space").html(' ');
	$("#question_timer").html(' ');
	$("#answers_space").html(' ');
	$("#other").html(' ');
	q_set = [];
	a_set = [];
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	$("#splash").show()
});

// begin game
$("#btn-begin").click(function(){
	$("#splash").hide()
	makeQuestionSet();
	nextQuestion();
});