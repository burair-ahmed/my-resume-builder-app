document.addEventListener('DOMContentLoaded', function () {
    var downloadButton = document.getElementById('download-pdf-btn');
    // Check if the button exists before adding event listener
    if (downloadButton) {
        downloadButton.addEventListener('click', function () {
            var resumeSection = document.getElementById('resume-section');
            if (resumeSection) {
                // Configure the pdf options
                var options = {
                    margin: 10,
                    filename: 'resume.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 4 },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                };
                // Convert the resume section into a PDF
                html2pdf().from(resumeSection).set(options).save();
            }
        });
    }
});
