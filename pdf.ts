declare var html2pdf: any;

document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-pdf-btn') as HTMLButtonElement;

    // Check if the button exists before adding event listener
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            const resumeSection = document.getElementById('resume-section');
            const footer = document.querySelector('footer');
            const downloadButton = document.getElementById('download-pdf-btn');

            if (resumeSection) {
                // Hide the footer and download button to prevent them from appearing in the PDF
                if (footer) footer.style.display = 'none';
                if (downloadButton) downloadButton.style.display = 'none';

                // Add a loading message or spinner if desired
                const loadingMessage = document.createElement('div');
                loadingMessage.textContent = 'Generating PDF...';
                loadingMessage.style.position = 'fixed';
                loadingMessage.style.top = '50%';
                loadingMessage.style.left = '50%';
                loadingMessage.style.transform = 'translate(-50%, -50%)';
                loadingMessage.style.fontSize = '20px';
                loadingMessage.style.color = '#000';
                document.body.appendChild(loadingMessage);

                // Configure the PDF options
                const options = {
                    margin: 10,
                    filename: 'resume.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 4 },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                };

                // Convert the resume section into a PDF
                html2pdf().from(resumeSection).set(options).save();

                // Restore the footer and download button after the download
                setTimeout(() => {
                    if (footer) footer.style.display = 'block';
                    if (downloadButton) downloadButton.style.display = 'block';
                    document.body.removeChild(loadingMessage); // Remove loading message
                }, 1000); // Wait for 1 second to restore elements after download
            }
        });
    }
});
