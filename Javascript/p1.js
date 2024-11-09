
const P15Images = [
'photo/P15/P15-1.jpg',
'photo/P15/P15-2.jpg',
'photo/P15/P15-3.jpg',
'photo/P15/P15-4.jpg',
'photo/P15/P15-5.jpg',
'photo/P15/P15-6.jpg',
'photo/P15/P15-7.jpg',
'photo/P15/P15-8.jpg',
];


// P15 ---------------------------
let P15currentIndex = 0;

// Get the image element
const P15 = document.getElementById('P15');

// Function to change the image
const P15changeImage = () => {
  // Increment the index to point to the next image
  P15currentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (P15currentIndex >= P15Images.length) {
      P15currentIndex = 0;
  }

  // Update the image source to the new image
  P15.src = P15Images[P15currentIndex];
};

// Add event listeners for both click and touchstart
P15.addEventListener('click', P15changeImage);
