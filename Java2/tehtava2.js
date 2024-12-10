let osallistujat = +prompt("monta osallistujaa haluat");
const nimet = [];

for (let i = 1; i <= osallistujat; i++) {
  let henkilon_nimi = prompt("sano osallistujien nimet");
  nimet.push(henkilon_nimi);
}
nimet.sort()


for (let i = 0; i < nimet.length; i++) {
    let henkilon_nimi = document.createElement("ul")
    henkilon_nimi.innerText = nimet [i]
    document.querySelector("#target").appendChild(henkilon_nimi)
}
