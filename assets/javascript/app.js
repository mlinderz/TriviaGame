var score = 0
var wrong = 0 
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
    {
        question: "The Whack Heard Around the World’ happened on what reality TV show?",
        answers: ["Road Rules", "Candid Camera", "Cops", "The Real World"],
        correctAnswer: "The Real World"
    },
    {
        question: "Rocko, from Rocko's Modern Life, was what kind of animal?",
        answers: ["Dog", "Rat", "Wallaby", "Cats"],
        correctAnswer: "Wallaby"
    },
    {
        question: "Which one of these names does not belong to a Hansen brother?",
        answers: ["Zac", "Jeremy", "Taylor", "Issac"],
        correctAnswer: "Jeremy"
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

    console.log(q1, q2, q3, q3, q4, q5, q6)
    if (q1 == questions[0].correctAnswer){
        score++
    }
    if (q2 == questions[1].correctAnswer){
        score++
    }
    if (q3 == questions[2].correctAnswer){
        score++
    }
    if (q4 == questions[3].correctAnswer){
        score++
    }
    if (q5 == questions[4].correctAnswer){
        score++
    }
    if (q6 == questions[5].correctAnswer){
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


