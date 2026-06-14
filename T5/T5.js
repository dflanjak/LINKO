/* ============================================================================
   LINKO  |  T5 – ALGORITAM PREPORUKA STUDENATA
   Autor: Lea Mihaljević (CEO)   |   Zahtjevi: R004, R013
   Očekuje globalne: currentUser, students (definirane u T5.html).
   Match (0–1) = interesi 45% + smjer 30% + blizina 25%.
   ============================================================================ */

const TEZINE = { interesi: 0.45, smjer: 0.30, blizina: 0.25 };

const SRODNI = {
  "Arhitektura": ["Dizajn"],
  "Dizajn": ["Arhitektura"],
  "Računarstvo": ["Dizajn"]
};

// Udaljenost dvije GPS točke u km (Haversine)
function udaljenostKm(a, b) {
  const R = 6371;
  const dLat = (b.lat - a.lat) * Math.PI / 180;
  const dLng = (b.lng - a.lng) * Math.PI / 180;
  const x = Math.sin(dLat/2)**2 +
            Math.cos(a.lat*Math.PI/180) * Math.cos(b.lat*Math.PI/180) *
            Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1-x));
}

function faktorSmjer(s) {
  if (s.smjer === currentUser.smjer) return 1;
  if ((SRODNI[currentUser.smjer] || []).includes(s.smjer)) return 0.5;
  return 0;
}

function zajednickiInteresi(s, aktivniInteresi) {
  const baza = aktivniInteresi.length ? aktivniInteresi : currentUser.interesi;
  return s.interesi.filter(i => baza.includes(i));
}

// filteri = { smjer, maxKm, interesi[] }
function izracunajPreporuke(filteri) {
  return students
    .map(s => {
      const dist = udaljenostKm(currentUser.lokacija, s.lokacija);
      const zajednicki = zajednickiInteresi(s, filteri.interesi);
      const baza = filteri.interesi.length ? filteri.interesi : currentUser.interesi;
      const fInteresi = baza.length ? zajednicki.length / baza.length : 0;
      const fSmjer = faktorSmjer(s);
      const fBlizina = Math.max(0, 1 - dist / filteri.maxKm);
      const match = TEZINE.interesi*fInteresi + TEZINE.smjer*fSmjer + TEZINE.blizina*fBlizina;
      return { student: s, match, dist, zajednicki };
    })
    .filter(r => (!filteri.smjer || r.student.smjer === filteri.smjer))
    .filter(r => r.dist <= filteri.maxKm)
    .sort((a, b) => b.match - a.match);
}
