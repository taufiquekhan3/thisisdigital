Shery.mouseFollower();

Shery.makeMagnet(".magnet");

gsap.from("#img1", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y:60
})


gsap.from("#img2", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    x:60
})

gsap.from("#img3", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y: -60
})

gsap.from("#main #heading h1", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
})

// gsap.to("#page2 h5", {
//     opacity:0,
//     stagger: 0.4,
//     scrollTrigger: {
//         trigger: "#page2 h5",
//     scroller: "body",
//         start: "top 80%",
//         end: "bottom end",
//         markers: true
//     }
// })


var Path =`M 10 50 Q 500 50 990 50`
 
var finalPath = `M 10 50 Q 500 50 990 50`

var string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets) {
   path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

   gsap.to("svg path", {
       attr: { d:path } ,
       duration:0.3,
       ease: "power.out"
   })
})


string.addEventListener("mouseleave",function() {
    gsap.to("svg path", {
        attr:{d:finalPath},
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })
})


