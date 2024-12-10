const koirat = [];


    for(let i = 1; i<=6; i++){
      const nimet = prompt("Sano kuuden koiran nimet")
        koirat.push(nimet)
    }
koirat.reverse()

    for(let i = 0; i< koirat.length; i++){
       let nimet = document.createElement("li")
       nimet.innerText = koirat[i]
       document.querySelector("#target").appendChild(nimet)
    }

