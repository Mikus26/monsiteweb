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
  // Sélectionner tous les éléments ayant les classes à basculer
  let elements = document.querySelectorAll('.bg-dark, .bg-white, .text-black, .text-white');

  elements.forEach(function(element) {
      // Si l'élément a la classe bg-dark, on la remplace par bg-white
      if (element.classList.contains('bg-dark')) {
          element.classList.remove('bg-dark');
          element.classList.add('bg-white');
      } 
      // Si l'élément a la classe bg-white, on la remplace par bg-dark
      else if (element.classList.contains('bg-white')) {
          element.classList.remove('bg-white');
          element.classList.add('bg-dark');
      }

      // Si l'élément a la classe text-white, on la remplace par text-black
      if (element.classList.contains('text-white')) {
          element.classList.remove('text-white');
          element.classList.add('text-black');         
      } 
      // Si l'élément a la classe text-black, on la remplace par text-white
      else if (element.classList.contains('text-black')) {
          element.classList.remove('text-black');
          element.classList.add('text-white');
      }
  });
});
