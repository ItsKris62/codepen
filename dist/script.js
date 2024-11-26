const heroImage = document.getElementById('hero-image');
const circles = document.querySelectorAll('.circle');

// List of images
const images = [
  'https://images.pexels.com/photos/26898331/pexels-photo-26898331/free-photo-of-view-of-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.unsplash.com/photo-1629553032544-3c1477c0eac9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.pexels.com/photos/18341011/pexels-photo-18341011/free-photo-of-elephant-and-zebras-in-savannah.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.unsplash.com/photo-1588538861199-6f545acec5c3?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1675105708542-47e8ba74f87f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

// Image rotation logic
let currentIndex = 0;

function changeHeroImage(index) {
  heroImage.src = images[index];
  circles.forEach(circle => circle.classList.remove('active'));
  circles[index].classList.add('active');
}

// Auto-switch images
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  changeHeroImage(currentIndex);
}, 4000); // Switch every 4 seconds

// Add click functionality for circles
circles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    currentIndex = index;
    changeHeroImage(index);
  });
});

// Initial state
changeHeroImage(currentIndex);