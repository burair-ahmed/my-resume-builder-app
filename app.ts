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
    const copyLinkButton = document.getElementById('copy-link-btn') as HTMLButtonElement; // Button to copy shareable link

    const saveButton = document.getElementById('save-button') as HTMLElement;
    const editButton = document.getElementById('edit-button') as HTMLElement;

    // Function to generate a unique ID for the resume
    function generateUniqueId(): string {
        return Math.random().toString(36).substr(2, 9); // Generates a random ID
    }

    // Add experience entry
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

    // Add education entry
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

    // Form submission
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
        const address = (document.getElementById('user-address') as HTMLInputElement).value;
        
        // Collect experience entries
        const experienceEntries = document.querySelectorAll('.experience-entry');
        const experiences: { companyName: string, role: string, date: string, responsibilities: string }[] = [];
        experienceEntries.forEach((entry) => {
            const companyName = (entry.querySelector('.company-name') as HTMLInputElement).value;
            const role = (entry.querySelector('.role') as HTMLInputElement).value;
            const date = (entry.querySelector('.experience-date') as HTMLInputElement).value;
            const responsibilities = (entry.querySelector('.responsibilities') as HTMLTextAreaElement).value;
            experiences.push({
                companyName,
                role,
                date,
                responsibilities,
            });
        });

        // Collect education entries
        const educationEntries = document.querySelectorAll('.education-entry');
        const education: { schoolName: string, degree: string, date: string }[] = [];
        educationEntries.forEach((entry) => {
            const schoolName = (entry.querySelector('.school-name') as HTMLInputElement).value;
            const degree = (entry.querySelector('.degree') as HTMLInputElement).value;
            const date = (entry.querySelector('.education-date') as HTMLInputElement).value;
            education.push({
                schoolName,
                degree,
                date,
            });
        });

        // Store resume data in localStorage with a unique ID
        const resumeData = {
            name,
            title,
            summary,
            skills,
            certifications,
            languages,
            email,
            phone,
            address,
            experiences,
            education,
        };

        const resumeId = generateUniqueId();
        localStorage.setItem(resumeId, JSON.stringify(resumeData));

        // Update resume section with data
        (document.getElementById('resume-name') as HTMLElement).textContent = name;
        (document.getElementById('resume-title') as HTMLElement).textContent = title;
        (document.getElementById('resume-email') as HTMLElement).innerHTML = `Email: <a href="mailto:${email}">${email}</a>`;
        (document.getElementById('resume-phone') as HTMLElement).textContent = `Phone: ${phone}`;
        (document.getElementById('resume-address') as HTMLElement).textContent = address;

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

        // Skills, certifications, and languages
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

        // Display the resume and the copy link button
        form.style.display = 'none';
        resumeSection.style.display = 'block';
        copyLinkButton.style.display = 'inline-block';

        // Generate and set the shareable link
        const shareableLink = `${window.location.href}?resumeId=${resumeId}`;
        copyLinkButton.setAttribute('data-link', shareableLink);
    });

    // Copy shareable link to clipboard
    copyLinkButton.addEventListener('click', () => {
        const link = copyLinkButton.getAttribute('data-link');
        if (link) {
            navigator.clipboard.writeText(link).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy link: ', err);
            });
        }
    });

    // Load resume from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const resumeId = urlParams.get('resumeId');
    if (resumeId) {
        const storedData = localStorage.getItem(resumeId);
        if (storedData) {
            const resumeData = JSON.parse(storedData);
            // Populate the resume with stored data
            (document.getElementById('resume-name') as HTMLElement).textContent = resumeData.name;
            (document.getElementById('resume-title') as HTMLElement).textContent = resumeData.title;
            (document.getElementById('resume-email') as HTMLElement).innerHTML = `Email: <a href="mailto:${resumeData.email}">${resumeData.email}</a>`;
            (document.getElementById('resume-phone') as HTMLElement).textContent = `Phone: ${resumeData.phone}`;
            (document.getElementById('resume-address') as HTMLElement).textContent = resumeData.address;

            // Populate experiences and education
            const resumeExperience = document.getElementById('resume-experience') as HTMLElement;
            resumeExperience.innerHTML = '';
            resumeData.experiences.forEach((experience: { companyName: string, role: string, date: string, responsibilities: string }) => {
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
            resumeData.education.forEach((edu: { schoolName: string, degree: string, date: string }) => {
                const div = document.createElement('div');
                div.classList.add('education-item');
                div.innerHTML = `
                    <h4>${edu.schoolName} - ${edu.degree} (${edu.date})</h4>
                `;
                resumeEducation.appendChild(div);
            });

            // Populate skills, certifications, and languages
            const skillsList = document.getElementById('resume-skills') as HTMLElement;
            skillsList.innerHTML = '';
            resumeData.skills.split(',').forEach((skill: string) => {
                const li = document.createElement('li');
                li.textContent = skill.trim();
                skillsList.appendChild(li);
            });

            const certificationsList = document.getElementById('resume-certifications') as HTMLElement;
            certificationsList.innerHTML = '';
            resumeData.certifications.split(',').forEach((cert: string) => {
                const li = document.createElement('li');
                li.textContent = cert.trim();
                certificationsList.appendChild(li);
            });

            const languagesList = document.getElementById('resume-languages') as HTMLElement;
            languagesList.innerHTML = '';
            resumeData.languages.split(',').forEach((language: string) => {
                const li = document.createElement('li');
                li.textContent = language.trim();
                languagesList.appendChild(li);
            });

            resumeSection.style.display = 'block';
        }
    }
});
