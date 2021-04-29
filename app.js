let p = document.querySelector(".joke p");
let button = document.querySelector(".joke input");

async function fetchQuotes() {
  let res = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });

  let data = await res.json();
  console.log(data);
  p.textContent = data.joke;
}

fetchQuotes();

let clickFunc = () => {
  fetchQuotes();
};

button.addEventListener("click", () => {
  clickFunc();
});
