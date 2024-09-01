
const BertImages = [
  'photo/Bert/Bert.jpg',
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
