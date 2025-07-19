document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            navItems.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            this.classList.add('active');
            
            const tabId = this.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });

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

    const keyOptions = document.querySelectorAll('.key-option');
    keyOptions.forEach(option => {
        option.addEventListener('click', function() {
            keyOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            const service = this.querySelector('span').textContent;
            console.log(`Selected service: ${service}`);
        });
    });
});
