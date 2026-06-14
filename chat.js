const icebreakeri = [
  "Hej Marko, vidio sam da si na arhitekturi – jesi li bio na izložbi u blizini FOI Campusa?",
  "Bok Marko! I mene zanima dizajn. Imaš li preporuku za neko zanimljivo mjesto u Zagrebu?",
  "Hej, vidio sam da volimo fotografiju. Znaš li neka dobra mjesta za fotkanje u gradu?",
  "Bok! Jesi li već bio na nekom Erasmus eventu ovaj tjedan?",
  "Hej Marko, imaš li preporuku za menzu ili studentski popust u blizini?"
];

const prijevodi = {
  "bok": "hello",
  "hej": "hey",
  "kako si": "how are you",
  "idemo na kavu": "let's go for coffee",
  "želiš li na kavu": "would you like to grab coffee",
  "gdje je menza": "where is the student cafeteria",
  "vidimo se kasnije": "see you later",
  "hvala": "thank you",

  "hello": "bok",
  "hey": "hej",
  "how are you": "kako si",
  "let's go for coffee": "idemo na kavu",
  "would you like to grab coffee": "želiš li na kavu",
  "where is the student cafeteria": "gdje je menza",
  "see you later": "vidimo se kasnije",
  "thank you": "hvala"
};

function generirajIcebreaker() {
  const random = Math.floor(Math.random() * icebreakeri.length);
  const prijedlog = icebreakeri[random];

  const box = document.getElementById("icebreakerBox");
  box.style.display = "block";
  box.innerHTML = `
    <strong>AI prijedlog:</strong><br>
    ${prijedlog}
    <br><br>
    <button onclick="koristiIcebreaker('${prijedlog.replace(/'/g, "\\'")}')" class="btn-blue">
      Koristi ovu poruku
    </button>
  `;

  localStorage.setItem("linko_ai_icebreaker", prijedlog);
}

function koristiIcebreaker(tekst) {
  document.getElementById("novaPoruka").value = tekst;
}

function posaljiPoruku() {
  const input = document.getElementById("novaPoruka");
  const tekst = input.value.trim();

  if (!tekst) return;

  const prijevod = prevedi(tekst);

  const div = document.createElement("div");
  div.className = "msg right";

  div.innerHTML = `
    ${tekst}
    <div class="translated prijevod">${prijevod}</div>
  `;

  document.getElementById("poruke").appendChild(div);
  input.value = "";

  togglePrijevod();
}

function prevedi(tekst) {
  const lower = tekst.toLowerCase();

  if (prijevodi[lower]) {
    return prijevodi[lower];
  }

  return "AI prijevod: " + tekst;
}

function togglePrijevod() {
  const ukljuceno = document.getElementById("translateToggle").checked;
  const prijevodi = document.querySelectorAll(".prijevod");

  prijevodi.forEach(p => {
    p.style.display = ukljuceno ? "block" : "none";
  });
}