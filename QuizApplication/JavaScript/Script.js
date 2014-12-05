var questionList = [
                        { question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer: 0 },
                        { question: "Who was the 16th President of the United States?", choices: ["Thomas Jefferson", "Abraham Lincoln", "Andrew Jackson", "Theodore Roosevelt"], correctAnswer: 1 }, // , "Daffy Duck"
                        { question: "Who was the first man to walk on the moon?", choices: ["Donald Duck", "Buck Cherry", "Neil Armstrong", "Tony Blair"], correctAnswer: 2 }
                   ];

var answerList = new Array(questionList.length);
var questionLabel = document.getElementById("question");
var nextButton = document.getElementById("next");
var nextQuestion = 0;

var clickNext = function(index) {
    if (index != 0) {
        // Record the user's answer
        //var answers = document.getElementsByName("answer");
        //for (var i = 0; i < answers.length; i++) {
        //    if (answers[i].checked) {
        //        answerList[index - 1] = answers[i].value;
        //        answers[i].checked = false;
        //        break;
        //    }
        //}
        var answer = document.querySelector("[name=answer]:checked");
        answerList[index - 1] = answer.value;
        answer.checked = false;
    }

    // Load next question
    var question = questionList[index];

    if (question != null) {
        questionLabel.innerText = question.question;

        for (var i = 0; i < question.choices.length; i++) {
            var label = document.getElementById("label" + i);
            label.innerText = question.choices[i];
        }

        nextQuestion++;
    }
    else {
        // Display last page...
        //document.getElementById("page1").visible = false;
        //document.getElementById("page2").visible = true;
        // Calculate results...
        // Display results...
    }
};

//nextButton.onclick = function () {
//    clickNext(nextQuestion);
//}
nextButton.addEventListener("click", function () { clickNext(nextQuestion) });

// Intialize the page
//clickNext(nextQuestion);
$(function () { clickNext(nextQuestion) });


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