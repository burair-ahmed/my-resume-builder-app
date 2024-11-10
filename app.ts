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


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumesection = document.getElementById('resume-section') as HTMLElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = (document.getElementById('user-name') as HTMLInputElement).value;
        const title = (document.getElementById('user-title') as HTMLInputElement).value;
        const email = (document.getElementById('user-email') as HTMLInputElement).value;
        const phone = (document.getElementById('user-phone') as HTMLInputElement).value;
        const address = (document.getElementById('user-address') as HTMLInputElement).value;
   
   (document.getElementById('resume-name') as HTMLElement).textContent = name;
   (document.getElementById('resume-title') as HTMLElement).textContent = title;
   

   const emailElem = document.getElementById('resume-email') as HTMLAnchorElement;
   emailElem.textContent = email;
   emailElem.href = `mailto:${email}`;

   (document.getElementById('resume-phone') as HTMLElement).textContent = `Phone: ${phone}`;
   (document.getElementById('resume-address') as HTMLElement).textContent = `Address: ${address}`;

   form.style.display = 'none';
   resumesection.style.display = 'block';
    })
})