// Get all the images
image_array = [
    "RENDU 1 EXTERIEUR PANNEAU.jpg",
    "BarJapon.JPG",
    "DÉTAIL TOITURE TERRASSE.jpg",
    "Favicon.jpg",
    "IMG_0598.JPG",
    "mies library - 22724 - main.png",
    "P7030219.JPG",
    "P7100292.JPG",
    "P7100294.JPG"
  ]
  
  function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
  
    // Display the image
    document.getElementById('random_image').src = `./photo/${selected_image}`
  }
  