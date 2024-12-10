let number = prompt("Anna numero");

alkuluku = true

for(let i = 2; i<number;i++){
    if(number%i===0){
        alkuluku = false;
        break;
    }
}

if(alkuluku){
    document.querySelector("#target").innerHTML= number + " luku on alkuluku"
}

else{
    document.querySelector("#target").innerHTML = number + " luku ei ole alkuluku"
}
