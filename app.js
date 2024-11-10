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
    addExperienceButton.addEventListener('click', function () {
        var experienceEntry = document.createElement('div');
        experienceEntry.classList.add('experience-entry');
        experienceEntry.innerHTML = "\n            <label for=\"company-name\">Company Name:</label>\n            <input type=\"text\" class=\"company-name\" required>\n            <label for=\"role\">Role:</label>\n            <input type=\"text\" class=\"role\" required>\n            <label for=\"experience-date\">Date:</label>\n            <input type=\"text\" class=\"experience-date\" required>\n            <label for=\"responsibilities\">Responsibilities:</label>\n            <textarea class=\"responsibilities\" rows=\"3\" required></textarea>\n        ";
        experienceSection.appendChild(experienceEntry);
    });
    addEducationButton.addEventListener('click', function () {
        var educationEntry = document.createElement('div');
        educationEntry.classList.add('education-entry');
        educationEntry.innerHTML = "\n            <label for=\"school-name\">School Name:</label>\n            <input type=\"text\" class=\"school-name\" required>\n            <label for=\"degree\">Degree:</label>\n            <input type=\"text\" class=\"degree\" required>\n            <label for=\"education-date\">Date:</label>\n            <input type=\"text\" class=\"education-date\" required>\n        ";
        educationSection.appendChild(educationEntry);
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Capture form values
        var name = document.getElementById('user-name').value;
        var title = document.getElementById('user-title').value;
        var summary = document.getElementById('user-summary').value;
        var skills = document.getElementById('user-skills').value;
        var certifications = document.getElementById('user-certifications').value;
        var languages = document.getElementById('user-languages').value;
        // Capture dynamic email and phone number
        var email = document.getElementById('user-email').value;
        var phone = document.getElementById('user-phone').value;
        // Process experience entries
        var experienceEntries = document.querySelectorAll('.experience-entry');
        var experiences = [];
        experienceEntries.forEach(function (entry) {
            var companyName = entry.querySelector('.company-name');
            var role = entry.querySelector('.role');
            var date = entry.querySelector('.experience-date');
            var responsibilities = entry.querySelector('.responsibilities');
            experiences.push({
                companyName: companyName.value,
                role: role.value,
                date: date.value,
                responsibilities: responsibilities.value,
            });
        });
        // Process education entries
        var educationEntries = document.querySelectorAll('.education-entry');
        var education = [];
        educationEntries.forEach(function (entry) {
            var schoolName = entry.querySelector('.school-name');
            var degree = entry.querySelector('.degree');
            var date = entry.querySelector('.education-date');
            education.push({
                schoolName: schoolName.value,
                degree: degree.value,
                date: date.value,
            });
        });
        // Update the resume section with captured values
        document.getElementById('resume-name').textContent = name;
        document.getElementById('resume-title').textContent = title;
        // Update resume email and phone number
        document.getElementById('resume-email').innerHTML = "Email: <a href=\"mailto:".concat(email, "\">").concat(email, "</a>");
        document.getElementById('resume-phone').textContent = "Phone: ".concat(phone);
        // Populate experience section
        var resumeExperience = document.getElementById('resume-experience');
        resumeExperience.innerHTML = '';
        experiences.forEach(function (experience) {
            var div = document.createElement('div');
            div.classList.add('experience-item');
            div.innerHTML = "\n                <h4>".concat(experience.companyName, " - ").concat(experience.role, " (").concat(experience.date, ")</h4>\n                <p><strong>Responsibilities:</strong> ").concat(experience.responsibilities, "</p>\n            ");
            resumeExperience.appendChild(div);
        });
        // Populate education section
        var resumeEducation = document.getElementById('resume-education');
        resumeEducation.innerHTML = '';
        education.forEach(function (edu) {
            var div = document.createElement('div');
            div.classList.add('education-item');
            div.innerHTML = "\n                <h4>".concat(edu.schoolName, " - ").concat(edu.degree, " (").concat(edu.date, ")</h4>\n            ");
            resumeEducation.appendChild(div);
        });
        // Populate skills section
        var skillsList = document.getElementById('resume-skills');
        skillsList.innerHTML = '';
        skills.split(',').forEach(function (skill) {
            var li = document.createElement('li');
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        });
        // Populate certifications section
        var certificationsList = document.getElementById('resume-certifications');
        certificationsList.innerHTML = '';
        certifications.split(',').forEach(function (cert) {
            var li = document.createElement('li');
            li.textContent = cert.trim();
            certificationsList.appendChild(li);
        });
        // Populate languages section
        var languagesList = document.getElementById('resume-languages');
        languagesList.innerHTML = '';
        languages.split(',').forEach(function (language) {
            var li = document.createElement('li');
            li.textContent = language.trim();
            languagesList.appendChild(li);
        });
        // Show the resume section and hide the form
        form.style.display = 'none';
        resumeSection.style.display = 'block';
    });
});
