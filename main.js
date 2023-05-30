window.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById('btn');
    let input = document.querySelector('.champNom');   
    

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let valeur = input.value;
        let conteneur = document.querySelector('.affiche_nom');  
        conteneur.innerHTML = valeur;

    });
});