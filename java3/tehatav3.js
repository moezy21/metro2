'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let i = 0; i < names.length; i++){
    const li = document.createElement("li")
    li.innerHTML = `<li> ${names[i]} </li>`
    document.querySelector("#target").appendChild(li)
}
