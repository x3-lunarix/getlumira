document.addEventListener('DOMContentLoaded', function() {
    // This array is no longer used as features are directly in HTML, but kept for reference if dynamic features were intended
    // const features = [
    //     {
    //         "icon": "magic",
    //         "title": "Advanced Scripts",
    //         "description": "Premium Roblox scripts with anti-ban protection",
    //         "color": "#8B5CF6"
    //     },
    //     {
    //         "icon": "fast",
    //         "title": "Instant Updates",
    //         "description": "Regular script updates to bypass detection",
    //         "color": "#3B82F6"
    //     },
    //     {
    //         "icon": "custom",
    //         "title": "Custom Requests",
    //         "description": "Get scripts tailored for your specific game",
    //         "color": "#10B981"
    //     }
    // ];

    // The renderFeatures function is no longer needed as features are hardcoded in HTML
    // function renderFeatures() {
    //     const container = document.getElementById('features-container');
    //     container.innerHTML = features.map(feature => `
    //         <div class="feature-card" style="--feature-color: ${feature.color}">
    //             <div class="feature-icon">
    //                 <i class="fas fa-${feature.icon}"></i>
    //             </div>
    //             <h3>${feature.title}</h3>
    //             <p>${feature.description}</p>
    //         </div>
    //     `).join('');
    // }

    // renderFeatures(); // This call is no longer needed

    // The get key button and popup functionality was removed from HTML
    // const getKeyBtn = document.getElementById('get-key-btn');
    // const keyPopup = document.getElementById('key-popup');
    // const closePopup = document.querySelector('.close-popup');
    
    // if (getKeyBtn) {
    //     getKeyBtn.addEventListener('click', function() {
    //         if (keyPopup) keyPopup.style.display = 'flex';
    //     });
    // }
    
    // if (closePopup) {
    //     closePopup.addEventListener('click', function() {
    //         if (keyPopup) keyPopup.style.display = 'none';
    //     });
    // }
    
    // if (keyPopup) {
    //     keyPopup.addEventListener('click', function(e) {
    //         if (e.target === keyPopup) {
    //             keyPopup.style.display = 'none';
    //         }
    //     });
    // }

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
