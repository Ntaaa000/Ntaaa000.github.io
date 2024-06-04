function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance){
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }
}

// Navigation links
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToElement('.header');
});

link2.addEventListener('click', (event) => {
    event.preventDefault(); 
    scrollToElement('.header', 1);
});

link3.addEventListener('click', (event) => {
    event.preventDefault(); 
    scrollToElement('.column');
});

// Footer links
const footerLink0 = document.getElementById("footer-link0");
const footerLink1 = document.getElementById("footer-link1");
const footerLink2 = document.getElementById("footer-link2");

footerLink0.addEventListener('click', (event) => {
    event.preventDefault(); 
    scrollToElement('nav');
});

footerLink1.addEventListener('click', (event) => {
    event.preventDefault(); 
    scrollToElement('.header');
});

footerLink2.addEventListener('click', (event) => {
    event.preventDefault(); 
    scrollToElement('.header', 1);
});
