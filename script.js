// // The navbar toggle button and the navbar menu
// let navList = document.querySelector('.nav_list');
// let navText = document.querySelector('.nav_text');
// // let navToggle = document.querySelector('.bi');

// navToggle.addEventListener('click', () => {
//     navText.classList.toggle('menu');
// });

// let closeIcon = document.querySelector('.bi-x-lg');

// closeIcon.addEventListener('click', () => {
//     navText.classList.remove('close');
// });

// // // Nav links
// // let homeLink = document.querySelector('.home');

// // homeLink.addEventListener('click', () => {
// //     let homeSection = document.querySelector('.section_1');
// //     homeSection.scrollIntoView({behavior: 'instant'});
// // });


// // let aboutLink = document.querySelector('.about');

// // aboutLink.addEventListener('click', () => {
// //     let aboutSection = document.querySelector('.section_2');
// //     aboutSection.scrollIntoView({behavior: 'smooth'});
// // });


// // let projectLink = document.querySelector('.projects');

// // projectLink.addEventListener('click', () => {
// //     let projectSection = document.querySelector('.section_3');
// //     projectSection.scrollIntoView({behavior: 'smooth'});
// // });


// // let contactLink = document.querySelector('.contacts');




// // Project button
// let projectBtn = document.getElementById('project_btn');

// projectBtn.addEventListener('click', () => {
//     let projectSection = document.querySelector('.section_3');
//     projectSection.scrollIntoView({behavior: 'smooth'});
// });

// // Contact button
// let contactBtn = document.querySelector('.btn_contact button');

// contactBtn.addEventListener('click', () => {
//     let contactSection = document.querySelector('.section_4');
//     contactSection.scrollIntoView({behavior: 'smooth'});
// });

// // Form submit button
// let formSubmitBtn = document.querySelector('input[type="submit"]');

// formSubmitBtn.addEventListener('click', (go) => {
//     go.preventDefault();


// // Form input value
//     let name = document.querySelector('input[type="text"]').value;
//     let email = document.querySelector('input[type="email"]').value;
//     let message = document.querySelector('textarea').value;

// // Form validation
//     if (name && email && message) {
//         alert('Thank You!! Your submission as been recevied', {name, email, message});
//     } else {
//         alert('Please fill in all the fields');
//     }
// });







// Navigation menu and toggle button
let navMenu = document.getElementById('nav_menu');
let menuBtn = document.getElementById('menu');
let closeBtn = document.getElementById('close');

menuBtn.addEventListener('click', () => {
    // navMenu.classList.add('show');
    // menuBtn.classList.add('hide');
    // closeBtn.classList.add('show');
    navMenu.classList.toggle('show');
    menuBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
});

closeBtn.addEventListener('click', () => {
    // navMenu.classList.remove('show');
    // menuBtn.classList.remove('hide');
    // closeBtn.classList.remove('show');
    navMenu.classList.toggle('hide');
    menuBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
});

// Smooth scrolling to sections
let links = document.querySelectorAll('.nav_text a');

links.forEach(link => {
    link.addEventListener('click', go => {
        go.preventDefault();
        let sectionId = link.getAttribute('href').slice(1);
        let section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
        navMenu.classList.remove('show');
        menuBtn.classList.remove('hide');
        closeBtn.classList.remove('show');
    });
});

// Home nav button 
let homeBtn = document.getElementById('home_nav');

homeBtn.addEventListener('click', () => {
    let homeSection = document.querySelector('.section_1');
    homeSection.scrollIntoView({behavior: 'smooth'});
});


// About nav button
let aboutBtn = document.getElementById('about_nav');

aboutBtn.addEventListener('click', () => {
    let aboutSection = document.querySelector('.section_2');
    aboutSection.scrollIntoView({behavior: 'smooth'});
});

// Project nav button
// let projectNav = document.querySelector('project_nav');

// projectNav.addEventListener('click', () => {
//     let projectSections = document.querySelector('.section_3');
//     projectSections.scrollIntoView({behavior: 'smooth'});
// });

// // Contact nav button
// let contactNav = document.getElementById('contact_nav'); 

// contactNav.addEventListener('click', () => {
//     let contactSections = document.querySelector('.section_4');
//     contactSections.scrollIntoView({behavior: 'smooth'});
// });

// Project nav btn 
let projectNav = document.getElementById('project_nav');
projectNav.addEventListener('click', () => {
    let projectSection = document.querySelector('.section_3');
    if (projectSection) {
        projectSection.scrollIntoView({behavior: 'smooth'});
    }
});

// Project button 
let projectBtn = document.getElementById('project_btn');
if (projectBtn) {
    projectBtn.addEventListener('click', () => {
        let projectSection = document.querySelector('.section_3');
        if (projectSection) {
            projectSection.scrollIntoView({behavior: 'smooth'});
        }
        let projectNav = document.getElementById('project_nav');
        if (projectNav) {
            projectNav.scrollIntoView({behavior: 'smooth'});
        }
    }
)};

// Contact Nav btn
let contactNav = document.getElementById('contact_nav');
contactNav.addEventListener('click', () => {
    let contactSection = document.querySelector('.section_4');
    if (contactSection) {
        contactSection.scrollIntoView({behavior: 'smooth'});
    }
});

// Contact button 
let contactBtn = document.getElementById('btn_contact');
if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        let contactSection = document.querySelector('.section_4');
        if (contactSection) {
            contactSection.scrollIntoView({behavior: 'smooth'});
        }
        let contactNav = document.getElementById('contact_nav');
        if (contactNav) {
            contactNav.scrollIntoView({behavior: 'smooth'});
        }
    }
)};


//Form submission 
let form = document.querySelector('form');

form.addEventListener('submit', send => {
    send.preventDefault();
    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let message = document.querySelector('textarea').value;

//Form validation
    if (name && email && message) {
        alert('Thank You!! Your submission as been recevied', {name, email, message});
    } else {
        alert('Please fill all fields')
    }

// Clear the form fields
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="email"]').value = '';
    document.querySelector('textarea').value = '';
});


// Add event listener to window resize to adjust nav menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('show');
        menuBtn.classList.remove('hide');
        closeBtn.classList.remove('show');
    }
});


// projectBtn.addEventListener('click', () => {
//     let projectSection = document.querySelector('.section_3');
    // projectSection.scrollIntoView({behavior: 'smooth'});
    // let projectNav = document.querySelector('project_nav');
    // projectNav.scrollIntoView({behavior: 'smooth'});

    // if (projectSection) {
    //     projectSection.scrollIntoView({behavior: 'smooth'});
    // } 
//     let projectNav = document.querySelector('project_nav');
//     if (projectNav) {
//         projectNav.scrollIntoView({behavior: 'smooth'});
//     }
//     console.log(projectNav);

// });

// Contact button 
// let contactBtn = document.getElementById('btn_contact');

// contactBtn.addEventListener('click', () => {
//     let contactSection = document.querySelector('.section_4');
//     contactSection.scrollIntoView({behavior: 'smooth'});
// });

// Navigation buttons
// let navButtons = [
//     {id: 'home_nav', sectionId: 'section_1'},
//     {id: 'about_nav', sectionId: 'section_2'},
//     {id: 'project_nav', sectionId: 'section_3'},
//     {id: 'contact_nav', sectionId: 'section_4'},
//     {id: 'project_btn', sectionId: 'section_3'},
//     {id: 'btn_contact', sectionId: 'section_4'}
// ];

// navButtons.forEach(button => {
//     let btn = document.getElementById(button.id);
//     btn.addEventListener('click', () => {
//         let section = document.querySelector(button.section);
//         section.scrollIntoView({behavior: "smooth"});
//     });
// });


