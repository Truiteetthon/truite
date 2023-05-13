// Get all the images
image_array = [
    
    "Favicon.jpg",
    "0001.jpg",
    "0002.jpg",
    "0003.jpg",
    "0004.jpg",
    "0005.jpg",
    "Carte Naoshima.PNG",
    "Val David.jpg",
    "MAQUETTE.JPG",
    "mies library - 22724 - main.png",
    "mies-library-22724.png",
    "BAUHAUS-2021_1976.jpg"
  ]
  
  function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
  
    // Display the image
    document.getElementById('random_image').src = `./photo/${selected_image}`
  }
  