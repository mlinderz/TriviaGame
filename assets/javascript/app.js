var score = 0
var questions = [
    {
        question: "Which 90’s boy band sings the song I Want It That Way?",
        answers: ["Backstreet Boys", "NSYNC", "98 Degrees", "New Kids on the Block"],
        correctAnswer: "Backstreet Boys"
    },
    {
        question: "Where was Will Smith’s character from the Fresh Prince of Bel Air born and raised?",
        answers: ["Atlanta", "West Philadelphia", "Philadelphia", "Tampa"],
        correctAnswer: "West Philadelphia"
    },
    {
        question: "On the “Saved by the Bell” episode in which Jessie freaked out on drugs, what was she taking?",
        answers: ["MDMA", "caffeine pills", "OxyContin", "sleeping pills"],
        correctAnswer: "caffeine pills"
    },
]

function displayQuestions(){
    for (var i = 0; i<questions.length; i++){
        $("#questions").append("<h2>" + questions[i].question +  "</h2>")
        for (var j = 0; j<questions[i].answers.length; j++){
            $("#questions").append(`<input type="radio" name="${i}" value="${questions[i].answers[j]}">${questions[i].answers[j]}</input>`)
        }

    }
}

$("#submit").on("click", function(){
    console.log("quiz submitted")
    var q1 = $("input[name= 0]:checked").val();
    var q2 = $("input[name= 1]:checked").val();
    var q3 = $("input[name= 2]:checked").val();

    console.log(q1, q2, q3)
    if (q1 == questions[0].correctAnswer){
        score++
    }
    if (q2 == questions[1].correctAnswer){
        score++
    }
    if (q3 == questions[2].correctAnswer){
        score++
    }
    console.log(score)
    $("#score").append("<h2>" + "Correct Answers:" + score +  "</h2>")
} )



displayQuestions()








//Timer//
var counter = 100;
$('#timer').text("Time Remaining:" + counter);

function decreaseCounter(){
    counter--;
    $('#timer').text("Time Remaining: " + counter);
}

var timeOut = setInterval(decreaseCounter, 1*1000);


