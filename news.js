console.log("hello");
//6e03379d248946c09abfc681b8e6d4a8
let newc=document.getElementById('news');
let src='bbc-news';
let apik='6e03379d248946c09abfc681b8e6d4a8';
const xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${src}&apiKey=${apik}`,true);
xhr.getResponseHeader('Content-type','application/json');

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        //console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let ne = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                <b>Breaking News${index+1}:</b>${element["title"]}
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>
              </div>
            </div>
          </div>`;
            newsHtml += ne;
        });
        newc.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();

