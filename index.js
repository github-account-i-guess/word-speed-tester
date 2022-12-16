const textarea = document.querySelector("#textarea");
const wpmDisplay = document.querySelector("#wpm-display");
const resetButton = document.querySelector("#reset-button");
const timeDisplay = document.querySelector("#time-display");

let timeout;
let typingStarted;
let timeLeft;
let interval;
textarea.addEventListener("keypress", event => {
    if (!typingStarted) {
        timeout = setTimeout(typingEnd, 60 * 1000);
        timeLeft =  60 * 1000;
        interval = setInterval(() => {
            timeDisplay.innerHTML = "Time left: " + timeLeft/1000;
            timeLeft -= 500;
        }, 500);
        typingStarted = true;
    }    
    
});

resetButton.addEventListener("click", event => {
    typingStarted = false;
    textarea.value = "";
    textarea.removeAttribute("disabled");
    clearTimeout(timeout);
});

const typingEnd = () => {
    console.log("e");
    textarea.setAttribute("disabled", "true");
    typingStarted = false;

    const { value } = textarea;
    splitValue = [];
    value.split(" ").forEach(v => {
        v.split("\n").forEach(v2 => splitValue.push(v2));
    });

    const wordCount = splitValue.filter(v => v).length;
    wpmDisplay.innerHTML = "WPM: " + wordCount;
}