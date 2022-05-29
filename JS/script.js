let bouttonSignUp = document.getElementById("btnSignUp");
let bouttonSignIn = document.getElementById("btnSignIn");
let containerSignIn = document.getElementById("signIn");
let containerSignUp = document.getElementById("signUp");
let boutonEnvoieSignIn = document.getElementById("btnEnvoieSignIn");

bouttonSignIn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    containerSignIn.classList.add("active");
})
bouttonSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    containerSignIn.classList.remove("active");
})
boutonEnvoieSignIn.addEventListener("click", (e3) => {
    e3.preventDefault();
})