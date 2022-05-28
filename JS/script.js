let bouttonConnexion = document.querySelector(".container__right__button");
let containerSignIn = document.querySelector(".container__signIn");
let containerSignUp = document.querySelector(".container__signUp");

bouttonConnexion.addEventListener("click", (e) => {
    e.preventDefault();
    if (containerSignIn.className = "block") {
        containerSignIn.className = " ";
        containerSignIn.className = "hidden";
        containerSignUp.className = " ";
        containerSignUp.className = "block";

    }

})