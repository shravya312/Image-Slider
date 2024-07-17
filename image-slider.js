const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const imgE1=document.querySelectorAll("img");
let currentimg=1;
const imgcont=document.querySelector(".image-container");
let timeout;

next.addEventListener("click",()=>{
    currentimg++;
    clearTimeout(timeout);
    updateimg();
})
prev.addEventListener("click",()=>{
    currentimg--;
    clearTimeout(timeout);
    updateimg();
})
updateimg();
function updateimg(){
    if(currentimg>imgE1.length){
        currentimg=1;
    }else if(currentimg<1){
        currentimg=imgE1.length;
    }
    imgcont.style.transform=`translateX(-${(currentimg-1)*500}px)`;
    clearTimeout(timeout);
    timeout=setTimeout(()=>{
        currentimg++;
        updateimg();
    },3000)
}
