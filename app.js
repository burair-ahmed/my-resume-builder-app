//This Section Is for View More Button Toggle for Experience BUtton in INteractie Resume
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
//This Section Is for View Certificate Button Toggle for View Certificate in INteractie Resume
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
// This is the main form section to get user input and update into the resume
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeSection = document.getElementById('resume-section');
    var addExperienceButton = document.getElementById('add-experience');
    var addEducationButton = document.getElementById('add-education');
    var experienceSection = document.getElementById('experience-section');
    var educationSection = document.getElementById('education-section');
    var saveButton = document.getElementById('save-button');
    var editButton = document.getElementById('edit-button');
    addExperienceButton.addEventListener('click', function () {
        var experienceEntry = document.createElement('div');
        experienceEntry.classList.add('experience-entry');
        experienceEntry.innerHTML = "\n            <label for=\"company-name\">Company Name:</label>\n            <input type=\"text\" class=\"company-name\" required>\n            <label for=\"role\">Role:</label>\n            <input type=\"text\" class=\"role\" required>\n            <label for=\"experience-date\">Date:</label>\n            <input type=\"text\" class=\"experience-date\" required>\n            <label for=\"responsibilities\">Responsibilities:</label>\n            <textarea class=\"responsibilities\" rows=\"3\" required></textarea>\n            <button class=\"edit-btn\">Edit</button>\n        ";
        experienceSection.appendChild(experienceEntry);
    });
    addEducationButton.addEventListener('click', function () {
        var educationEntry = document.createElement('div');
        educationEntry.classList.add('education-entry');
        educationEntry.innerHTML = "\n            <label for=\"school-name\">School Name:</label>\n            <input type=\"text\" class=\"school-name\" required>\n            <label for=\"degree\">Degree:</label>\n            <input type=\"text\" class=\"degree\" required>\n            <label for=\"education-date\">Date:</label>\n            <input type=\"text\" class=\"education-date\" required>\n            <button class=\"edit-btn\">Edit</button>\n        ";
        educationSection.appendChild(educationEntry);
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('user-name').value;
        var title = document.getElementById('user-title').value;
        var summary = document.getElementById('user-summary').value;
        var skills = document.getElementById('user-skills').value;
        var certifications = document.getElementById('user-certifications').value;
        var languages = document.getElementById('user-languages').value;
        var email = document.getElementById('resume-email').textContent.replace('Email: ', '');
        var phone = document.getElementById('resume-phone').textContent.replace('Phone: ', '');
        var experienceEntries = document.querySelectorAll('.experience-entry');
        var experiences = [];
        experienceEntries.forEach(function (entry) {
            var companyName = entry.querySelector('.company-name').value;
            var role = entry.querySelector('.role').value;
            var date = entry.querySelector('.experience-date').value;
            var responsibilities = entry.querySelector('.responsibilities').value;
            experiences.push({
                companyName: companyName,
                role: role,
                date: date,
                responsibilities: responsibilities,
            });
        });
        var educationEntries = document.querySelectorAll('.education-entry');
        var education = [];
        educationEntries.forEach(function (entry) {
            var schoolName = entry.querySelector('.school-name').value;
            var degree = entry.querySelector('.degree').value;
            var date = entry.querySelector('.education-date').value;
            education.push({
                schoolName: schoolName,
                degree: degree,
                date: date,
            });
        });
        document.getElementById('resume-name').textContent = name;
        document.getElementById('resume-title').textContent = title;
        // Update dynamic content like email and phone
        document.getElementById('resume-email').innerHTML = "Email: <a href=\"mailto:".concat(email, "\">").concat(email, "</a>");
        document.getElementById('resume-phone').textContent = "Phone: ".concat(phone);
        var resumeExperience = document.getElementById('resume-experience');
        resumeExperience.innerHTML = '';
        experiences.forEach(function (experience) {
            var div = document.createElement('div');
            div.classList.add('experience-item');
            div.innerHTML = "\n                <h4>".concat(experience.companyName, " - ").concat(experience.role, " (").concat(experience.date, ")</h4>\n                <p><strong>Responsibilities:</strong> ").concat(experience.responsibilities, "</p>\n            ");
            resumeExperience.appendChild(div);
        });
        var resumeEducation = document.getElementById('resume-education');
        resumeEducation.innerHTML = '';
        education.forEach(function (edu) {
            var div = document.createElement('div');
            div.classList.add('education-item');
            div.innerHTML = "\n                <h4>".concat(edu.schoolName, " - ").concat(edu.degree, " (").concat(edu.date, ")</h4>\n            ");
            resumeEducation.appendChild(div);
        });
        var skillsList = document.getElementById('resume-skills');
        skillsList.innerHTML = '';
        skills.split(',').forEach(function (skill) {
            var li = document.createElement('li');
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        });
        var certificationsList = document.getElementById('resume-certifications');
        certificationsList.innerHTML = '';
        certifications.split(',').forEach(function (cert) {
            var li = document.createElement('li');
            li.textContent = cert.trim();
            certificationsList.appendChild(li);
        });
        var languagesList = document.getElementById('resume-languages');
        languagesList.innerHTML = '';
        languages.split(',').forEach(function (language) {
            var li = document.createElement('li');
            li.textContent = language.trim();
            languagesList.appendChild(li);
        });
        form.style.display = 'none';
        resumeSection.style.display = 'block';
    });
    // Edit and Save buttons functionality for each element
    document.body.addEventListener('click', function (event) {
        var target = event.target;
        if (target.classList.contains('edit-btn')) {
            var inputElement = target.previousElementSibling;
            if (target.textContent === 'Edit') {
                // Make the element editable
                if (inputElement instanceof HTMLInputElement || inputElement instanceof HTMLTextAreaElement) {
                    inputElement.disabled = false;
                }
                else if (inputElement instanceof HTMLElement) {
                    inputElement.contentEditable = 'true';
                }
                target.textContent = 'Save'; // Change button to Save
            }
            else if (target.textContent === 'Save') {
                // Save the edited content and make the element uneditable
                if (inputElement instanceof HTMLInputElement || inputElement instanceof HTMLTextAreaElement) {
                    inputElement.disabled = true;
                }
                else if (inputElement instanceof HTMLElement) {
                    inputElement.contentEditable = 'false';
                }
                target.textContent = 'Edit'; // Change button back to Edit
            }
        }
    });
});
