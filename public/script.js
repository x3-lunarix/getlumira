document.addEventListener('DOMContentLoaded', function() {
    // Copy script functionality
    const copyBtn = document.getElementById('copyBtn');
    const scriptCode = 'loadstring(game:HttpGet("https://scripts.lumira.xyz"))()';
    
    if (copyBtn) {
      copyBtn.addEventListener('click', function() {
        // Create a temporary textarea element to hold the text to be copied
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = scriptCode;
        // Append it to the body
        document.body.appendChild(tempTextArea);
        // Select the text
        tempTextArea.select();
        // Execute the copy command
        document.execCommand('copy');
        // Remove the temporary textarea
        document.body.removeChild(tempTextArea);

        // Update button text and class for visual feedback
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.classList.add('copied');
        // Revert button text and class after a delay
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy Script';
          copyBtn.classList.remove('copied');
        }, 2000);
      });
    }
});
