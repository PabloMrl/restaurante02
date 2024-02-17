document.addEventListener('DOMContentLoaded', function() {
    const likeBtns = document.querySelectorAll('.like-btn');
    
    likeBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const likesSpan = this.nextElementSibling;
        let likesCount = parseInt(likesSpan.textContent.split(' ')[0]);
        likesCount++;
        likesSpan.textContent = likesCount + ' Me gusta';
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
  
    searchButton.addEventListener('click', function() {
      searchInput.classList.toggle('active');
      searchInput.focus(); // Para que el cursor esté dentro del input automáticamente
    });
  });
  