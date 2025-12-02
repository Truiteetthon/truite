
// Array of I ------------------------------------------

const I1Images = [
'photo/photos/0.jpg',
'photo/photos/1.jpg',
'photo/photos/2.jpg',
'photo/photos/3.jpg',
'photo/photos/4.jpg',
'photo/photos/5.jpg',
'photo/photos/6.jpg',
'photo/photos/7.jpg',
'photo/photos/8.jpg',
'photo/photos/9.jpg',
'photo/photos/10.jpg',
'photo/photos/11.jpg',
'photo/photos/12.jpg',
'photo/photos/13.jpg',
'photo/photos/14.jpg',
'photo/photos/15.jpg',
'photo/photos/16.jpg',
'photo/photos/17.jpg',
'photo/photos/18.jpg',
'photo/photos/19.jpg',
'photo/photos/20.jpg',
'photo/photos/21.jpg',
'photo/photos/22.jpg',
'photo/photos/23.jpg',
'photo/photos/24.jpg',
'photo/photos/25.jpg',
'photo/photos/26.jpg',
'photo/photos/27.jpg',
'photo/photos/28.jpg',
'photo/photos/29.jpg',
'photo/photos/30.jpg',
'photo/photos/31.jpg',
'photo/photos/32.jpg',
'photo/photos/33.jpg',
'photo/photos/34.jpg',
'photo/photos/35.jpg',
'photo/photos/36.jpg',
'photo/photos/37.jpg',
'photo/photos/38.jpg',
'photo/photos/39.jpg',
'photo/photos/40.jpg',
'photo/photos/41.jpg',
'photo/photos/42.jpg',
'photo/photos/43.jpg',
'photo/photos/44.jpg',
'photo/photos/45.jpg',
'photo/photos/46.jpg',
'photo/photos/47.jpg',
'photo/photos/48.jpg',
'photo/photos/49.jpg',
'photo/photos/50.jpg',
'photo/photos/51.jpg',
'photo/photos/52.jpg',
'photo/photos/53.jpg',
'photo/photos/54.jpg',
'photo/photos/55.jpg',
'photo/photos/56.jpg',
'photo/photos/57.jpg',
'photo/photos/58.jpg',
'photo/photos/59.jpg',
'photo/photos/60.jpg',
'photo/photos/61.jpg',
'photo/photos/62.jpg',
'photo/photos/63.jpg',
'photo/photos/64.jpg',
'photo/photos/65.jpg',
'photo/photos/66.jpg',
'photo/photos/67.jpg',
'photo/photos/68.jpg',
'photo/photos/69.jpg',
'photo/photos/70.jpg',
'photo/photos/71.jpg',
'photo/photos/72.jpg',
'photo/photos/73.jpg',
'photo/photos/74.jpg',
'photo/photos/75.jpg',
'photo/photos/76.jpg',
'photo/photos/77.jpg',
'photo/photos/78.jpg',
];




let I1currentIndex = 0;

// Get the image element
const titre = document.getElementById('titre');
const artiste = document.getElementById('artiste');
const année = document.getElementById('année');
const media = document.getElementById('media');
const creditphoto = document.getElementById('creditphoto');
const I1 = document.getElementById('I1');


const changedata = () => { 
  
  if (I1currentIndex == 0)  {
    TitreProjet = '';
    Artiste = 'Rémi Bonin';
    Année = '2025';
    Medium = "<br> Courriel. rbonin.rbonin@gmail.com<br><br>Liens<br><a href='description.html'>Description</a><br><a href='ressources.html'>Ressources</a><a href='CV.html'><br>Curriculum Vitae</a>";
    Note = '';
  } 

  if (I1currentIndex >= 1 && I1currentIndex <= 8 )  {
    TitreProjet = 'Documentation Rivière Saint-Charles';
    Artiste = 'Rémi Bonin';
    Année = '2023';
    Medium = 'Photographie Argentique';
    Note = '';
  }
  
   if (I1currentIndex >= 9 && I1currentIndex <= 13 )  {
    TitreProjet = "Atelier d'artiste à Tadoussac";
    Artiste = 'Rémi Bonin';
    Année = '2022';
    Medium = 'Maquette carton, dessin numérique';
    Note = '';
  } 

   if (I1currentIndex >= 14 && I1currentIndex <= 15 )  {
    TitreProjet = "Croquis";
    Artiste = 'Terunobu Fujimori';
    Année = '';
    Medium = 'Graphite sur papier';
    Note = '';
  } 

  if (I1currentIndex == 16 )  {
    TitreProjet = "Croquis";
    Artiste = 'Terunobu Fujimori';
    Année = '';
    Medium = 'Graphite sur papier';
    Note = '';
  } 

  if (I1currentIndex == 17 )  {
    TitreProjet = "Maquette";
    Artiste = 'Terunobu Fujimori';
    Année = '';
    Medium = 'Bois';
    Note = '';
  } 

  if (I1currentIndex == 18 )  {
    TitreProjet = "Coupes";
    Artiste = 'Terunobu Fujimori';
    Année = '';
    Medium = 'Encre sur papier';
    Note = '';
  } 
   if (I1currentIndex >= 19 && I1currentIndex <= 24 ) {
    TitreProjet = "Tokyo Story";
    Artiste = 'Yasujirō Ozu';
    Année = '1954';
    Medium = 'Film';
    Note = '';
  } 
   if (I1currentIndex >= 25 && I1currentIndex <= 31 ) {
    TitreProjet = "Documentation Jean-Marie Roy";
    Artiste = 'Rémi Bonin';
    Année = '2024';
    Medium = 'Épreuve Argentique, Dévelopement : Sténopé Lab';
    Note = '';
  } 
   if (I1currentIndex >= 32 && I1currentIndex <= 36 ) {
    TitreProjet = "Langage de l'éroson";
    Artiste = 'Rémi Bonin et Vincent Morrier';
    Année = '2025';
    Medium = 'dessin numérique, collage numérique';
    Note = '';
  } 
  if (I1currentIndex >= 37 && I1currentIndex <= 40 ) {
    TitreProjet = "Photographie Edward Steichen";
    Artiste = 'Edward Steichen';
    Année = '1879-1973';
    Medium = 'Épreuve Argentique';
    Note = '';
  } 
  if (I1currentIndex >= 41 && I1currentIndex <= 47 ) {
    TitreProjet = "La greffe";
    Artiste = 'Rémi Bonin';
    Année = '2024';
    Medium = 'Épreuve numérique, maquette de bois et collage numérique';
    Note = '';
  } 
  if (I1currentIndex >= 48 && I1currentIndex <= 55 ) {
    TitreProjet = "Intéraction thermique";
    Artiste = 'Rémi Bonin';
    Année = '2024';
    Medium = 'Épreuve numérique, maquette de carton et collage numérique';
    Note = '';
  } 
   if (I1currentIndex == 56 ) {
    TitreProjet = "Balade en forêt";
    Artiste = 'Rémi Bonin, Vincent Morrier et Léanne Smyth';
    Année = '2025';
    Medium = 'Métal réemployé, discman sony, encens babasuishaba et impression de acétate';
    Note = '';
  } 
  if (I1currentIndex >=57 && I1currentIndex <= 58) {
    TitreProjet = "Photo neige";
    Artiste = 'Rémi Bonin';
    Année = '2025';
    Medium = 'Épreuve numérique';
    Note = '';
  } 
  if (I1currentIndex >=59 && I1currentIndex <= 60) {
    TitreProjet = "Paysages Kanawake";
    Artiste = 'Rémi Bonin';
    Année = '2025';
    Medium = 'Pastel gras sur papier';
    Note = '';
  } 
  if (I1currentIndex >=61 && I1currentIndex <= 73) {
    TitreProjet = "Pavillons Kanawake";
    Artiste = 'Rémi Bonin';
    Année = '2025';
    Medium = 'Collage numérique, dessin numérique, maquette de bois';
    Note = '';
  } 
  if (I1currentIndex >=74 && I1currentIndex <= 76) {
    TitreProjet = "Chalet Val-Davif";
    Artiste = 'Irina Nazarova architecte et Rémi Bonin';
    Année = 'en cours';
    Medium = 'Charpente par didier girard, isolation en chanvre';
    Note = '';
  } 
  if (I1currentIndex >=77 && I1currentIndex <= 78) {
    TitreProjet = "Site Web pour Nicolas Chaudier Architecte";
    Artiste = 'Rémi Bonin';
    Année = '2025';
    Medium = 'HTML,CSS,JAVASCRIPT';
    Note = '';
  } 
}



// Function to change the image
const I1changeImage = () => {
  // Increment the index to point to the next image
  I1currentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (I1currentIndex >= I1Images.length) {
      I1currentIndex = 0;
  }


  // Update the image source to the new image
  I1.src = I1Images[I1currentIndex];

  indexN.innerHTML = I1currentIndex;

  changedata () ;

  // Update the image source to the new image
  titre.innerHTML = TitreProjet;
  artiste.innerHTML = Artiste;
  année.innerHTML = Année;
  media.innerHTML = Medium;
  creditphoto.innerHTML = Note;

};


const I1changeImagegauche = () => {
 // Increment the index to point to the next image
  I1currentIndex--;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (I1currentIndex < 0) {
  I1currentIndex = I1Images.length - 1;
}

  // Update the image source to the new image
  I1.src = I1Images[I1currentIndex];

  indexN.innerHTML = I1currentIndex;

   changedata () ;

  // Update the image source to the new image
  titre.innerHTML = TitreProjet;
  artiste.innerHTML = Artiste;
  année.innerHTML = Année;
  media.innerHTML = Medium;
  creditphoto.innerHTML = Note;

};


changedata () ;

// Add event listeners for both click and touchstart
droite.addEventListener('click', I1changeImage);

// Add event listeners for both click and touchstart
gauche.addEventListener('click', I1changeImagegauche);