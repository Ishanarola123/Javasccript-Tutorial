var hour = 0;
var min = 0;
var second = 0;
var count = 0;

var timer = false;

function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;

}

function reset() {
    timer = false;
    hour = 00;
    second = 00;
    min = 00;
    count = 00;
    document.getElementById("hour").innerHTML = 00;
    document.getElementById("min").innerHTML = 00;
    document.getElementById("second").innerHTML = 00;
    document.getElementById("count").innerHTML = 00;

}




function stopwatch() {

    if (timer == true) {
        count = count + 1;
        if (count == 100) {
            second = second + 1;
            count = 0;
        }
        if (second == 60) {
            min = min + 1;
            second = 0;
        }
        if (min == 60) {
            hour = hour + 1;
            min = 0;
            second = 0;
        }
        document.getElementById("hour").innerHTML = hour;
        document.getElementById("min").innerHTML = min;
        document.getElementById("second").innerHTML = second;
        document.getElementById("count").innerHTML = count;
        setTimeout("stopwatch()", 10);

    }

}

