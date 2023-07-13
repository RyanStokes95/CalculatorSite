var buttons = document.getElementsByClassName("numberBtn")
var screen = document.getElementById("inputScreen")
var clear = document.getElementById("clear")

function numberSetUp(){
    for (let i = 0; i < buttons.length; i++) {
        var values = [7,8,9,4,5,6,1,2,3,0]
        buttons[i].value = values[i]
        buttons[i].addEventListener("click", print = () => {
            screen.innerHTML += buttons[i].value;
            }
        )
    }
}

numberSetUp();

function clearSetUp(){
    clear.addEventListener("click", clearFunc = () => {
        screen.innerHTML = "";
        }
    )
}

clearSetUp();