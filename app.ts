//This Section Is for View More Button Toggle for Experience BUtton in INteractie Resume

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
//This Section Is for View Certificate Button Toggle for View Certificate in INteractie Resume

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

// This is the main form section to get user input and update into the resume
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeSection = document.getElementById('resume-section') as HTMLElement;
    const addExperienceButton = document.getElementById('add-experience') as HTMLElement;
    const addEducationButton = document.getElementById('add-education') as HTMLElement;
    const experienceSection = document.getElementById('experience-section') as HTMLElement;
    const educationSection = document.getElementById('education-section') as HTMLElement;

    const saveButton = document.getElementById('save-button') as HTMLElement;
    const editButton = document.getElementById('edit-button') as HTMLElement;

    addExperienceButton.addEventListener('click', () => {
        const experienceEntry = document.createElement('div');
        experienceEntry.classList.add('experience-entry');
        experienceEntry.innerHTML = `
            <label for="company-name">Company Name:</label>
            <input type="text" class="company-name" required>
            <label for="role">Role:</label>
            <input type="text" class="role" required>
            <label for="experience-date">Date:</label>
            <input type="text" class="experience-date" required>
            <label for="responsibilities">Responsibilities:</label>
            <textarea class="responsibilities" rows="3" required></textarea>
            <button class="edit-btn">Edit</button>
        `;
        experienceSection.appendChild(experienceEntry);
    });

    addEducationButton.addEventListener('click', () => {
        const educationEntry = document.createElement('div');
        educationEntry.classList.add('education-entry');
        educationEntry.innerHTML = `
            <label for="school-name">School Name:</label>
            <input type="text" class="school-name" required>
            <label for="degree">Degree:</label>
            <input type="text" class="degree" required>
            <label for="education-date">Date:</label>
            <input type="text" class="education-date" required>
            <button class="edit-btn">Edit</button>
        `;
        educationSection.appendChild(educationEntry);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = (document.getElementById('user-name') as HTMLInputElement).value;
        const title = (document.getElementById('user-title') as HTMLInputElement).value;
        const summary = (document.getElementById('user-summary') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('user-skills') as HTMLInputElement).value;
        const certifications = (document.getElementById('user-certifications') as HTMLInputElement).value;
        const languages = (document.getElementById('user-languages') as HTMLInputElement).value;
        const email = (document.getElementById('user-email') as HTMLInputElement).value;
        const phone = (document.getElementById('user-phone') as HTMLInputElement).value;
        

        const experienceEntries = document.querySelectorAll('.experience-entry');
        const experiences: { companyName: string, role: string, date: string, responsibilities: string }[] = [];
        experienceEntries.forEach((entry) => {
            const companyName = (entry.querySelector('.company-name') as HTMLInputElement).value;
            const role = (entry.querySelector('.role') as HTMLInputElement).value;
            const date = (entry.querySelector('.experience-date') as HTMLInputElement).value;
            const responsibilities = (entry.querySelector('.responsibilities') as HTMLTextAreaElement).value;
            experiences.push({
                companyName: companyName,
                role: role,
                date: date,
                responsibilities: responsibilities,
            });
        });

        const educationEntries = document.querySelectorAll('.education-entry');
        const education: { schoolName: string, degree: string, date: string }[] = [];
        educationEntries.forEach((entry) => {
            const schoolName = (entry.querySelector('.school-name') as HTMLInputElement).value;
            const degree = (entry.querySelector('.degree') as HTMLInputElement).value;
            const date = (entry.querySelector('.education-date') as HTMLInputElement).value;
            education.push({
                schoolName: schoolName,
                degree: degree,
                date: date,
            });
        });

        (document.getElementById('resume-name') as HTMLElement).textContent = name;
        (document.getElementById('resume-title') as HTMLElement).textContent = title;

        // Update dynamic content like email and phone
        (document.getElementById('resume-email') as HTMLElement).innerHTML = `Email: <a href="mailto:${email}">${email}</a>`;
        (document.getElementById('resume-phone') as HTMLElement).textContent = `Phone: ${phone}`;

        const resumeExperience = document.getElementById('resume-experience') as HTMLElement;
        resumeExperience.innerHTML = '';
        experiences.forEach((experience) => {
            const div = document.createElement('div');
            div.classList.add('experience-item');
            div.innerHTML = `
                <h4>${experience.companyName} - ${experience.role} (${experience.date})</h4>
                <p><strong>Responsibilities:</strong> ${experience.responsibilities}</p>
            `;
            resumeExperience.appendChild(div);
        });

        const resumeEducation = document.getElementById('resume-education') as HTMLElement;
        resumeEducation.innerHTML = '';
        education.forEach((edu) => {
            const div = document.createElement('div');
            div.classList.add('education-item');
            div.innerHTML = `
                <h4>${edu.schoolName} - ${edu.degree} (${edu.date})</h4>
            `;
            resumeEducation.appendChild(div);
        });

        const skillsList = document.getElementById('resume-skills') as HTMLElement;
        skillsList.innerHTML = '';
        skills.split(',').forEach((skill) => {
            const li = document.createElement('li');
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        });

        const certificationsList = document.getElementById('resume-certifications') as HTMLElement;
        certificationsList.innerHTML = '';
        certifications.split(',').forEach((cert) => {
            const li = document.createElement('li');
            li.textContent = cert.trim();
            certificationsList.appendChild(li);
        });

        const languagesList = document.getElementById('resume-languages') as HTMLElement;
        languagesList.innerHTML = '';
        languages.split(',').forEach((language) => {
            const li = document.createElement('li');
            li.textContent = language.trim();
            languagesList.appendChild(li);
        });

        form.style.display = 'none';
        resumeSection.style.display = 'block';
    });

    // Edit and Save buttons functionality for each element
    document.body.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;

        if (target.classList.contains('edit-btn')) {
            const inputElement = target.previousElementSibling as HTMLElement;

            if (target.textContent === 'Edit') {
                // Make the element editable
                if (inputElement instanceof HTMLInputElement || inputElement instanceof HTMLTextAreaElement) {
                    inputElement.disabled = false;
                } else if (inputElement instanceof HTMLElement) {
                    inputElement.contentEditable = 'true';
                }

                target.textContent = 'Save'; // Change button to Save
            } else if (target.textContent === 'Save') {
                // Save the edited content and make the element uneditable
                if (inputElement instanceof HTMLInputElement || inputElement instanceof HTMLTextAreaElement) {
                    inputElement.disabled = true;
                } else if (inputElement instanceof HTMLElement) {
                    inputElement.contentEditable = 'false';
                }

                target.textContent = 'Edit'; // Change button back to Edit
            }
        }
    });
});
