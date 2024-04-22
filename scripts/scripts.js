/****************** 
 * 
 * YOUR NAME: Marian Estrada
*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE
var modelName = "XYZ";
var duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
function recalculate(duration, modelName) {
    var newtotal;
    let costLabel = document.getElementById("calculated-cost");
    if (modelName == "XYZ")
    {
        newtotal = duration * 100;
    }
    else if (modelName == "CPRG") {
        newtotal = duration * 213;
    } 
    costLabel.innerHTML = newtotal;
}


/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE
var modelButton = document.getElementById("model-button");

// Create a function called changeModel()
function changeModel() {
    var modelText = document.getElementById("model-text");
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate(duration, modelName); // Recalculate the total cost
}

// Attach the changeModel function to the "Switch Model" pseudo-button
modelButton.addEventListener("click", changeModel);


/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE
// Create a variable to represent the "Change Duration" pseudo-button
var durationButton = document.getElementById("duration-button");

// Create a function called changeDuration()
function changeDuration() {
    var durationText = document.getElementById("duration-text");
    duration = parseFloat(prompt("Enter a new duration:")); 
    durationText.innerHTML = duration; 
    recalculate(duration, modelName); 
}

// Attach the changeDuration function to the "Change Duration" pseudo-button
durationButton.addEventListener("click", changeDuration);

