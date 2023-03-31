// * Navbar mobile

let bars = document.getElementById("bars");
barsIcon = bars.getElementsByTagName('span');
let mobileMenu = document.getElementById("mobile-menu");

console.log(barsIcon)
let isOpen = false;
bars.addEventListener('click', () => {
    if (isOpen) {
        mobileMenu.classList.remove('-right-0');
        mobileMenu.classList.add('-right-[250px]');
        barsIcon[0].classList.remove('hidden');
        barsIcon[1].classList.add('hidden');
        isOpen = false;
    } else {
        mobileMenu.classList.remove('-right-[250px]');
        mobileMenu.classList.add('-right-0');
        barsIcon[0].classList.add('hidden');
        barsIcon[1].classList.remove('hidden');
        isOpen = true;
    }
})

// * Banner Slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

