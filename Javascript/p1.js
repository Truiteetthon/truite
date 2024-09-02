
const I4Images = [
'photo/I4/I4-1.jpg',
'photo/I4/I4-2.jpg',
'photo/I4/I4-3.jpg',
'photo/I4/I4-4.jpg',
];


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
