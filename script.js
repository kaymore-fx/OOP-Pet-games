class Pet {
    constructor(name, soundText, image, soundUrl) {
      this.name = name;
      this.sound = soundText; // Assign the sound text to this.sound
      this.soundUrl = new Audio(soundUrl);
      this.image = image;
      this.playCount = 0;
    }
  
    speak() {
      alert(this.sound); // Display the pet's sound text
      this.soundUrl.currentTime = 0; // Restart the audio from the beginning
      this.soundUrl.play();
    
    }
  
    play() {
      this.playCount++;
      this.speak();
      updateCounter(this.playCount);
      showFunctions(this.name);
    }
  }
  
  function choosePet(type) {
    if (type === 'cat') {
      currentPet = new Pet('Cat', 'Meow! 🐱', 'images/silver-tabby-cat-sitting-on-green-background-free-photo.jpg', 'sounds/cat-meow-sound-383823.mp3');
    } else if (type === 'dog') {
      currentPet = new Pet('Dog', 'Woof! 🐶', 'images (1).jpeg', 'sounds/big-dog-barking-300504.mp3');
    } else if (type === 'Gorilla') {
      currentPet = new Pet('Gorilla', 'Roar! 🦍', 'images/892.webp', 'sounds/lion-roaring-sfx-293295.mp3');
    } else if (type === 'Rabbit') {
      currentPet = new Pet('Rabbit', 'screaming', 'images/images.jpeg', 'sounds/rabbit-sounds-358172.mp3');
    } else {
      alert('Unknown pet type');
      return;
    }
  
    console.log('Selected pet:', currentPet);
  
    // Show the pet image and game area
    const img = document.getElementById('petImage');
    img.src = currentPet.image;
    img.alt = currentPet.name;
  
    currentPet.playCount = 0;
    document.getElementById('counter').innerText = 'Times played: 0';
    document.getElementById('game').style.display = 'block';
  }
  
  function playWithPet() {
    if (currentPet) {
      currentPet.play();
    }
  }