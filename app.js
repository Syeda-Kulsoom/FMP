window.addEventListener('load', function() {
    var loader = document.querySelector('.loader');
    setTimeout(function() {
      loader.style.display = 'none';
    }, 1000); // Hides the loader after 2 seconds (2000 milliseconds)
  });