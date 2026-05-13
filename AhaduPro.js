const swiperWindow = document.getElementById("swiper");
const projectWrapper = document.getElementById("cardWrapper");
const projectSlides = document.querySelectorAll(".project-card");
const projectDots = document.querySelectorAll(".projects-section .dot");
const projectContainer = document.querySelectorAll(".cards");

let projectSliderIndex = 0;
let isAnimating = false; // THE FLAG: Prevents the scroll listener from fighting the button
const scrollStep = 760;  // THE MATH: Card Width (700) + Gap (60) = 760

function showProjectSlide(index) {
    if (!projectWrapper || projectSlides.length === 0) return;

    // 1. Lock the listener
    isAnimating = true;

    // 2. Handle looping
    if (index >= projectSlides.length) projectSliderIndex = 0;
    else if (index < 0) projectSliderIndex = projectSlides.length - 1;
    else projectSliderIndex = index;

    // 3. Update Visuals
    updateActiveStates(projectSliderIndex);

    // 4. Perform Scroll
    swiperWindow.scrollTo({
        left: projectSliderIndex * scrollStep,
        behavior: 'smooth'
    });

    // 5. Unlock the listener after the smooth scroll finishes (approx 600ms)
    setTimeout(() => {
        isAnimating = false;
    }, 600);
}

// Separate function to handle all class changes to keep code clean
function updateActiveStates(index) {
    projectSlides.forEach((card, i) => {
        i === index ? card.classList.add("display") : card.classList.remove("display");
    });

    projectDots.forEach((d, i) => {
        i === index ? d.classList.add('active') : d.classList.remove('active');
    });

    projectContainer.forEach((c, n) => {
        n === index ? c.classList.add("dis") : c.classList.remove("dis");
    });
}

// 6. Detect manual scrolling/swiping (Only if NOT currently animating via button)
swiperWindow.addEventListener('scroll', () => {
    if (isAnimating) return; // If the button is moving the cards, don't do anything here

    const index = Math.round(swiperWindow.scrollLeft / scrollStep);
    if (index !== projectSliderIndex) {
        projectSliderIndex = index;
        updateActiveStates(projectSliderIndex);
    }
});

function nextProject() { showProjectSlide(projectSliderIndex + 1); }
function preProject() { showProjectSlide(projectSliderIndex - 1); }

document.addEventListener("DOMContentLoaded", () => {
    showProjectSlide(0);
});