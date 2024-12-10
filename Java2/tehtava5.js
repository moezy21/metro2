const numbers = [];

while (true) {
    const luvut = prompt("Syötä luku (lopeta syöttämällä 'sama luku kaksi kertaa '):")
    const sama_luku = parseInt(luvut)
    if(numbers.includes(sama_luku)){
        break;
    }

    numbers.push(sama_luku)
}

numbers.sort((a,b) => a-b);

console.log(numbers)
