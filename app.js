const panels = document.querySelectorAll(".card");
panels.forEach( card => { 
    card.addEventListener("click", () => {
        removeActive();
        card.classList.add("active");

})

})


function removeActive() {

panels.forEach (card => {

card.classList.remove("active");
 })
 }