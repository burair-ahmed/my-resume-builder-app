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
    const addExperienceButton = document.getElementById('add-experience') as HTMLButtonElement;
    const addEducationButton = document.getElementById('add-education') as HTMLButtonElement;
    const experienceSection = document.getElementById('experience-section') as HTMLElement;
    const educationSection = document.getElementById('education-section') as HTMLElement;


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

     
        const experienceEntries = document.querySelectorAll('.experience-entry');
        const experiences = [];
        experienceEntries.forEach((entry: HTMLElement) => {
            const companyName = entry.querySelector('.company-name') as HTMLInputElement;
            const role = entry.querySelector('.role') as HTMLInputElement;
            const date = entry.querySelector('.experience-date') as HTMLInputElement;
            const responsibilities = entry.querySelector('.responsibilities') as HTMLTextAreaElement;
            experiences.push({
                companyName: companyName.value,
                role: role.value,
                date: date.value,
                responsibilities: responsibilities.value,
            });
        });

        const educationEntries = document.querySelectorAll('.education-entry');
        const education = [];
        educationEntries.forEach((entry: HTMLElement) => {
            const schoolName = entry.querySelector('.school-name') as HTMLInputElement;
            const degree = entry.querySelector('.degree') as HTMLInputElement;
            const date = entry.querySelector('.education-date') as HTMLInputElement;
            education.push({
                schoolName: schoolName.value,
                degree: degree.value,
                date: date.value,
            });
        });

     
        (document.getElementById('resume-name') as HTMLElement).textContent = name;
        (document.getElementById('resume-title') as HTMLElement).textContent = title;

       
        const resumeExperience = document.getElementById('resume-experience') as HTMLElement;
        resumeExperience.innerHTML = ''; 
        experiences.forEach(experience => {
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
        education.forEach(edu => {
            const div = document.createElement('div');
            div.classList.add('education-item');
            div.innerHTML = `
                <h4>${edu.schoolName} - ${edu.degree} (${edu.date})</h4>
            `;
            resumeEducation.appendChild(div);
        });

        
        const skillsList = document.getElementById('resume-skills') as HTMLElement;
        skillsList.innerHTML = '';
        skills.split(',').forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        });

      
        const certificationsList = document.getElementById('resume-certifications') as HTMLElement;
        certificationsList.innerHTML = '';
        certifications.split(',').forEach(cert => {
            const li = document.createElement('li');
            li.textContent = cert.trim();
            certificationsList.appendChild(li);
        });

     
        const languagesList = document.getElementById('resume-languages') as HTMLElement;
        languagesList.innerHTML = '';
        languages.split(',').forEach(language => {
            const li = document.createElement('li');
            li.textContent = language.trim();
            languagesList.appendChild(li);
        });

       
        form.style.display = 'none';
        resumeSection.style.display = 'block';
    });
});
