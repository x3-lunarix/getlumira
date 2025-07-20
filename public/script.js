document.addEventListener('DOMContentLoaded', function() {
    // Get elements for Key Modal
    const keyModal = document.getElementById('keyModal');
    const closeButton = document.querySelector('.modal .close-button');
    const getKeyButtonHero = document.getElementById('getKeyButtonHero');
    const getKeyButtonSection = document.getElementById('getKeyButtonSection');
    const premiumKeyInput = document.getElementById('premiumKey');
    const copyKeyBtn = document.getElementById('copyKeyBtn');

    // Function to open the modal
    function openKeyModal() {
        keyModal.style.display = 'flex'; // Make it visible
        setTimeout(() => {
            keyModal.classList.add('active'); // Trigger transition
        }, 10); // Small delay to allow display change to register
    }

    // Function to close the modal
    function closeKeyModal() {
        keyModal.classList.remove('active'); // Trigger reverse transition
        setTimeout(() => {
            keyModal.style.display = 'none'; // Hide after transition
        }, 300); // Match CSS transition duration
    }

    // Event listeners for opening modal
    if (getKeyButtonHero) {
        getKeyButtonHero.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor link behavior
            openKeyModal();
        });
    }
    if (getKeyButtonSection) {
        getKeyButtonSection.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor link behavior
            openKeyModal();
        });
    }

    // Event listeners for closing modal
    if (closeButton) {
        closeButton.addEventListener('click', closeKeyModal);
    }

    // Close modal if clicking outside the modal content
    if (keyModal) {
        keyModal.addEventListener('click', function(e) {
            if (e.target === keyModal) {
                closeKeyModal();
            }
        });
    }

    // Copy key to clipboard functionality
    if (copyKeyBtn) {
        copyKeyBtn.addEventListener('click', function() {
            if (premiumKeyInput) {
                premiumKeyInput.select();
                document.execCommand('copy'); // Use execCommand for broader compatibility in iframes

                // Visual feedback for copying
                const originalText = copyKeyBtn.innerHTML;
                copyKeyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyKeyBtn.classList.add('copied');

                setTimeout(() => {
                    copyKeyBtn.innerHTML = originalText;
                    copyKeyBtn.classList.remove('copied');
                }, 2000);
            }
        });
    }

    // Copy script functionality (existing)
    const copyScriptBtn = document.getElementById('copyScriptBtn');
    const scriptCode = 'loadstring(game:HttpGet("https://scripts.lumira.xyz"))()';
    
    if (copyScriptBtn) {
      copyScriptBtn.addEventListener('click', function() {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = scriptCode;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        const originalText = copyScriptBtn.innerHTML;
        copyScriptBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyScriptBtn.classList.add('copied');

        setTimeout(() => {
          copyScriptBtn.innerHTML = originalText;
          copyScriptBtn.classList.remove('copied');
        }, 2000);
      });
    }
});
