
const P18Images = [
'photo/P18/P18-01.jpg',
'photo/P18/P18-02.jpg',
'photo/P18/P18-03.jpg',
'photo/P18/P18-04.jpg',
'photo/P18/P18-05.jpg',
'photo/P18/P18-06.jpg',
'photo/P18/P18-07.jpg',
'photo/P18/P18-08.jpg',
'photo/P18/P18-09.jpg',
'photo/P18/P18-10.jpg',
'photo/P18/P18-11.jpg',
'photo/P18/P18-12.jpg',
'photo/P18/P18-13.jpg',
'photo/P18/P18-14.jpg',
'photo/P18/P18-15.jpg',
'photo/P18/P18-16.jpg',


];


// P18 ---------------------------
let P18currentIndex = 0;

// Get the image element
const P18 = document.getElementById('P18');

// Function to change the image
const P18changeImage = () => {
  // Increment the index to point to the next image
  P18currentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (P18currentIndex >= P18Images.length) {
      P18currentIndex = 0;
  }

  // Update the image source to the new image
  P18.src = P18Images[P18currentIndex];
};

// Add event listeners for both click and touchstart
P18.addEventListener('click', P18changeImage);
