window.onload = function() { /*
    fetch('ressurser.js')
        .then(response => response.text())
        .then(data => {
            eval(data);
            let elementList = resources.map(resource => resource.category);
            console.log(elementList);
        });
    Fjernet koden fordi her trengte jeg bare å referere js filen direkte inn i htmlen
        */
    let listHTML = ""
    let elementList = resources.map(resource => resource.category);
    //console.log(elementList);
    elementList.map(category => { //navnet her er viktig, ettersom den må brukes for å få tilgang på verdien til variabelen i elementlist
        listHTML += `<button onclick="showCategory('${category}')" class="catButton">${category}</button>`;
    });
    document.querySelector(".catButtons").innerHTML = listHTML


    listHTML = "";
    resources.map(resource => {
        listHTML += `<article class="hidden">
                <p class="catName">${resource.category}</p>
                <p>${resource.text}</p>
                <ul>`;
        resource.sources.map(source => {
            listHTML += `<li><a href="${source.url}">${source.title}</a></li>`;
        });
        listHTML += `</ul>
            </article>`;
    });
    listHTML += `
            <article>
                <p class="info">No items to display</p>
            </article>`

    document.querySelector(".resourcecontainer").innerHTML = listHTML;

}

function showCategory(category) {
    let btns = document.getElementsByClassName("catButton");
    Array.from(btns).forEach(b => {
        b.classList.remove("catactive")
        if (b.textContent === category) {
            b.classList.add("catactive")
        }
    })
    let resourceContainers = document.getElementsByClassName("resourcecontainer")
    let resources = resourceContainers[0].getElementsByTagName("article")

    Array.from(resources).forEach(resource => {
        resource.classList.add("hidden");
    });

    //console.log(resources) // logs a HTMLCollection of all article elements under the first element with class "resourcecontainer"
    let catNameElements = Array.from(resources).filter(resource => resource.getElementsByClassName("catName").length > 0)
        .map(resource => resource.getElementsByClassName("catName")[0]);
    //console.log(catNameElements);

    let categoryToEnable = Array.from(catNameElements).filter(catName => catName.textContent === category)
        .map(catName => {
            if(catName.textContent === category){
                return catName.parentElement;
            }
        });
    Array.from(categoryToEnable).forEach(article => {
        article.classList.remove("hidden")
    })
    //console.log(categoryToEnable);
}