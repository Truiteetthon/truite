
const I2Images = [
'photo/I2/I2-1.jpg',
'photo/I2/I2-2.jpg',
'photo/I2/I2-3.jpg',
'photo/I2/I2-4.jpg',
'photo/I2/I2-5.jpg',
'photo/I2/I2-6.jpg',
'photo/I2/I2-7.jpg',
];


// I2 ---------------------------
let I2currentIndex = 0;

// Get the image element
const I2 = document.getElementById('I2');

// Function to change the image
const I2changeImage = () => {
  // Increment the index to point to the next image
  I2currentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (I2currentIndex >= I2Images.length) {
      I2currentIndex = 0;
  }

  // Update the image source to the new image
  I2.src = I2Images[I2currentIndex];
};

// Add event listeners for both click and touchstart
I2.addEventListener('click', I2changeImage);
I2.addEventListener('touchstart', I2changeImage);
