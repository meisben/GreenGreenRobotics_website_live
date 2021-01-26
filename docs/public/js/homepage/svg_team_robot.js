// Note: codepen at -> https://codepen.io/benisme/pen/oNzrKNP

//variables for animation
greenRocketClass = $('.greenRocketclass2')
yellowRocketClass = $('.yellowRocketClass2');
robot1Group = $('#robot1Group');
robot1ArmGroup = $('#robot1ArmGroup')
robot2Group = $('#robot2Group');


// animation with GSAP
// Create timeline and add begining label
var rocketRobot1Tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
var flyingRobot1Tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
var movingRobot2Tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
var movingRobot3Tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });


// Create rocket animation and add begining label (Robot1)
rocketRobot1Tl.addLabel('beginning')

rocketRobot1Tl.fromTo(greenRocketClass, { scaleY: 0.5 }, {
    duration: 0.2,
    scaleY: 0.8,
    transformOrigin: "top",
    ease: "power1.inOut",
    stagger: 0.2,
    yoyo: false,
}, "beginning");

rocketRobot1Tl.fromTo(greenRocketClass, { scaleY: 1 }, {
    duration: 0.2,
    scaleY: 0.5,
    transformOrigin: "top",
    ease: "power1.inOut",
    stagger: 0.2,
    yoyo: false,
}, "-=0.3");

rocketRobot1Tl.fromTo(yellowRocketClass, { scaleY: 0.4 }, {
    duration: 0.25,
    scaleY: 1,
    transformOrigin: "top",
    ease: "power1.inOut",
    stagger: 0.3,
    yoyo: false,
}, "beginning");

rocketRobot1Tl.fromTo(yellowRocketClass, { scaleY: 1 }, {
    duration: 0.25,
    scaleY: 0.4,
    transformOrigin: "top",
    ease: "power1.inOut",
    stagger: 0.3,
    yoyo: false,
}, "-=0.3");


// Create Flying timeline (Robot1)

flyingRobot1Tl.to(robot1Group, 5, { y: "-=10", transformOrigin: "center" }, 0)

flyingRobot1Tl.to(robot1Group, 1.9, { y: "+=10", ease: Power1.easeOut }, "+=0.2")

// Create Side to side timeline (Robot2)
movingRobot2Tl.to(robot2Group, 3.5, { x: "-=10", transformOrigin: "bottom", rotation: "-=10" }, 0)
movingRobot2Tl.to(robot2Group, 1, { x: "+=10", transformOrigin: "bottom", rotation: 0, ease: Power1.easeOut }, "+=0.2")

// Create Side to side timeline (Robot3)
// movingRobot3Tl.to(robot3Group, 2, { x: "+=2" }, 0)
// movingRobot3Tl.to(robot3Group, 1, { x: "-=2", ease: Power1.easeOut }, "+=0.2")


// Note by default all timelines are added to the main GSAP timeline at t=0

