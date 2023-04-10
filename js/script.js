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

// * Top Product Slider
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },
});

// * Advertising Slider
var swiper = new Swiper(".mySwiper3", {
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    freeMode: true,
    slidesPerView: 2,
    speed: 3000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
});

// * Brand Slider
var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 30,
    // centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        570: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 40,
        }
    }
});

// * Product Details Slideshow
function productDetailsSlide(n) {
    const previewImages = document.getElementById('product-details-img-preview').getElementsByTagName('img');
    const images = document.getElementById('product-details-img').getElementsByTagName('div');
    for (let i = 0; i < previewImages.length; i++) {
        previewImages[i].classList.add('hidden');
        images[i].classList.remove('border-[#16bcdc]');
    }
    previewImages[n - 1].classList.remove('hidden')
    images[n - 1].classList.add('border-[#16bcdc]')
}

// * Product Details List

function productDetailsList(n) {
    console.log(n)
    const listItem = document.getElementById('product-details-list').getElementsByTagName('li');
    const listContent = document.getElementById('product-details-list-content').getElementsByTagName('div');

    for (let i = 0; i < listItem.length; i++) {
        const element = listItem[i];
        element.classList.remove('border-b-2')
        element.classList.remove('border-[#16bcdc]')
        element.classList.add('text-[#b6b6b6]')
        listContent[i].classList.add('hidden');
    }
    listItem[n - 1].classList.add('border-b-2');
    listItem[n - 1].classList.add('border-[#16bcdc]');
    listItem[n - 1].classList.remove('text-[#b6b6b6]');
    listContent[n - 1].classList.remove('hidden');
}