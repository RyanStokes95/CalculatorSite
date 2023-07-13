var buttons = document.getElementsByClassName("numberBtn")
var screen = document.getElementById("inputScreen")
var clear = document.getElementById("clear")
var plus = document.getElementById("plus")
var minus = document.getElementById("minus")
var multiply = document.getElementById("multiply")
var divide = document.getElementById("divide")
var equals = document.getElementById("equals")
var numberOne = null
var operator = ""
var numberTwo = null
var result = null

function numberSetUp(){
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

function clearSetUp(){
    clear.addEventListener("click", clearFunc => {
        screen.innerHTML = "";
        }
    )
    numberOne = null
    numberTwo = null
    result = null
    operator = ""
}

clearSetUp();

function operatorSetUp(){
    plus.addEventListener("click", plusFunc => {
        numberOne = parseFloat(screen.innerHTML)
        screen.innerHTML = ""
        operator = "plus"
        }
    )
    minus.addEventListener("click", minusFunc => {
        numberOne = screen.innerHTML
        screen.innerHTML = ""
        operator = "minus"
        }
    )
    multiply.addEventListener("click", multiplyFunc => {
        numberOne = screen.innerHTML
        screen.innerHTML = ""
        operator = "multiply"
        }
    )
    divide.addEventListener("click", divideFunc => {
        numberOne = screen.innerHTML
        screen.innerHTML = ""
        operator = "divide"
        }
    ) 
}

operatorSetUp()

function equalsSetUp(){
    equals.addEventListener("click", equalsFunc => {
            if (numberOne != null) {
                if (operator == "plus") {
                    numberTwo = parseFloat(screen.innerHTML)
                    result = numberOne + numberTwo
                    screen.innerHTML = result
                }
                else if(operator == "minus"){
                    numberTwo = parseFloat(screen.innerHTML)
                    result = numberOne - numberTwo
                    screen.innerHTML = result
                }
                else if(operator == "multiply"){
                    numberTwo = parseFloat(screen.innerHTML)
                    result = numberOne * numberTwo
                    screen.innerHTML = result
                }
                else if(operator == "divide"){
                    numberTwo = parseFloat(screen.innerHTML)
                    result = numberOne / numberTwo
                    screen.innerHTML = result
                }
                else{
                    alert("Error")
                }
            }
            }
        )
}

equalsSetUp()
    
