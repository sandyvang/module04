let dollarAmount = parseInt(window.prompt("Please enter dollar amount of service (5-500)."));
if (dollarAmount < 5 || dollarAmount > 500) {
    invalid();
}
let serviceQuality = window.prompt("Please enter tip percentage (great = 20%, okay = 15%, poor = 10%).");
if (serviceQuality != 20 && serviceQuality != 15 && serviceQuality != 10) {
    invalid();
}

let recommendedTip = tipFunction (dollarAmount, serviceQuality);
function tipFunction(a, b) {
    return ((a * b) / 100);
}

let overallTotal = total (dollarAmount, recommendedTip);
function total (x, y) {
    return x + y;
}

if (dollarAmount < 5 || dollarAmount > 500 && serviceQuality != 20 && serviceQuality != 15 && serviceQuality != 10) {
    end ();
} else {
    alert("Your total is $" + dollarAmount + "." + " Tip percentage is " + serviceQuality + "% for the service quality selected. " + " Recommended tip would be $" + recommendedTip + "." + " The new total including recommended tip would be  $" + overallTotal + ".");
}

function invalid() {
    alert("Invalid input");
}

function end() {
    alert("Thank you!");
}





