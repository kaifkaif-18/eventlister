document.getElementById('city').addEventListener('change', function() {
    var selectedCity = this.value;
    // You can perform actions based on the selected city here
  });
  
//   // You can add more JavaScript code as needed for your website
//   let currentIndex = 0;
//   const items = document.querySelectorAll('.carousel-item');
//   const totalItems = items.length;

//   document.querySelector('.next').addEventListener('click', function() {
//     if (currentIndex < totalItems - 1) {
//       currentIndex++;
//     } else {
//       currentIndex = 0;
//     }
//     updateCarousel();
//   });

//   document.querySelector('.prev').addEventListener('click', function() {
//     if (currentIndex > 0) {
//       currentIndex--;
//     } else {
//       currentIndex = totalItems - 1;
//     }
//     updateCarousel();
//   });

//   function updateCarousel() {
//     const newTransformValue = -currentIndex * 100 + '%';
//     document.querySelector('.carousel-inner').style.transform = 'translateX(' + newTransformValue + ')';
//   }  