function generator(event) {
  event.preventDefault();

  let resultElement = document.querySelector("#results");
  new Typewriter("#results", {
    strings: "Wearable Medical Devices and Remote Patient Monitoring",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let formElement = document.querySelector("#generate-result");
formElement.addEventListener("submit", generator);
