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
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumesection = document.getElementById('resume-section');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('user-name').value;
        var title = document.getElementById('user-title').value;
        var email = document.getElementById('user-email').value;
        var phone = document.getElementById('user-phone').value;
        var address = document.getElementById('user-address').value;
        document.getElementById('resume-name').textContent = name;
        document.getElementById('resume-title').textContent = title;
        var emailElem = document.getElementById('resume-email');
        emailElem.textContent = email;
        emailElem.href = "mailto:".concat(email);
        document.getElementById('resume-phone').textContent = "Phone: ".concat(phone);
        document.getElementById('resume-address').textContent = "Address: ".concat(address);
        form.style.display = 'none';
        resumesection.style.display = 'block';
    });
});
