//Setting Timer//

var counter = 100;
$('p').text(counter);

function decreaseCounter(){
    counter--;
    $('p').text(counter);
}

var timeOut = setInterval(decreaseCounter, 1*1000);