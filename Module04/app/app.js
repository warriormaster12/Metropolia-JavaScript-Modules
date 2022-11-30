'use strict';

const form = document.querySelector('form');
const query = document.getElementById('query');
const submit = document.querySelector('input[type="submit"]');
const section = document.getElementById('pictures');
const dialog = document.querySelector('dialog');
const span = dialog.querySelector('span');
const iframe = dialog.querySelector('iframe');

let urlWithParams = "";


 

submit.addEventListener('click', function(e){
    e.preventDefault();
    searchResult();
});

query.addEventListener('keypress', function(e){
    urlWithParams = form.getAttribute('action')+"?q="+e.currentTarget.value;
    if (e.key === "Enter") {
        e.preventDefault();
        searchResult();
    }
});

async function searchResult() {
    if(urlWithParams != ""){
        const response = await fetch(urlWithParams);
        const result = await response.json();

        
        if (section.querySelectorAll('article').length > 0){
            for(let article of section.querySelectorAll('article')){
                article.remove();
            }
        }

        for(let currentObj of result){
            let article = document.createElement('article');
            article.className="card";
            let h2 = document.createElement('h2');
            h2.textContent = currentObj["show"]["name"];
            let figure = document.createElement('figure');
            {
                let img = document.createElement('img');
                if (currentObj["show"]["image"] != null) {
                    img.src = currentObj["show"]["image"]["medium"];
                }
                else {
                    img.src = `https://via.placeholder.com/210x295?text="image not found"`;
                }
                let p = document.createElement('p');
                p.innerHTML = currentObj["show"]["summary"];
                figure.appendChild(h2);
                figure.appendChild(img);
                figure.appendChild(p);
            }
            article.appendChild(figure);
            section.appendChild(article);

            article.addEventListener('click', function(evt) {
                dialog.showModal();
                iframe.src = currentObj["show"]["url"];
            });
        }
    }
}

span.addEventListener('click', function(evt) {
    dialog.close();
});

