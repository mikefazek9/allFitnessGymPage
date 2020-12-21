const scrollBtn = document.querySelector(".scroll-btn")

const arrowUpBtn = document.querySelector(".fa-arrow-circle-up");

const navSection = document.querySelector(".nav_container")

const section1 = document.querySelector(".membership-container-lg")

scrollBtn.addEventListener('click', ()=>{
section1.scrollIntoView({behavior : 'smooth'});
});

arrowUpBtn.addEventListener('click', ()=>{
navSection.scrollIntoView({behavior:'smooth'})
})