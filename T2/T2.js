/* ============================================================================
   LINKO  |  T2 – MODEL PODATAKA
   Autor: Lea Mihaljević (CEO)   |   Zahtjevi: R001, R002, R003
   Model studenta (zapis u bazi). Koristi ga prikaz u T2.html i kasnije T5.
   ============================================================================ */

const currentUser = {
  id: 0,
  ime: "Lucas Fernández",
  smjer: "Arhitektura",
  godina: 3,
  erasmus: true,
  interesi: ["dizajn", "fotografija", "urbani prostori", "film"],
  lokacija: { lat: 45.8131, lng: 15.9775 }   // centar Zagreba
};

const students = [
  { id: 1, ime: "Marko Horvat",   smjer: "Arhitektura", godina: 3, erasmus: false,
    interesi: ["dizajn", "urbani prostori", "košarka", "fotografija"], lokacija: { lat: 45.8090, lng: 15.9700 } },
  { id: 2, ime: "Ana Kovač",      smjer: "Dizajn",      godina: 2, erasmus: false,
    interesi: ["dizajn", "fotografija", "ilustracija"], lokacija: { lat: 45.8155, lng: 15.9820 } },
  { id: 3, ime: "Petra Novak",    smjer: "Računarstvo", godina: 3, erasmus: false,
    interesi: ["gaming", "programiranje", "film"], lokacija: { lat: 45.8005, lng: 15.9710 } },
  { id: 4, ime: "Sofia Rossi",    smjer: "Arhitektura", godina: 4, erasmus: true,
    interesi: ["urbani prostori", "dizajn", "putovanja"], lokacija: { lat: 45.8240, lng: 16.0010 } },
  { id: 5, ime: "Ivan Babić",     smjer: "Ekonomija",   godina: 2, erasmus: false,
    interesi: ["košarka", "film", "glazba"], lokacija: { lat: 45.7700, lng: 15.9600 } },
  { id: 6, ime: "Lana Marić",     smjer: "Dizajn",      godina: 3, erasmus: false,
    interesi: ["fotografija", "film", "urbani prostori"], lokacija: { lat: 45.8120, lng: 15.9850 } },
  { id: 7, ime: "Tomás Silva",    smjer: "Arhitektura", godina: 3, erasmus: true,
    interesi: ["dizajn", "fotografija", "glazba"], lokacija: { lat: 45.8300, lng: 16.0200 } },
  { id: 8, ime: "Maja Jurić",     smjer: "Psihologija", godina: 2, erasmus: false,
    interesi: ["film", "kuhanje", "planinarenje"], lokacija: { lat: 45.8050, lng: 15.9650 } },
  { id: 9, ime: "Luka Perić",     smjer: "Računarstvo", godina: 4, erasmus: false,
    interesi: ["programiranje", "gaming", "fotografija"], lokacija: { lat: 45.8180, lng: 15.9760 } },
  { id: 10, ime: "Elena Popescu", smjer: "Arhitektura", godina: 2, erasmus: true,
    interesi: ["urbani prostori", "dizajn", "fotografija", "film"], lokacija: { lat: 45.8110, lng: 15.9790 } }
];
