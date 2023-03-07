// Bouton
const button = document.querySelector('button');

// ask
const ask = document.querySelector('.ask');

// profile
const profile = document.querySelector('.profile');

// sélectionner la photo de profil et le nom
const profilePic =  profile.children[0].firstElementChild;
const nameSpace = profile.children[0].firstElementChild.nextElementSibling;

// modifier profile
const modify = document.querySelector('.fa-gear');

// fonction pour afficher le profile
function displayProfile() {
    ask.style.transform = "translate(-350%, -50%)";
    profile.style.transform = "translate(-50%, -50%)";
    profilePic.style.backgroundImage = `url('${localStorage.getItem("avatar")}')`;
    nameSpace.innerHTML = localStorage.getItem("name");
}

// fonction pour afficher le formulaire
function displayAsk() {
    ask.style.transform = "translate(-50%, -50%)";
    profile.style.transform = "translate(350%, -50%)";
}

// fonction pour check si le storage est plein
function checkStorage() {
    if (localStorage.getItem("name") == null || localStorage.getItem("avatar") == null) {
        displayAsk();
    } else {
        displayProfile();
    }
    console.log(localStorage);
}

// appeler la fonction check
checkStorage();

// fonction pour créer le profile
function newProfile(name, avatar) {
    localStorage.clear;
    localStorage.setItem("name", name);
    localStorage.setItem("avatar", avatar);
}

// ajouter un event click pour créer le profil
button.addEventListener("click", () => {
    const name = document.querySelector('.name');
    const avatar = document.querySelector('.avatar');
    newProfile(name.value, avatar.value)
    displayProfile();
})

// pour modifier le profil
modify.addEventListener("click", () => {
    displayAsk();
})

// https://as2.ftcdn.net/v2/jpg/03/09/97/57/1000_F_309975771_1LcdaVK6D7eokEDzaAInNBGOG5tA9M80.jpg