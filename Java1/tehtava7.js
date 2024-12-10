let noppien_määrä = prompt("monta noppaa haluat heittää??")

let summa = 0


for(let i = 0; i< noppien_määrä; i++){

    let arpakuutio = Math.floor(Math.random()*6)+1
    summa = summa + arpakuutio
}
console.log("silmälukujen summa on " + summa)
