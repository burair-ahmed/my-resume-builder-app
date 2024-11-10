document.addEventListener('DOMContentLoaded', function () {
    var viewmorebutton = document.getElementById('view-more-btn');
    var additionalexperience = document.getElementById('additional-experiences');
    var isExpanded = false;
    viewmorebutton.addEventListener('click', function () {
        if (isExpanded) {
            additionalexperience.style.display = "none";
            viewmorebutton.textContent = "View More";
        }
        else {
            additionalexperience.style.display = "block";
            viewmorebutton.textContent = "View Less";
        }
        isExpanded = !isExpanded;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.view-more-certification-btn');
    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            var container = button.parentElement;
            var imageContainer = container.querySelector('.certification-image-container');
            if (imageContainer.style.display === 'none') {
                imageContainer.style.display = 'block';
                button.textContent = 'Hide Certificate';
            }
            else {
                imageContainer.style.display = 'none';
                button.textContent = 'View Certificate';
            }
        });
    });
});
