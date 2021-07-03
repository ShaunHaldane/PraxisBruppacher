//////////////// Intro Animation

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo(".header-container", { opacity: 0 }, { opacity: 1, duration: 1 });

/////////////// End of Intro Animation

///////////////// Responsive Navbar

const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}
navSlide();

///////////////// End of Responsive navbar

//////////////// Description Animations

const logopädieDescription = () => {
    const productContainer = document.getElementById('logopädie-img');
    const description = document.getElementById('logopädie-description');
    let clicked = 0;

    productContainer.addEventListener('click', () => {
        if (clicked % 2 === 0) {
            productContainer.style.opacity = 0.2;
            description.style.display = 'block';
            clicked++;
            console.log(clicked);
        }
        else {
            productContainer.style.opacity = 1;
            description.style.display = 'none';
            clicked++;
            console.log(clicked);
        }
    });
}
logopädieDescription();

const PsychosomatischeDescription = () => {
    const productContainer = document.getElementById('Psychosomatische-img');
    const description = document.getElementById('Psychosomatische-description');
    let clicked = 0;

    productContainer.addEventListener('click', () => {
        if (clicked % 2 === 0) {
            productContainer.style.opacity = 0.2;
            description.style.display = 'block';
            clicked++;
            console.log(clicked);
        }
        else {
            productContainer.style.opacity = 1;
            description.style.display = 'none';
            clicked++;
            console.log(clicked);
        }
    });
}
PsychosomatischeDescription();

const PsycotherapyDescription = () => {
    const productContainer = document.getElementById('Psycotherapy-img');
    const description = document.getElementById('Psycotherapy-description');
    let clicked = 0;

    productContainer.addEventListener('click', () => {
        if (clicked % 2 === 0) {
            productContainer.style.opacity = 0.2;
            description.style.display = 'block';
            clicked++;
            console.log(clicked);
        }
        else {
            productContainer.style.opacity = 1;
            description.style.display = 'none';
            clicked++;
            console.log(clicked);
        }
    });
}
PsycotherapyDescription();

const MatrixDescription = () => {
    const productContainer = document.getElementById('Matrix-img');
    const description = document.getElementById('Matrix-description');
    let clicked = 0;

    productContainer.addEventListener('click', () => {
        if (clicked % 2 === 0) {
            productContainer.style.opacity = 0.2;
            description.style.display = 'block';
            clicked++;
            console.log(clicked);
        }
        else {
            productContainer.style.opacity = 1;
            description.style.display = 'none';
            clicked++;
            console.log(clicked);
        }
    });
}
MatrixDescription();

const SystemischeDescription = () => {
    const productContainer = document.getElementById('Systemische-img');
    const description = document.getElementById('Systemische-description');
    let clicked = 0;

    productContainer.addEventListener('click', () => {
        if (clicked % 2 === 0) {
            productContainer.style.opacity = 0.2;
            description.style.display = 'block';
            clicked++;
            console.log(clicked);
        }
        else {
            productContainer.style.opacity = 1;
            description.style.display = 'none';
            clicked++;
            console.log(clicked);
        }
    });
}

SystemischeDescription();

