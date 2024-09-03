import lottie from 'lottie-web';

const animations = [
  { element: '#svgContainer', path: 'https://lottie.host/0395272b-2b8c-4493-9e0b-50daa42580d6/NIfKeDXC7A.json' },
  { element: '#photo1', path: 'https://lottie.host/223d3aa5-a913-445d-ba2b-2faacd0ebf28/XfXK7y7Puv.json' }
];

animations.forEach(({ element, path }) => {
  lottie.loadAnimation({
    container: document.querySelector(element),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: path
  });
});