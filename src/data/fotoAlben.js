// Jedes Album ist eine Galerie zu einem Thema (Auswärtsfahrt, Choreo, etc.)
// "slug" = Teil der URL, muss einzigartig sein, keine Leerzeichen/Umlaute
// "images" = Dateinamen der Fotos, die im entsprechenden Ordner unter public/fotos/<slug>/ liegen

export const fotoAlben = [
  {
    slug: 'auswaertsfahrt-beispiel',
    de: { title: 'Auswärtsfahrt – Beispielverein' },
    it: { title: 'Trasferta – Squadra di esempio' },
    date: '2026-08-28',
    images: [
      // 'foto1.jpg',
      // 'foto2.jpg',
    ],
  },
  {
    slug: 'choreo-beispiel',
    de: { title: 'Choreo Heimspiel' },
    it: { title: 'Coreografia in casa' },
    date: '2026-08-28',
    images: [
      // 'choreo1.jpg',
    ],
  },
];