
// Array of image file names


const p1Images = [
'photo/P1/1.jpeg',
'photo/P1/2.png',
'photo/P1/3.png',
];

const p11Images = [
  'photo/P11/P11.jpg',
'photo/P11/P11-0.jpg',
'photo/P11/P11-1.jpg',
'photo/P11/P11-2.jpg',
'photo/P11/P11-3.jpg',
'photo/P11/P11-4.jpg',
'photo/P11/P11-5.jpg',
];

const p12Images = [
  'photo/P12/P12.jpg',
'photo/P12/P12-1.jpg',
'photo/P12/P12-2.jpg',
'photo/P12/P12-3.jpg',
'photo/P12/P12-4.jpg',
'photo/P12/P12-5.jpg',
'photo/P12/P12-6.jpg',
'photo/P12/P12-7.jpg',
'photo/P12/P12-8.jpg',
'photo/P12/P12-9.jpg',
'photo/P12/P12-10.jpg',
];

const BertImages = [
'photo/Bert/Bert-01.jpg',
'photo/Bert/Bert-02.jpg',
'photo/Bert/Bert-03.jpg',
'photo/Bert/Bert-04.jpg',
'photo/Bert/Bert-05.jpg',
'photo/Bert/Bert-06.jpg',
'photo/Bert/Bert-07.jpg',
'photo/Bert/Bert-08.jpg',
'photo/Bert/Bert-09.jpg',
'photo/Bert/Bert-10.jpg',
'photo/Bert/Bert-11.jpg',
'photo/Bert/Bert-12.jpg',
];



  
// P1 -----------------

let p1Index = 0;

// Get the image element
const p1 = document.getElementById('p1');

// Function to change the image
const p1changeImage = () => {
  // Increment the index to point to the next image
  p1Index++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (p1Index >= p1Images.length) {
      p1Index = 0;
  }

  // Update the image source to the new image
  p1.src = p1Images[p1Index];
};

// Add event listeners for both click and touchstart
p1.addEventListener('click', p1changeImage);
p1.addEventListener('touchstart', p1changeImage);










// P11 ---------------------------
let p11currentIndex = 0;

// Get the image element
const p11 = document.getElementById('p11');

// Function to change the image
const p11changeImage = () => {
  // Increment the index to point to the next image
  p11currentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (p11currentIndex >= p11Images.length) {
      p11currentIndex = 0;
  }

  // Update the image source to the new image
  p11.src = p11Images[p11currentIndex];
};

// Add event listeners for both click and touchstart
p11.addEventListener('click', p11changeImage);
p11.addEventListener('touchstart', p11changeImage);

// P12 ---------------------------
let p12currentIndex = 0;

// Get the image element
const p12 = document.getElementById('p12');

// Function to change the image
const p12changeImage = () => {
  // Increment the index to point to the next image
  p12currentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (p12currentIndex >= p12Images.length) {
      p12currentIndex = 0;
  }

  // Update the image source to the new image
  p12.src = p12Images[p12currentIndex];
};

// Add event listeners for both click and touchstart
p12.addEventListener('click', p12changeImage);
p12.addEventListener('touchstart', p12changeImage);



// Bert ---------------------------
let BertcurrentIndex = 0;

// Get the image element
const Bert = document.getElementById('Bert');

// Function to change the image
const BertchangeImage = () => {
  // Increment the index to point to the next image
  BertcurrentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (BertcurrentIndex >= BertImages.length) {
      BertcurrentIndex = 0;
  }

  // Update the image source to the new image
  Bert.src = BertImages[BertcurrentIndex];
};

// Add event listeners for both click and touchstart
Bert.addEventListener('click', BertchangeImage);
Bert.addEventListener('touchstart', BertchangeImage);