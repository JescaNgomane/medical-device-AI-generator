function displayResults(response) {
  console.log("loaded");
  new Typewriter("#results", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generator(event) {
  event.preventDefault();

  let inputElement = document.querySelector("#search-bar");
  let apiKey = "8b28ob4022ta8eb8ef00a2f473170403";
  let prompt = `user instructions: Generate the information about ${inputElement.value}`;
  let context =
    "You are an AI full of technology knowldge and biomedical engineering , please Make sure to provide a clear and precise answer about information on the medical device separate each fact in it's line using HTML </br> with a heading in a paragraph format of 5 lines with a heading of 16px in html. Make sure to use the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("loading.....");

  axios.get(apiUrl).then(displayResults);

  let resultElement = document.querySelector("#results");
  resultElement.classList.remove("hidden");
  resultElement.innerHTML = `Generating information about ${inputElement.value}`;
}

let formElement = document.querySelector("#generate-result");
formElement.addEventListener("submit", generator);
