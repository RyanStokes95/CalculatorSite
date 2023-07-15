// Constant Declarations
const buttons = document.getElementsByClassName("numberBtn")
const screen = document.getElementById("inputScreen")
const clear = document.getElementById("clear")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
const equals = document.getElementById("equals")
// Variable Declarations
var numberOne = null
var operator = ""
var numberTwo = null
var result = null

// Buttons Assigned Values
function numberSetUp(){
    /*Loops through all numberBtn classes, assigns the 
    value to the corresponding value in the values array.
    eg. Buttons[1] = values[1]*/
    for (let i = 0; i < buttons.length; i++) {
        var values = [7,8,9,4,5,6,1,2,3,0]
        buttons[i].value = values[i]
        buttons[i].addEventListener("click", print => {
            screen.innerHTML += buttons[i].value;
            }
        )
    }
}

numberSetUp();

//Sets up the clear button, which assigns all calculation variables to their original value.
function clearSetUp(){
    clear.addEventListener("click", clearFunc => {
        screen.innerHTML = "";
        numberOne = null
        numberTwo = null
        result = null
        operator = ""
        }
    )

}

clearSetUp();

//Following functions set up the operator buttons (+, -, *, /)
function operatorSetUp(){
    plus.addEventListener("click", plusFunc => {
        if (result == null) {
            //Will only run during the first calculation
            //When operator is pushed first value is stored and screen is cleared
            numberOne = parseFloat(screen.innerHTML)
            screen.innerHTML = ""
            operator = "plus"
        }
        else{
            //This will run when the user wishes to perform further calculations on a result
            numberOne = parseFloat(screen.innerHTML)
            screen.innerHTML = ""
            operator = "plus"
            result = null
        }

    })
    
    minus.addEventListener("click", minusFunc => {
        if (result == null) {
            //Will only run during the first calculation
            //When operator is pushed first value is stored and screen is cleared
            numberOne = parseFloat(screen.innerHTML)
            screen.innerHTML = ""
            operator = "minus"
        }
        else{
            //This will run when the user wishes to perform further calculations on a result
            numberOne = parseFloat(screen.innerHTML)
            screen.innerHTML = ""
            operator = "minus"
            result = null
        }

    })

    multiply.addEventListener("click", multiplyFunc => {
        if (result == null) {
            //Will only run during the first calculation
            //When operator is pushed first value is stored and screen is cleared
            numberOne = parseFloat(screen.innerHTML)
            screen.innerHTML = ""
            operator = "multiply"
        }
        else{
            //This will run when the user wishes to perform further calculations on a result
            numberOne = parseFloat(screen.innerHTML)
            screen.innerHTML = ""
            operator = "multiply"
            result = null
        }
    })

    divide.addEventListener("click", divideFunc => {
        if (result == null) {
            //Will only run during the first calculation
            //When operator is pushed first value is stored and screen is cleared
            numberOne = parseFloat(screen.innerHTML)
            screen.innerHTML = ""
            operator = "divide"
        }
        else{
            //This will run when the user wishes to perform further calculations on a result
            numberOne = parseFloat(screen.innerHTML)
            screen.innerHTML = ""
            operator = "divide"
            result = null
        }
        }) 
    }

operatorSetUp()


function equalsSetUp(){
    equals.addEventListener("click", equalsFunc => {
            if (numberOne != null) {
                if (operator == "plus") {
                    if (result == null) {
                        numberTwo = parseFloat(screen.innerHTML)
                        result = numberOne + numberTwo
                        screen.innerHTML = result
                    }
                    else{
                        result = parseFloat(screen.innerHTML)
                        result += numberTwo
                        screen.innerHTML = result
                    }
                    
                }
                else if(operator == "minus"){
                    if (result == null) {
                        numberTwo = parseFloat(screen.innerHTML)
                        result = numberOne - numberTwo
                        screen.innerHTML = result
                    }
                    else{
                        result = parseFloat(screen.innerHTML)
                        result -= numberTwo
                        screen.innerHTML = result
                    }
                }
                else if(operator == "multiply"){
                    if (result == null) {
                        numberTwo = parseFloat(screen.innerHTML)
                        result = numberOne * numberTwo
                        screen.innerHTML = result
                    }
                    else{
                        result = parseFloat(screen.innerHTML)
                        result *= numberTwo
                        screen.innerHTML = result
                    }
                }
                else if(operator == "divide"){
                    if (result == null) {
                        numberTwo = parseFloat(screen.innerHTML)
                        result = numberOne / numberTwo
                        screen.innerHTML = result
                    }
                    else{
                        result = parseFloat(screen.innerHTML)
                        result /= numberTwo
                        result = result.toFixed(10)
                        screen.innerHTML = result
                    }
                }
            }
        })
}

equalsSetUp()
    
