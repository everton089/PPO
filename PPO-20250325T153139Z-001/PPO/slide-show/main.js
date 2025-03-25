const imagens = [
    {"id": "1", "url": "./assets/dog.jpg"},
    {"id": "2", "url": "./assets/cat-2.jpg"},
    {"id": "3", "url": "./assets/cat-3.jpg"},
    {"id": "4", "url": "./assets/cat-4.jpg"},
    {"id": "5", "url": "./assets/cat-5.jpg"},
    {"id": "6", "url": "./assets/cat-6.jpg"},
]
const containerItem = document.querySelector(".containerItem")

function loadImgs( imagens, containerItem ){
    imagens.forEach(imagens => {
        containerItem.innerHTML += `
        <div class = "item">
        <img src = "${imagens.url}">
        </div>
        `
    });
}
    loadImgs( imagens, containerItem )

    let item = document.querySelectorAll(".item")
    let previous = document.querySelector("#previous")
    let next = document.querySelector("#next")
    
    function anterior(){
        containerItem.appendChild(item[0])
         item = document.querySelectorAll(".item")
    }

    function prox(){
        const lastItem = item[item.length - 1]
        containerItem.insertBefore(lastItem, item[0])
         item = document.querySelectorAll(".item")
    }

    previous.addEventListener("click", anterior)
    next.addEventListener("click", prox)
