const generatememebtn =document.querySelector(".meme-generator .generate-meme-btn");
const memeimage=document.querySelector(".meme-generator img");
const memetitle=document.querySelector(".meme-generator .meme-title");
const memeauthor=document.querySelector(".meme-generator .meme-author");


const updatedetails =(url,title,author) =>{
    memeimage.setAttribute("src",url);
    memetitle.textContent=title;
    memeauthor.innerHTML =`Meme By: ${author}`;
}

const generatememe = ()=>{
        fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) =>response.json())
        .then(data =>{
         updatedetails(data.url,data.title,data.author);
         })            
};

generatememebtn.addEventListener("click",generatememe);