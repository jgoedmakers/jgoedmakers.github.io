/*eslint-env browser*/

function analyze(event) {
    //declare variables
    var form1 = document.querySelector("#form1");
    var results = document.querySelector("#results");
    var max, min, avg, med, rng = 0;
    
    form1.first.style.backgroundColor = "Green";
    form1.second.style.backgroundColor = "Green";
    form1.third.style.backgroundColor = "Green";

    //check for empty inputs
    if (form1.first.value === "") {
        form1.first.style.backgroundColor = "red";
    }
    if (form1.second.value === "") {
        form1.second.style.backgroundColor = "red";
    }
    if (form1.third.value === "") {
        form1.third.style.backgroundColor = "red";
    }
        
    //calculations
    max = Math.max(form1.first.value, form1.second.value, form1.third.value);
    min = Math.min(form1.first.value, form1.second.value, form1.third.value);
    avg = (form1.first.value + form1.second.value + form1.third.value) / 3;
    if (form1.first.value !== max && form1.first.value !== min) {
        med = form1.first.value;
    }
    else if (form1.second.value !== max && form1.second.value !== min) {
        med = form1.second.value;
    }
    else {
        med = form1.third.value;
    }
    rng = max - min;
    
    //display results
    results.maximum.innerHTML(max);
    results.minimum.innerHTML(min);
    results.average.innerHTML(avg);
    results.median.innerHTML(med);
    results.range.innerHTML(rng);

    
    
}

//Runs the analyzer on the button press
var form1 = document.querySelector("#form1");
var results = document.querySelector("#results");
form1.calculate.addEventListener("click", analyze);