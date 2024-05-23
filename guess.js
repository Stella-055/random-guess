let textplace=document.getElementById("textarea");
let datacont= document.getElementById("dataitems");
textplace.focus();
let randoms;
textplace.addEventListener("keyup",(e)=>{
    createelement(e.target.value)
   if(e.key==="Enter"){
    setTimeout(() => {
        e.target.value="";
    }, 100);
     randoms= setInterval(random,100)
     setTimeout(clear,1500)
   }

});
   function createelement(tag){
    let input= tag.split(",").filter(tag => tag.trim() !== "");
    datacont.innerHTML="";
   input.forEach((tag)=> {
    let newdata=document.createElement("span");
    newdata.textContent=tag.trim();
    datacont.appendChild(newdata);
   });
}
function random(){
    let tags =document.querySelectorAll("span")
 let randomdata=Math.floor( Math.random()*tags.length);
 tags[randomdata].classList.add("dataitems");
 setTimeout(()=>{
  tags[randomdata].classList.remove("dataitems");
 },80)
}
function clear(){
    clearInterval(randoms)
    let tags =document.querySelectorAll("span")
 let randomdata=Math.floor( Math.random()*tags.length);
 tags[randomdata].classList.add("dataitems");

}