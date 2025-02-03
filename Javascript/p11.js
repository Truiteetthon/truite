
// Array of P --------------------------------------


const p1Images = [
'photo/P1/1.png',
'photo/P1/2.jpeg',
'photo/P1/3.png',
'photo/P1/4.png',
];

const P6Images = [
  'photo/P6/P6.jpg',
'photo/P6/P6-01.jpg',
'photo/P6/P6-02.jpg',
'photo/P6/P6-03.jpg',
'photo/P6/P6-04.jpg',
'photo/P6/P6-05.jpg',
'photo/P6/P6-06.jpg',
'photo/P6/P6-07.jpg',
];

const P9Images = [
  'photo/P9/P9.jpg',
'photo/P9/P9-01.jpg',
'photo/P9/P9-02.jpg',
'photo/P9/P9-03.jpg',
'photo/P9/P9-04.jpg',
'photo/P9/P9-05.jpg',
'photo/P9/P9-06.jpg',
];

const P10Images = [
  'photo/P10/P10.jpg',
'photo/P10/P10-01.jpg',
'photo/P10/P10-02.jpg',
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

const P13Images = [
  'photo/P13/P13-1.jpg',
  'photo/P13/P13-2.jpg',
  'photo/P13/P13-3.jpg',
  'photo/P13/P13-4.jpg',
  'photo/P13/P13-5.jpg',
  'photo/P13/P13-6.jpg',
  'photo/P13/P13-7.jpg',
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

const P14Images = [
  'photo/P14/P14-1.jpg',
  'photo/P14/P14-2.jpg',
  'photo/P14/P14-3.jpg',
  'photo/P14/P14-4.jpg',
  'photo/P14/P14-5.jpg',
  'photo/P14/P14-6.jpg',
  ];
  
  const P15Images = [
    'photo/P15/P15-1.jpg',
    'photo/P15/P15-2.jpg',
    'photo/P15/P15-3.jpg',
    'photo/P15/P15-4.jpg',

    ];
    
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
'photo/I6/I6-2.jpg',
'photo/I6/I6-1.JPG',
'photo/I6/I6-3.jpg',
'photo/I6/I6-4.jpg',
'photo/I6/I6-5.jpg',
'photo/I6/I6-6.jpg',
];
// Code of P --------------------------------------
  
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




// P6 ---------------------------
let P6currentIndex = 0;

// Get the image element
const P6 = document.getElementById('P6');

// Function to change the image
const P6changeImage = () => {
  // Increment the index to point to the next image
  P6currentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (P6currentIndex >= P6Images.length) {
      P6currentIndex = 0;
  }

  // Update the image source to the new image
  P6.src = P6Images[P6currentIndex];
};

// Add event listeners for both click and touchstart
P6.addEventListener('click', P6changeImage);





// P9 ---------------------------
let P9currentIndex = 0;

// Get the image element
const P9 = document.getElementById('P9');

// Function to change the image
const P9changeImage = () => {
  // Increment the index to point to the next image
  P9currentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (P9currentIndex >= P9Images.length) {
      P9currentIndex = 0;
  }

  // Update the image source to the new image
  P9.src = P9Images[P9currentIndex];
};

// Add event listeners for both click and touchstart
P9.addEventListener('click', P9changeImage);




// P10 ---------------------------
let P10currentIndex = 0;

// Get the image element
const P10 = document.getElementById('P10');

// Function to change the image
const P10changeImage = () => {
  // Increment the index to point to the next image
  P10currentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (P10currentIndex >= P10Images.length) {
      P10currentIndex = 0;
  }

  // Update the image source to the new image
  P10.src = P10Images[P10currentIndex];
};

// Add event listeners for both click and touchstart
P10.addEventListener('click', P10changeImage);




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