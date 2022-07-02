// let anchors = document.querySelectorAll('header a[href*="#"]');

// for (anchor of anchors) {
//     if (anchor) {
//         anchor.addEventListener('click', function(e){
//             e.preventDefault();
//             anchorId = this.getAttribute('href');
//             document.querySelector(anchorId).scrollIntoView ({
//                 behavior: 'smooth', block: 'start'
//             })
//         })
//     }
// }

// document.querySelectorAll(a.header__social_link).forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault()

//         const href = this.getAttribute('href').substring(1)
//         const scrollTarget = document.getElementById(href)

//         const topOffset = 0
//         const elementPosition = scrollTarget
//         getBoundingClientRect().top
//         const offsetPosition = elementPosition - topOffset

//         window.scrollBy({
//             top: offsetPosition,
//             behavior: 'smooth',
//         })
//     })
// })

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();

        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}