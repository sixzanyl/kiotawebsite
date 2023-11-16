

    function showSlide(n) {
      var carousel = document.getElementById('image-carousel');
      var slides = document.getElementsByClassName('carousel-item');
      var dots = document.getElementsByClassName('dot');

      if (n >= slides.length) {
        currentSlide = 0;
      } else if (n < 0) {
        currentSlide = slides.length - 1;
      } else {
        currentSlide = n;
      }

      carousel.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';

      for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
      }

      dots[currentSlide].classList.add('active');
    }

    function changeSlide(n) {
      showSlide(currentSlide + n);
    }

    function autoSlide() {
      showSlide(currentSlide + 1);
    }

    var slideInterval = setInterval(autoSlide, 5000); // Change slide every 5 seconds

    // Stop auto sliding when mouse hovers over the carousel
    document.getElementById('carousel-container').addEventListener('mouseenter', function() {
      clearInterval(slideInterval);
    });

    // Resume auto sliding when mouse leaves the carousel
    document.getElementById('carousel-container').addEventListener('mouseleave', function() {
      slideInterval = setInterval(autoSlide, 5000);
    });

    document.getElementById('carousel-dots').innerHTML = generateDots();

    function generateDots() {
      var dotsHTML = '';
      for (var i = 0; i < document.getElementsByClassName('carousel-item').length; i++) {
        dotsHTML += '<span class="dot" onclick="showSlide(' + i + ')"></span>';
      }
      return dotsHTML;
    }




// JavaScript to toggle the expanded content when "Read More" is clicked
const readMoreLinks = document.querySelectorAll('.read-more');
readMoreLinks.forEach(link => {
  link.addEventListener('click', () => {
    const expandedContent = link.nextElementSibling;
    expandedContent.style.display = expandedContent.style.display === 'block' ? 'none' : 'block';
  });
});
