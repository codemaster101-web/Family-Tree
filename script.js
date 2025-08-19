function openDetails(person) {
  let details = {
    john: "John Smith (1870–1945) was a farmer who loved music and fought in WWI.",
    mary: "Mary Johnson (1875–1950) was a school teacher and piano player."
  };

  document.getElementById("detailsText").innerText = details[person];
  document.getElementById("detailsModal").style.display = "block";
}

function closeDetails() {
  document.getElementById("detailsModal").style.display = "none";
}

function playName(name, event) {
  event.stopPropagation(); // stop modal opening
  let msg = new SpeechSynthesisUtterance(name);
  speechSynthesis.speak(msg);
}
