'use strict';


const hakuAlku = "https://api.tvmaze.com/search/shows?q="

const tulosAlue = document.querySelector('#results')

const tvForm = document.querySelector('#tv');

tvForm.addEventListener('submit', async function (evt) {

    evt.preventDefault();
    const hakuArvo = document.querySelector('input[name=q]').value;
    const hakuLause = hakuAlku + hakuArvo

    try {
        const response = await fetch(
            hakuLause
        );
        const jsonData = await response.json();

        kasitteleData(jsonData)
    } catch (error) {
        console.log(error.message);
    }
});

function kasitteleData(jsonData) {
    tulosAlue.innerHTML = ``

    for (let tvSarja of jsonData) {

        let h2Elem = document.createElement('h2')
        h2Elem.innerText = tvSarja.show.name


        const urlElem = document.createElement('a');
        urlElem.href = tvSarja.show.url;
        urlElem.innerText = 'Linkki yksityiskohtiin';
        urlElem.target = '_blank';

        const imgElem = document.createElement('img');
        imgElem.src = tvSarja.show.image?.medium;
        imgElem.alt = tvSarja.show.name;

        const divElem = document.createElement('div');
        divElem.innerHTML = tvSarja.show.summary;

        const articleElem = document.createElement('article');
        articleElem.appendChild(h2Elem);
        articleElem.appendChild(urlElem);
        articleElem.appendChild(imgElem);
        articleElem.appendChild(divElem);

        tulosAlue.appendChild(articleElem);


        tulosAlue.append(articleElem)
    }
}
