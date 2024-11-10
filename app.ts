document.addEventListener('DOMContentLoaded', () => {
    const viewmorebutton = document.getElementById('view-more-btn') as HTMLButtonElement;
    const additionalexperience = document.getElementById('additional-experiences') as HTMLElement; 

    let isExpanded = false; 
    viewmorebutton.addEventListener('click', () => {
        if (isExpanded) {
            additionalexperience.style.display = "none";
            viewmorebutton.textContent = "View More";
        } else {
            additionalexperience.style.display = "block";
            viewmorebutton.textContent = "View Less";
        }
        isExpanded = !isExpanded;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.view-more-certification-btn');

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            const container = button.parentElement as HTMLElement;
            const imageContainer = container.querySelector('.certification-image-container') as HTMLElement;

            if (imageContainer.style.display === 'none') {
                imageContainer.style.display = 'block';
                button.textContent = 'Hide Certificate';
            } else {
                imageContainer.style.display = 'none';
                button.textContent = 'View Certificate';
            }
        });
    });
});
