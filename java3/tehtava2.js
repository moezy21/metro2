const ul = document.createElement("li")

ul.innerHTML = `<li>first item</li>`+ `<li>second item</li>` + `<li>third item</li>`

document.querySelector("#target").appendChild(ul)
