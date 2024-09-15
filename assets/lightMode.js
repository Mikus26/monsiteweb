function applyTheme(theme) {
    let elements = document.querySelectorAll('.bg-dark, .bg-white, .text-black, .text-white');
  
    elements.forEach(function(element) {
        if (theme === 'dark') {
            if (element.classList.contains('bg-white')) {
                element.classList.remove('bg-white');
                element.classList.add('bg-dark');
            }
            if (element.classList.contains('text-black')) {
                element.classList.remove('text-black');
                element.classList.add('text-white');
            }
        } else {
            if (element.classList.contains('bg-dark')) {
                element.classList.remove('bg-dark');
                element.classList.add('bg-white');
            }
            if (element.classList.contains('text-white')) {
                element.classList.remove('text-white');
                element.classList.add('text-black');
            }
        }
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    let savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
  });
  
  // Au clic, basculer le thème et le sauvegarder
  document.getElementById("toggle-light").addEventListener("click", function() {
    let currentTheme = localStorage.getItem('theme') === 'light' ? 'dark' : 'light'; // Inverser le thème
    localStorage.setItem('theme', currentTheme); // Sauvegarder le nouveau thème
    applyTheme(currentTheme); // Appliquer les nouvelles classes
  });
  
  