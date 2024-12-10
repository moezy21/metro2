`use strict`


const hakuAlku = document.querySelector("form");
hakuAlku.addEventListener(`submit`, async function (evt) {
    evt.preventDefault();
    const code = document.querySelector('input[name="q"]').value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${code}`);
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.error(error.message);
    }
});
