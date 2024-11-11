document.addEventListener('DOMContentLoaded', function () {
    var downloadButton = document.getElementById('download-pdf-btn');
    // Check if the button exists before adding event listener
    if (downloadButton) {
        downloadButton.addEventListener('click', function () {
            var resumeSection = document.getElementById('resume-section');
            var footer = document.querySelector('footer');
            var downloadButton = document.getElementById('download-pdf-btn');
            if (resumeSection) {
                // Hide the footer and download button
                if (footer)
                    footer.style.display = 'none';
                if (downloadButton)
                    downloadButton.style.display = 'none';
                // Configure the PDF options
                var options = {
                    margin: 10,
                    filename: 'resume.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 4 },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                };
                // Convert the resume section into a PDF
                html2pdf().from(resumeSection).set(options).save();
                // Restore the footer and download button after the download
                setTimeout(function () {
                    if (footer)
                        footer.style.display = 'block';
                    if (downloadButton)
                        downloadButton.style.display = 'block';
                }, 1000); // Wait for 1 second to restore elements after download
            }
        });
    }
});
