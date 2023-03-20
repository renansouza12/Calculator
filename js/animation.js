
 //calculator animation
gsap.from('.calculator',{duration:1.3, x:-500, ease:'back'})
//animation display
gsap.from('.display',{ opacity:0,y:300})
//buttons animations
gsap.from("button",{duration:1,delay:0.5,  opacity:0,stagger:0.25 }) 