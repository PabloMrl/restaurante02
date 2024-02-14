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
  