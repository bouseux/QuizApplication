var QuizNamespace = QuizNamespace || {};

QuizNamespace = (function () {
    var questionList = [
                            { question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer: 0, userAnswer: -1 },
                            { question: "Who was the 16th President of the United States?", choices: ["Thomas Jefferson", "Abraham Lincoln", "Andrew Jackson", "Theodore Roosevelt", "Eddie Van Halen"], correctAnswer: 1, userAnswer: -1 },
                            { question: "Who was the first man to walk on the moon?", choices: ["Danny Noonan", "Carl Spackler", "Neil Armstrong", "Ty Webb"], correctAnswer: 2, userAnswer: -1 }
                       ];

    var questionLabel = document.getElementById("questionLabel");
    var answerDiv = document.getElementById("answerDiv");
    var nextButton = document.getElementById("nextButton");
    var nextQuestion = 0;

    var clickNext = function() {
        if (nextQuestion != 0) {
            // Record the user's answer
            var answer = document.querySelector("[name=answer]:checked");
            questionList[nextQuestion - 1].userAnswer = answer.value;
            answer.checked = false;
        }

        // Get next question
        var questionJSON = questionList[nextQuestion];
        if (questionJSON != null) {
            // Display next question
            questionLabel.innerText = questionJSON.question;

            // Display answers
            answerDiv.innerHTML = "";
            for (var i = 0; i < questionJSON.choices.length; i++) {
                AddAnswer(questionJSON, i);
            }

            nextQuestion++;
        }
        else {
            // Display result page
            var questionDiv = document.getElementById("questionDiv");
            questionDiv.className = "hidden";

            answerDiv.className = "hidden";

            var resultsDiv = document.getElementById("resultsDiv");
            resultsDiv.className = "visible";

            // Calculate results
            var correctAnswers = 0;
            for (var i = 0; i < questionList.length; i++) {
                if (questionList[i].correctAnswer == questionList[i].userAnswer) {
                    correctAnswers++;
                }
            }

            var percentage = Math.round((correctAnswers / questionList.length) * 100);

            // Display results
            //var resultText = document.getElementById("percentageText");
            percentageText.innerHTML = " " + percentage + "%";
            //var resultText = document.getElementById("resultText");
            resultText.innerText = "You answered " + correctAnswers + " out of " + questionList.length + " questions correct.";
        }
    };

    var AddAnswer = function (questionJSON, index) {
        var answer = document.createElement("input");
        answer.id = "answer" + index;
        answer.name = "answer";
        answer.type = "radio";
        answer.value = index;
        answer.className = "radio-margin";

        var label = document.createElement("label")
        label.innerText = questionJSON.choices[index];

        answerDiv.appendChild(answer);
        answerDiv.appendChild(label);
        answerDiv.appendChild(document.createElement("br"));
    };

    return {
        // Variables
        nextButton: nextButton,
        // Fuctions
        NextButtonClick: clickNext
    }

})();

//nextButton.onclick = function () {
//    clickNext(nextQuestion);
//}
//nextButton.addEventListener("click", function () { clickNext(nextQuestion) });
QuizNamespace.nextButton.addEventListener("click", function () { QuizNamespace.NextButtonClick() });

// Intialize the page
//clickNext(nextQuestion);
//$(function () { clickNext(nextQuestion) });
$(function () { QuizNamespace.NextButtonClick() });








/*
http://stackoverflow.com/questions/12374938/using-getelementsbyname-to-validate-radio-button
function formValidator(){
var triedIt = document.getElementsByName('tried');
if(radioChecked(triedIt, "Please select")){
return true;
}
return false;   
}

function radioChecked(elem, helperMsg){
if(document.myform.tried.checked == 1) {
    return true;
}else{
    alert(helperMsg);
    elem.focus();
    return false;
}
}
*/