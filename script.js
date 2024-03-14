
/*=============== NORMAL NAVBAR SLIDE ===============*/
$(document).ready(function () {
    $('.navbar li').on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
});



/*=============== NORMAL NAVBAR ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.navbar ul li').forEach(li => {
                li.classList.remove('active'); // Usuwamy klasę 'active' ze wszystkich elementów 'li'
            });
            const activeLink = document.querySelector('.navbar ul li a[href*=' + sectionId + ']');
            if (activeLink) {
                activeLink.parentElement.classList.add('active'); // Dodajemy klasę 'active' do elementu 'li' rodzica aktywnego linku
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);




/*=============== NAVBAR PHONE ACTIVE LINK ===============*/
function scrollActive2() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive2)





/*=============== SLIDER ===============*/
document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('previous').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}



// =============animate on scroll==============
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));