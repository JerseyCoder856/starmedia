const menu=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("active");

}


window.addEventListener("scroll",()=>{

let navBar=document.querySelector(".navbar");

if(window.scrollY>50){

navBar.style.padding="18px 8%";

navBar.style.background="rgba(0,0,0,.8)";

}else{

navBar.style.padding="25px 8%";

navBar.style.background="rgba(0,0,0,.4)";

}

});


const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

})

})


document.querySelectorAll(".card,.project,.price-card").forEach(el=>{

observer.observe(el)

})
