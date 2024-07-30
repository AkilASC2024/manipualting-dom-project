let addParaButton = document.querySelector("#p-button")
let addImgButton = document.querySelector("#img-button");
let pDiv = document.querySelector("#p-div");
let imgDiv = document.querySelector("#img-div");

function addImage(){
    let newBlocky = document.createElement("img");
    newBlocky.src = "realblockyimage.webp";
    imgDiv.appendChild(newBlocky);
}

addImgButton.addEventListener("click",addImage);

function addPara(){
    let newParagraph = document.createElement("textarea");
    newParagraph.innerText = "shark pog"
    newParagraph.style.backgroundColor = "black"
    newParagraph.style.color = "white"
    newParagraph.style.width = "100%"
    pDiv.appendChild(newParagraph);
}

addParaButton.addEventListener("click", addPara)