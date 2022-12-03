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
    query.clear
});

['change', 'focusout', 'keypress'].forEach(function(e){
    query.addEventListener(e, function(event){
        urlWithParams = form.getAttribute('action')+"?q="+event.currentTarget.value;
        if (event.key === "Enter") {
            event.preventDefault();
            searchResult();
        }
    });
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
                let summary = document.createElement('p');
                let genres = document.createElement('p');
                for(let i = 0; i < currentObj["show"]["genres"].length; i++) {
                    if(i == 0) {
                        let strong = document.createElement('strong');
                        strong.textContent = "Genres: "
                        genres.appendChild(strong);
                        genres.appendChild(document.createTextNode(currentObj["show"]["genres"][i]));
                    }else{
                        genres.appendChild(document.createTextNode(" | "+currentObj["show"]["genres"][i]));
                    }
                }
                summary.innerHTML = currentObj["show"]["summary"];
                figure.appendChild(h2);
                figure.appendChild(img);
                if(currentObj["show"]["genres"].length > 0)  {
                    figure.appendChild(genres);
                }
                if(currentObj["show"]["summary"] != "") {
                    figure.appendChild(summary);
                }
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

