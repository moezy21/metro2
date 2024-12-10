kysymys = confirm('Should I calculate the square root?');

if (kysymys == true) {

     numero = prompt(" input a number");

    if (numero < 0) {
        document.querySelector("#target").innerHTML = "You cannot calculate the square root of a negative number"
    } else {
        document.querySelector("#target").innerHTML = "The defined number is " + Math.sqrt(numero)
    }


} else {
    document.querySelector("#target").innerHTML = "The square root is not calculated."
}
