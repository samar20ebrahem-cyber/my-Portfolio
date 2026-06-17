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

const addMoreP = document.getElementById('readMore');
const readSecoundP = document.getElementById('read');

if (addMoreP && readSecoundP) {
    addMoreP.addEventListener('click', () => {
        // بنشيك على الـ display الحالي للبراجراف
        if (readSecoundP.style.display === 'block') {
            // لو هو ظاهر فعلاً.. إذن اليوزر عاوز يقفل (Read Less)
            readSecoundP.style.display = 'none';
            addMoreP.textContent = 'Read More';
        } else {
            // لو هو مخفي (أو لسه الصفحة فاتحة).. إذن اليوزر عاوز يفتح (Read More)
            readSecoundP.style.display = 'block';
            addMoreP.textContent = 'Read Less';
        }
    });
}


//   هنضيف الاسبان حسب الرانج 

document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {
        const rangeInput = skill.querySelector("input[type='range']");
        const spanText = skill.querySelector("span");

        if (rangeInput && spanText) {
            const updateProgress = () => {
               const currentPercent = rangeInput.value;
                spanText.textContent = currentPercent + "%";
                rangeInput.style.background = `linear-gradient(to right, #c0268f 0%, #9F2B7E ${currentPercent}%, #2a1f4d ${currentPercent}%, #2a1f4d 100%)`;
    };

            updateProgress();

    //   لو شلتي الديسبول من الرانج الاسبان هيتحدث تلقائي
            rangeInput.addEventListener("input", updateProgress);
         }
    });
});



