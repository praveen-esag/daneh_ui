let mm = gsap.matchMedia();

//Smooth scroll init
// const lenis = new Lenis()

// // lenis.on('scroll', (e) => {
// //     console.log(e)
// // })

// function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger);

// mm.add("(min-width: 991px)", () => {
const imgtl = gsap.timeline({ paused: true })

let icons = document.querySelectorAll('.icon');
let hiddenImages = document.querySelectorAll('.prodImg');
let centerImage = document.querySelector('.center-image');
let prodImg = document.querySelectorAll('prodImglt');
let prodImglt = document.querySelector('.prodImglt');
let prodImglb = document.querySelector('.prodImglb');
let prodImgrt = document.querySelector('.prodImgrt');
let prodImgrb = document.querySelector('.prodImgrb');
let prodlabel = document.querySelector('.prodLabel');
let columns = document.querySelectorAll('.prodCol');
let container = document.querySelector('.mobstickrow');

// Create a timeline
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.animarea',
        // trigger: centerImage,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        markers: true
    }
});

// Step 1: Center image appears
tl.to(centerImage, {
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.animarea',
        // trigger: centerImage,
        start: 'top 80%',
        // pin: true,
        end: '+=100%',
        scrub: true,
        markers: true
    }
    // onComplete: () => {
    //     // Step 2: Icons move closer to the center image
    //     icons.forEach((icon, index) => {
    //         tl.fromTo(icon,
    //             { opacity: 0, y: (icon.offsetTop - 150) * 0.6, x: (icon.offsetLeft - 150) * 0.6 },
    //             {
    //                 opacity: 1,
    //                 y: 0,
    //                 x: 0,
    //                 duration: 1,
    //                 delay: index * 0.1,
    //                 scrollTrigger: {
    //                     trigger: '.animarea',
    //                     // trigger: centerImage,
    //                     start: 'top 50%',
    //                     // pin: true,
    //                     end: '+=100%',
    //                     scrub: true,
    //                     markers: true
    //                 }
    //             }
    //         ), '-=1';
    //     });
    // }
});
icons.forEach((icon, index) => {
    tl.fromTo(icon,
        { opacity: 0, y: (icon.offsetTop - 150) * 0.6, x: (icon.offsetLeft - 150) * 0.6 },
        {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: '.animarea',
                // trigger: centerImage,
                start: 'top 70%',
                // pin: true,
                end: '+=100%',
                scrub: true,
                markers: true
            }
        }
    );
});

// Step 3: Icons fade out
tl.fromTo(icons, {
    duration: 3,
    opacity: 1,
    delay: 1 // Add a delay before fading out the icons
}, {
    duration: 3,
    opacity: 0,
    // delay: 1 // Add a delay before fading out the icons
}, '+=2');
tl.to(centerImage, {
    scale: 1.3,
    y: 200,
    duration: 1
});


// Step 4: Hidden images appear
tl.fromTo(prodImglt,
    { width: "50%", opacity: 0, y: -50, x: -60, duration: 1 },
    {
        width: "100%",
        opacity: 1,
        y: 0,
        x: 0,
    }, "-=1"
)
    .fromTo(prodImglb,
        { opacity: 0, width: "50%", y: -70, x: 30, duration: 1 },
        {
            width: "100%",
            opacity: 1,
            y: 0,
            x: 0,
        }, "-=1"
    )
    .fromTo(prodImgrt,
        { opacity: 0, width: "50%", y: -50, x: 250, duration: 1 },
        {
            width: "100%",
            opacity: 1,
            y: 0,
            x: 0,
        }, "-=1"
    )
    .fromTo(prodImgrb,
        { opacity: 0, width: "50%", y: 50, x: 230, duration: 1 },
        {
            width: "100%",
            opacity: 1,
            y: 0,
            x: 0,
        }, "-=1"
    );
tl.to(container, {
    xPercent: -100 * (columns.length - 1),
    ease: "none"
});
tl.to(prodlabel, {
    opacity: 1,
    y: 0,
    duration: 1
})
// });

$(document).ready(function () {

    $('.prodImg').on("click", function () {
        $('.prodModal').css("display", "flex");
        $('.prodModal').addClass('show');
        $('body').css("overflow", "hidden");
    });
    $(".modalClose").click(function () {
        $(".prodModal").hide();
        $(".prodModal").removeClass('show');
        $('body').css("overflow", "auto");
    });

    // $('.imgInner').on("mouseenter", function(){
    //     $(this).find('span:last-child').addClass('txtShow');
    // });
    // $('.imgInner').on("mouseleave", function(){
    //     $(this).find('span:last-child').removeClass('txtShow');
    // });


}); // document ready function ends here
document.addEventListener("DOMContentLoaded", function () {
    const imgInnerElements = document.querySelectorAll('.imgInner');
    imgInnerElements.forEach(imgInner => {
        const label1 = imgInner.querySelector('p:first-child');
        const label2 = imgInner.querySelector('p:last-child');
        const targetId = imgInner.getAttribute('data-target');
        const targetImage = document.getElementById(targetId);

        imgInner.addEventListener('mouseenter', function () {
            gsap.to(label2, { duration: 0.5, opacity: 1, width: "auto" });
            gsap.to(label1, { duration: 0.5, opacity: 0 });
            gsap.to(targetImage, { duration: 0.5, opacity: 0.5, scale: 1.05 });
        });

        imgInner.addEventListener('mouseleave', function () {
            gsap.to(label2, { duration: 0.5, opacity: 0, width: "0" });
            gsap.to(label1, { duration: 0.5, opacity: 1 });
            gsap.to(targetImage, { duration: 0.5, opacity: 1, scale: 1 });
        });
    });
});

//Hero animation on scroll
// function heroAnimation() {
//     let scaleValue;
//     if (window.innerWidth < 992) {
//         scaleValue = 1;
//     } else {
//         scaleValue = 1.3;
//     }
//     let herotimeline = gsap.timeline();

//     herotimeline.to('.header_cue', {
//         top: '-100%',
//         duration: 4,
//         ease: 'none',
//     });
//     herotimeline.fromTo(
//         '.header_main-image',
//         {
//             scale: scaleValue,
//         },
//         {
//             scale: 1,
//             duration: 1.7,
//         },
//         '<'
//     );
//     herotimeline.fromTo(
//         '.header_main-img',
//         { width: '238%', x: '50%', y: '40%', right: '50%' },
//         {
//             width: '100%',

//             y: 0,
//             x: 0,
//             right: 0,
//             duration: 1.7,
//             overwrite: true,
//         },
//         '<'
//     );
//     herotimeline.to(
//         '.text-reveal',
//         {
//             duration: 0.4,
//             stagger: 0.2,
//             y: 0,
//             ease: 'expo.out',
//         },
//         '<+0.8'
//     );

//     herotimeline.to(
//         '.header_images-column',
//         {
//             autoAlpha: 1,
//             y: 0,
//             duration: 2.3,
//         },
//         '<+=1'
//     );

//     herotimeline.to(
//         '.header_text-content',
//         {
//             autoAlpha: 1,
//             duration: 0.75,
//         },
//         '<'
//     );
//     let end = 'bottom top';
//     if (window.innerWidth < 992) {
//         const wrapper = document.querySelector('.header_grid');
//         end = wrapper.offsetWidth;
//         herotimeline.to(wrapper, {
//             x: () => `+=${(-wrapper.scrollWidth + window.innerWidth) / 2}`,
//             duration: 8,
//         });
//     }
//     herotimeline.add(() => {
//         ScrollTrigger.refresh();
//     });
//     ScrollTrigger.create({
//         animation: herotimeline,
//         trigger: '.header_wrapper',
//         scrub: 3,
//         pin: true,
//         start: 'center center',
//         end: end,
//         invalidateOnRefresh: true,
//         toggleActions: 'play pause reverse pause',
//     });
// }
// window.revealAnim = function (item, scroll) {
//     gsap.set(item, { scaleY: 1 });
//     let revealImage = gsap.to(item, {
//         scaleY: 0,
//         duration: 2,
//         ease: 'image',
//     });

//     if (!scroll) return;
//     scrollDefault(revealImage, item, true);
// };

// heroAnimation();

document.addEventListener('DOMContentLoaded', function () {
    const columns = document.querySelectorAll('.mobprodCol');
    const container = document.querySelector('.mobstickrow');

    // Set the width of the container to be the number of columns times 100%
    // container.style.width = `${columns.length * 100}vw`;

    // Create the GSAP timeline
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "top top",
            end: 'bottom top',
            scrub: true,
            pin: true,
            markers: true
        }
    });

    // Add horizontal scroll animation
    tl2.to(container, {
        xPercent: -100 * (columns.length - 1),
        ease: "none"
    });
});