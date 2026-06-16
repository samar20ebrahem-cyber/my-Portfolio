const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose && navMenu) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLinks = document.querySelectorAll('.nav_list li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('show-menu');
        }
    });
});


// زرار ال اضافه البراجراف سيكشن عني 




//   هنضيف الاسبان حسب الرانج 

document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {
        const rangeInput = skill.querySelector("input[type='range']");
        const spanText = skill.querySelector("span");

        if (rangeInput && spanText) {
            spanText.textContent = rangeInput.value + "%";

    //   لو شلتي الديسبول من الرانج الاسبان هيتحدث تلقائي
            rangeInput.addEventListener("input", () => {
                spanText.textContent = rangeInput.value + "%";
            });
        }
    });
});
