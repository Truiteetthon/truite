
const P14Images = [
'photo/P14/P14-1.jpg',
'photo/P14/P14-2.jpg',
'photo/P14/P14-3.jpg',
'photo/P14/P14-4.jpg',
'photo/P14/P14-5.jpg',
'photo/P14/P14-6.jpg',
];


// P14 ---------------------------
let P14currentIndex = 0;

// Get the image element
const P14 = document.getElementById('P14');

// Function to change the image
const P14changeImage = () => {
  // Increment the index to point to the next image
  P14currentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (P14currentIndex >= P14Images.length) {
      P14currentIndex = 0;
  }

  // Update the image source to the new image
  P14.src = P14Images[P14currentIndex];
};

// Add event listeners for both click and touchstart
P14.addEventListener('click', P14changeImage);
