"use strict";
const selectText = document.getElementById("selectText");
const inputText = document.getElementById("inputText");
const btn = document.getElementById("btn");

const ttr = window.speechSynthesis;
let voices = [];

GetVoices();
if(speechSynthesis !== undefined){
  speechSynthesis.onvoiceschanged = GetVoices;
}
btn.addEventListener("click", () => {
const toSpeak = new SpeechSynthesisUtterance(inputText.value)
const selectedVoiceName = selectText.selectedOptions[0].getAttribute("data-name");
voices.forEach((voice) => {
  if(voice.name === selectedVoiceName){
    toSpeak.voice = voice;
  }
})
ttr.speak(toSpeak)
})
function GetVoices() {
  voices= ttr.getVoices();

  selectText.innerText =``;
  voices.forEach(voice => {
    const Item = document.createElement("option");
    Item.textContent = voice.name;
    Item.setAttribute ("data-lang", voice.lang)
    Item.setAttribute("data-name", voice.name)
    selectText.appendChild(Item);
  });
  selectText.selectIndex = 0;
}