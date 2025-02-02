
const I6Images = [
'photo/I6/I6-1.jpg',
'photo/I6/I6-2.jpg',
'photo/I6/I6-3.jpg',
'photo/I6/I6-4.jpg',
'photo/I6/I6-5.jpg',
'photo/I6/I6-6.jpg',
];


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
