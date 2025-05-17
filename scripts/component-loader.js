// will  be used to load components like the footer/header files.
async function loadComponent(id, file) {
    const response =  await fetch(file);
    if (response.ok) {
        const content = await response.text();
        document.getElementById(id).innerHTML = content;
    } else {
        console.error(`Failed to load ${file}: ${response.statusText}`);
    }
}

function loadCommonComponents(){
    loadComponent('header-placeholder', '/components/header.html');
    loadComponent('footer-placeholder', '/components/footer.html');
}