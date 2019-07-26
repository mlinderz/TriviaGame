//Scoring//
var score = 0
var wrong = 0 


//Setting the questions for trivia//

var questions = [
    {
        question: "Which 90\'\s boy band sings the song \"\I Want It That Way\"\?",
        answers: ["Backstreet Boys", "NSYNC", "98 Degrees", "New Kids on the Block"],
        correctAnswer: "Backstreet Boys"
    },
    {
        question: "Where was Will Smith\'\s in the show Fresh Prince of Bel Air born and raised?",
        answers: ["Atlanta", "West Philadelphia", "Philadelphia", "Tampa"],
        correctAnswer: "West Philadelphia"
    },
    {
        question: "On the show \"\Saved by the Bell\"\ episode in which Jessie freaked out on drugs, what was she taking?",
        answers: ["MDMA", "caffeine pills", "OxyContin", "sleeping pills"],
        correctAnswer: "caffeine pills"
    },
    {
        question: "\"\The Whack Heard Around the World\"\ happened on what reality TV show?",
        answers: ["Road Rules", "Candid Camera", "Cops", "The Real World"],
        correctAnswer: "The Real World"
    },
    {
        question: "Rocko, from Rocko\'\s Modern Life, was what kind of animal?",
        answers: ["Dog", "Rat", "Wallaby", "Cats"],
        correctAnswer: "Wallaby"
    },
    {
        question: "Which one of these names does not belong to a Hansen brother?",
        answers: ["Zac", "Jeremy", "Taylor", "Issac"],
        correctAnswer: "Jeremy"
    },
    {
        question: "What was the name of Britney Spears\'\ first song?",
        answers: ["Toxic", "...Baby One More Time", "Oops!...I Did It Again", "Womanizer"],
        correctAnswer: "...Baby One More Time"
    },
    {
        question: "Which basketball player was in Space Jam?",
        answers: ["Dennis Rodman", "Michael Jordan", "LeBron James", "Scotty Pippin"],
        correctAnswer: "Michael Jordan"
    },
]

//Displaying the Trivia questions as radio answers//

function displayQuestions(){
    for (var i = 0; i<questions.length; i++){
        $("#questions").append("<h2>" + questions[i].question +  "</h2>")
        for (var j = 0; j<questions[i].answers.length; j++){
            $("#questions").append(`<input type="radio" name="${i}" value="${questions[i].answers[j]}">${questions[i].answers[j]}</input>`)
        }

    }
}

//Verifying the answer submitted by the player//

$("#submit").on("click", function(){
    console.log("quiz submitted")
    var q1 = $("input[name= 0]:checked").val();
    var q2 = $("input[name= 1]:checked").val();
    var q3 = $("input[name= 2]:checked").val();
    var q4 = $("input[name= 3]:checked").val();
    var q5 = $("input[name= 4]:checked").val();
    var q6 = $("input[name= 5]:checked").val();
    var q7 = $("input[name= 6]:checked").val();
    var q8 = $("input[name= 7]:checked").val();


    //Scoring of the questions - including non-answers//

    console.log(q1, q2, q3, q3, q4, q5, q6, q7, q8)
    if (q1 == questions[0].correctAnswer){
        score++
    }
    if(q1 == undefined){
        wrong++
    }
        else wrong++

    if (q2 == questions[1].correctAnswer){
        score++
    }
    if(q2 == undefined){
        wrong++
    }
        else wrong++
    if (q3 == questions[2].correctAnswer){
        score++
    }
    if(q3 == undefined){
        wrong++
    }
        else wrong++
    if (q4 == questions[3].correctAnswer){
        score++
    }
    if(q4 == undefined){
        wrong++
    }
        else wrong++
    if (q5 == questions[4].correctAnswer){
        score++
    }
    if(q5 == undefined){
        wrong++
    }
        else wrong++
    if (q6 == questions[5].correctAnswer){
        score++
    }
    if(q6== undefined){
        wrong++
    }
        else wrong++
    if (q6 == questions[6].correctAnswer){
        score++
    }
    if(q6== undefined){
        wrong++
    }
        else wrong++
    if (q7 == questions[7].correctAnswer){
        score++
    }
    if(q7== undefined){
        wrong++
    }
        else wrong++
        
    console.log(score)
    console.log(wrong)
    $("#score").append("<h2>" + "Correct Answers: " + score +  "</h2>")
    $("#wrong").append("<h2>" + "Wrong Answers: " + wrong +  "</h2>")
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

//Freezing game if you don't finish in time//

