
const P13Images = [
'photo/P13/P13-1.jpg',
'photo/P13/P13-2.jpg',
'photo/P13/P13-3.jpg',
'photo/P13/P13-4.jpg',
'photo/P13/P13-5.jpg',
];


// P13 ---------------------------
let P13currentIndex = 0;

// Get the image element
const P13 = document.getElementById('P13');

// Function to change the image
const P13changeImage = () => {
  // Increment the index to point to the next image
  P13currentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (P13currentIndex >= P13Images.length) {
      P13currentIndex = 0;
  }

  // Update the image source to the new image
  P13.src = P13Images[P13currentIndex];
};

// Add event listeners for both click and touchstart
P13.addEventListener('click', P13changeImage);
