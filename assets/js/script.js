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
    let NouvelleTache = document.createElement("li");
    NouvelleTache.id = "idTache";
    NouvelleTache.innerText = INPUT_TEXT.value
    document.getElementById("liste-taches").appendChild(NouvelleTache);
    INPUT_TEXT.value = "";
}