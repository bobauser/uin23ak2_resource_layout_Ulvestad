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

    console.log(resources) // logs a HTMLCollection of all article elements under the first element with class "resourcecontainer"
    let catNameElements = Array.from(resources).filter(resource => resource.getElementsByClassName("catName").length > 0)
        .map(resource => resource.getElementsByClassName("catName")[0]);
    console.log(catNameElements);

    let categoryToEnable = Array.from(catNameElements).filter(catName => catName.textContent === category)
        .map(catName => {
            if(catName.textContent === category){
                return catName.parentElement;
            }
        });
    Array.from(categoryToEnable).forEach(article => {
        article.classList.remove("hidden")
    })
    console.log(categoryToEnable);


}