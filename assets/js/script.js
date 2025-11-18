// ====================================================
// =  Déclaration des variables globales              =
// ====================================================

const INPUT_TEXT = document.getElementById("saisie-tache");

const ajouterTache = document.getElementById("boutonPlus");

// ====================================================
// =  Déclaration des événements                      =
// ====================================================

ajouterTache.addEventListener("click", newLi);

INPUT_TEXT.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    newLi();
  }
});

// ====================================================
// =  Code qui sera exécuté au chargement de la page  =
// ====================================================



// ====================================================
// =  Déclaration des fonctions                       =
// ====================================================

function newLi(){
    let NouvelleTache = document.createElement("newli");
    NouvelleTache.classList.add("tache")
    NouvelleTache.innerText = INPUT_TEXT.value
    document.getElementsByClassName("liste liste-afaire").appendChild(NouvelleTache);
    INPUT_TEXT.value = "";
}