document.addEventListener('DOMContentLoaded', function () {
    var downloadButton = document.getElementById('download-pdf-btn');
    // Check if the button exists before adding event listener
    if (downloadButton) {
        downloadButton.addEventListener('click', function () {
            var resumeSection = document.getElementById('resume-section');
            var footer = document.querySelector('footer');
            var downloadButton = document.getElementById('download-pdf-btn');
            var linkbutton = document.getElementById('copy-link-btn');
            if (resumeSection) {
                // Hide the footer and download button to prevent them from appearing in the PDF
                if (footer)
                    footer.style.display = 'none';
                if (downloadButton)
                    downloadButton.style.display = 'none';
                if (linkbutton)
                    linkbutton.style.display = 'none';
                // Add a loading message or spinner if desired
                var loadingMessage_1 = document.createElement('div');
                loadingMessage_1.textContent = 'Generating PDF...';
                loadingMessage_1.style.position = 'fixed';
                loadingMessage_1.style.top = '50%';
                loadingMessage_1.style.left = '50%';
                loadingMessage_1.style.transform = 'translate(-50%, -50%)';
                loadingMessage_1.style.fontSize = '20px';
                loadingMessage_1.style.color = '#000';
                document.body.appendChild(loadingMessage_1);
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
                    document.body.removeChild(loadingMessage_1); // Remove loading message
                }, 1000); // Wait for 1 second to restore elements after download
            }
        });
    }
});
