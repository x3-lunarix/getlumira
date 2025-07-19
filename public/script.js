document.addEventListener('DOMContentLoaded', function() {
    const features = [
        {
            "icon": "magic",
            "title": "Advanced Scripts",
            "description": "Premium Roblox scripts with anti-ban protection",
            "color": "#8B5CF6"
        },
        {
            "icon": "fast",
            "title": "Instant Updates",
            "description": "Regular script updates to bypass detection",
            "color": "#3B82F6"
        },
        {
            "icon": "custom",
            "title": "Custom Requests",
            "description": "Get scripts tailored for your specific game",
            "color": "#10B981"
        }
    ];

    function renderFeatures() {
        const container = document.getElementById('features-container');
        container.innerHTML = features.map(feature => `
            <div class="feature-card" style="--feature-color: ${feature.color}">
                <div class="feature-icon">
                    <i class="fas fa-${feature.icon}"></i>
                </div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `).join('');
    }

    renderFeatures();

    const getKeyBtn = document.getElementById('get-key-btn');
    const keyPopup = document.getElementById('key-popup');
    const closePopup = document.querySelector('.close-popup');
    
    getKeyBtn.addEventListener('click', function() {
        keyPopup.style.display = 'flex';
    });
    
    closePopup.addEventListener('click', function() {
        keyPopup.style.display = 'none';
    });
    
    keyPopup.addEventListener('click', function(e) {
        if (e.target === keyPopup) {
            keyPopup.style.display = 'none';
        }
    });

    const copyBtn = document.querySelector('.copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const scriptCode = document.querySelector('.script-box code').innerText;
            navigator.clipboard.writeText(scriptCode).then(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-copy"></i> Copy';
                }, 2000);
            });
        });
    }
});
