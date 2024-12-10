let numbers = []

while(true){
    let luku = prompt("syötä numero: (0 ohjelma pysäytetään)")
    if (luku == 0){
        break;
    }else{
        numbers.push(parseInt(luku))
    }
}

numbers.sort((a,b) => b-a);

console.log(numbers)
