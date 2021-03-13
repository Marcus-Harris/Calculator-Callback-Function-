// links a variable to the submit button
var subButton = document.querySelector('#submitbutton');

// function to display results in the output field
function myDisplayer(sum) {
    document.querySelector("#outputfield").innerHTML = sum; 
}

// function to add two numbers
function myAddition(num1, num2) {
    // links a variable to the first input field value
    var num1 = document.querySelector('#inputfield1').value;

    // links a variable to the second input field value
    var num2 = document.querySelector('#inputfield2').value;

    // Creates an alert if either field is blank
    if ((num1 === '') || (num2 === '')) {
        alert("An input field is blank!");
    }
    // runs the addition function if the fields are not blank
    else {
        let total = Number(num1) + Number(num2);
        myDisplayer(total);
    };

};

// Assigns a click function to the submit button, which will launch the "myAddition" function
subButton.addEventListener('click', function(event){
    myAddition();
})