// will  be used to load components like the footer/header files.
async function loadComponent(id, file, callback) {
    const response =  await fetch(file);
    if (response.ok) {
        const content = await response.text();
        document.getElementById(id).innerHTML = content;
        if (typeof callback === 'function') {
            callback(); // logic after load for things like (hamburger toggle)
        }
    } else {
        console.error(`Failed to load ${file}: ${response.statusText}`);
    }
}

function loadCommonComponents(){
    loadComponent('header-placeholder', '/components/header.html', hamburgerToggle);
    loadComponent('footer-placeholder', '/components/footer.html');
}

function hamburgerToggle() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('header nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        })
    }
}