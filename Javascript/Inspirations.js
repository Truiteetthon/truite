
// Array of I ------------------------------------------

const I1Images = [
  'photo/I1/I1.jpg',
'photo/I1/I1-01.jpg',
'photo/I1/I1-02.jpg',
'photo/I1/I1-03.jpg',
'photo/I1/I1-04.jpg',
'photo/I1/I1-05.jpg',
];
const I3Images = [
  'photo/I3/I3-1.jpg',
  'photo/I3/I3-2.jpg',
  'photo/I3/I3-3.jpg',
  'photo/I3/I3-4.jpg',
  'photo/I3/I3-5.jpg',
  'photo/I3/I3-6.jpg',
  ];
  
  const I4Images = [
    'photo/I4/I4-1.jpg',
    'photo/I4/I4-2.jpg',
    'photo/I4/I4-3.jpg',
    'photo/I4/I4-4.jpg',
    ];

const I6Images = [
'photo/I6/I6_01.jpg',
'photo/I6/I6_02.jpg',
'photo/I6/I6_03.jpg',
'photo/I6/I6_04.jpg',
];

// Code of I --------------------------------------
  

// I1 ---------------------------
let I1currentIndex = 0;

// Get the image element
const I1 = document.getElementById('I1');

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
};

// Add event listeners for both click and touchstart
I1.addEventListener('click', I1changeImage);




// I3 ---------------------------
let I3currentIndex = 0;

// Get the image element
const I3 = document.getElementById('I3');

// Function to change the image
const I3changeImage = () => {
  // Increment the index to point to the next image
  I3currentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (I3currentIndex >= I3Images.length) {
      I3currentIndex = 0;
  }

  // Update the image source to the new image
  I3.src = I3Images[I3currentIndex];
};

// Add event listeners for both click and touchstart
I3.addEventListener('click', I3changeImage);


// I4 ---------------------------
let I4currentIndex = 0;

// Get the image element
const I4 = document.getElementById('I4');

// Function to change the image
const I4changeImage = () => {
  // Increment the index to point to the next image
  I4currentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (I4currentIndex >= I4Images.length) {
      I4currentIndex = 0;
  }

  // Update the image source to the new image
  I4.src = I4Images[I4currentIndex];
};

// Add event listeners for both click and touchstart
I4.addEventListener('click', I4changeImage);



// I6 ---------------------------
let I6currentIndex = 0;

// Get the image element
const I6 = document.getElementById('I6');

// Function to change the image
const I6changeImage = () => {
  // Increment the index to point to the next image
  I6currentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (I6currentIndex >= I6Images.length) {
      I6currentIndex = 0;
  }

  // Update the image source to the new image
  I6.src = I6Images[I6currentIndex];
};

// Add event listeners for both click and touchstart
I6.addEventListener('click', I6changeImage);