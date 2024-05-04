/* Exercice des tabs  */
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        tabs.forEach(tab => tab.classList.remove('tab-active'));
        contents.forEach(content => content.classList.remove('active'));
        
        this.classList.add('tab-active');
        
        if (this.classList.contains('tab-tab1')) {
          document.querySelector('.content-tab1').classList.add('active');
        } else if (this.classList.contains('tab-tab2')) {
          document.querySelector('.content-tab2').classList.add('active');
        } else if (this.classList.contains('tab-tab3')) {
          document.querySelector('.content-tab3').classList.add('active');
        }
      });
    });
  });

/* Exercice dark mode  */
let darkModeButton = document.getElementById('darkModeButton');
let body = document.body;
darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
/* Exercice caroussel */
/* const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");

// Tableau d'image : [0, 1, 2]

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".active");

    newIndex = calcNextSlide + [...slides].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex >= [...slides].length) newIndex = 0;
    slides[newIndex].classList.add("active");

    slideActive.classList.remove("active");
  });
}); */

/* Exercice API harry potter */

fetch('https://hp-api.lainocs.fr/characters')
.then((Response) => Response.json())
.then((data) => {
    console.log(data)
})  
 
function fetchSorcier(sorcier){ 
return fetch('https://hp-api.lainocs.fr/characters/'+ sorcier)
.then((reponse)=>reponse.json())
}


async function displaySorcier(sorcier) {
const data = await fetchSorcier(sorcier)
  let sorcierList = document.querySelector("#sorcier")

sorcierList.innerHTML =`
<h1>${data.name}</h1>
<h2>${data.house}</h2>

<img class="ImagesSorcier" src="${data.image}" alt=${data.name} />
` }

displaySorcier ("harry-potter")
displaySorcier("ron-weasley")
displaySorcier("draco-malfoy")
