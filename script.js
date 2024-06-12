
const inputelement = document.querySelector(".inputelement")
const btn = document.querySelector(".btn")
const h1element = document.querySelector(".h1element")

btn.addEventListener("click", translate);

let url = "https://api.funtranslations.com/translate/minion.json"

function translate() {
    let inputvalue = inputelement.value;
    newurl = `${url}?text=${inputvalue}`
    fetch(newurl).then((data) => data.json()).then((data) => {
        console.log(data);
        h1element.innerHTML = data.contents.translated;

    })
}
//---------------------speak----------------

let speech = new SpeechSynthesisUtterance();
const spee = document.querySelector(".speak")
let voiceSelect = document.querySelector("select");


spee.addEventListener("click", () => {
    console.log(h1element)
    speech.text = h1element.innerHTML;
    window.speechSynthesis.speak(speech);
})

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)))
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});
