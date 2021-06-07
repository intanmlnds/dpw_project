function check(){
	var c =0;
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var result = document.getElementById('result');
	var quiz = document.getElementById('quiz');
	if(q1 == "Wuhan, China") {c++}
	if(q2 == "True") {c++}
	if(q3 == "Telinga") {c++}
	if(q4 == "Benda-benda padat") {c++}
	if(q5 == "Air mengalir") {c++}

	quiz.style.display="none";

	if(c == 0){
		result.textContent="Your result is 0. It is not so good please try to work on yourself. Please back to the kuis"
	}
	if(c == 1){
		result.textContent="Your result is 20. It is not so good please try to work on yourself."
	}
	if(c == 2){
		result.textContent="Your result is 40. It is not so good please try to work on yourself."
	}
	if( c == 3){
		result.textContent="Your result is 60. It is not so good please try to work on yourself."
	}
	if(c == 4){
		result.textContent="Your result is 80. It is awesome. Keep it up!."
	}
	if(c == 5){
		result.textContent="Your result is 100. It is awesome. Keep it up!."
	}
	
}