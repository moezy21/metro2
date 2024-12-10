const opiskelijan_nimi = prompt("mikä on nimesi")


random_num = Math.floor(Math.random()*4)+1;


switch (random_num){
    case 1:
        document.querySelector("#target").innerHTML = opiskelijan_nimi + " Olet giffindor"
        break
    case 2:
        document.querySelector("#target").innerHTML= opiskelijan_nimi + " olet Slytherin"
        break
    case 3:
        document.querySelector("#target").innerHTML= opiskelijan_nimi + " olet Hufflepuff"
        break
    case 4:
        document.querySelector("#target").innerHTML= opiskelijan_nimi + " olet  Ravenclaw"
        break

}
