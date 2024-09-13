import lottie from 'lottie-web';

const animations = [
  { element: '#svgContainer', path: 'https://lottie.host/0395272b-2b8c-4493-9e0b-50daa42580d6/NIfKeDXC7A.json' },
  { element: '#photo1', path: 'https://lottie.host/223d3aa5-a913-445d-ba2b-2faacd0ebf28/XfXK7y7Puv.json' },
  { element: '#talking', path: 'https://lottie.host/6d1a5362-7097-4e3b-af75-7ef5e684116d/gGwCg8CHV3.json' },
  { element: '#contact', path: 'https://lottie.host/3cc9ccda-296d-46d9-a9da-90f5283c01cb/PwEyKsemhX.json' },
];

animations.forEach(({ element, path }) => {
  const container = document.querySelector(element);
  if (container) {
    lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path
    });
  }
});

document.getElementById("toggle-light").addEventListener("click", function() {
  // Sélectionner tous les éléments ayant une classe contenant '-dark' ou '-light'
  let elements = document.querySelectorAll('[class*="-dark"], [class*="-white"], .text-black, .text-white');

  elements.forEach(function(element) {
      // Remplacer toutes les occurrences de '-dark' par '-light'
      if (element.className.includes('-dark')) {
          element.className = element.className.replace(/-dark/g, '-white');
      } 
      // Remplacer toutes les occurrences de '-light' par '-dark'
      else if (element.className.includes('-white')) {
          element.className = element.className.replace(/-white/g, '-dark');
      }

      // Remplacer 'text-black' par 'text-white'
      if (element.classList.contains('text-black')) {
          element.classList.remove('text-black');
          element.classList.add('text-white');
      } 
      // Remplacer 'text-white' par 'text-black'
      else if (element.classList.contains('text-white')) {
          element.classList.remove('text-white');
          element.classList.add('text-black');
      }
  });
});


