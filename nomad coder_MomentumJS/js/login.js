const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greetingMessage = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

// show form -> submit input -> prevent event -> hide form / save, paint input 

const emoji = ["🎉", "🎀", "💭", "🔆", "💎", "🎱", "🥑", "🍒", "✨", "🌎", "💫", "🍀", "🌷", "🐰", "👑", "🧚", "🧙‍♀️", "👾", "👻"];

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreeting();
}

function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY);
    greetingMessage.classList.remove(HIDDEN_CLASSNAME);
    greetingMessage.innerText = `Welcome ${username} ${emoji[Math.floor(Math.random()*19)]}`;
}




const savedUsername = localStorage.getItem(USERNAME_KEY);

// Control FLow
if(savedUsername == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting();
}