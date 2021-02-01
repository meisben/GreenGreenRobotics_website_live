// Note: codepen at -> https://codepen.io/benisme/pen/oNzrKNP

//variables for animation
bottleUseGroup = $('#bottleUse');
bottleFillGroup = $('#bottleFill');
groupWheel = $('#groupWheel');
groupRobotArm = $('#groupRobotArm');
groupRobot1 = $('#groupRobot1');
spurGear = $('#spurGear');

// ----- Create animation

// Create timeline and add begining label
var wheelTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
// var flyingTl = gsap.timeline({repeat: -1, repeatDelay: 0});


// Create wheel animation and add begining label
wheelTl.addLabel('beginning')
wheelTl.fromTo(groupRobotArm, 0.4, { rotation: 30, transformOrigin: "center" }, { rotation: 10, ease: Linear.easeNone, transformOrigin: "center" }, "beginning");
wheelTl.addLabel('startRotation', "-=0.2")
wheelTl.fromTo(groupRobotArm, 0.4, { rotation: 10, transformOrigin: "center" }, { rotation: 30, ease: Linear.easeNone, transformOrigin: "center" }, "+=.2");
wheelTl.fromTo(groupWheel, 3, { rotation: 0, transformOrigin: "center" }, { rotation: -180, transformOrigin: "center", ease: Linear.easeNone }, "startRotation");
wheelTl.fromTo(bottleUseGroup, 3, { rotation: 0, transformOrigin: "center" }, { rotation: 180, transformOrigin: "center", ease: Linear.easeNone }, "startRotation");
wheelTl.fromTo(bottleFillGroup, 3, { rotation: 0, transformOrigin: "center" }, { rotation: 180, transformOrigin: "center", ease: Linear.easeNone }, "startRotation");
wheelTl.fromTo(spurGear, 3, { rotation: 0, transformOrigin: "center" }, { rotation: 360, transformOrigin: "center", ease: Linear.easeNone }, "startRotation");

wheelTl.addLabel('midPoint', "+=1")
wheelTl.fromTo(groupRobotArm, 0.4, { rotation: 30, transformOrigin: "center" }, { rotation: 10, ease: Linear.easeNone, transformOrigin: "center" }, "midPoint");
wheelTl.addLabel('startRotationRetrun', "-=0.2")
wheelTl.fromTo(groupRobotArm, 0.4, { rotation: 10, transformOrigin: "center" }, { rotation: 30, ease: Linear.easeNone, transformOrigin: "center" }, "+=.2");
wheelTl.fromTo(groupWheel, 3, { rotation: -180, transformOrigin: "center" }, { rotation: -360, transformOrigin: "center", ease: Linear.easeNone }, 'startRotationRetrun');
wheelTl.fromTo(bottleUseGroup, 3, { rotation: 180, transformOrigin: "center" }, { rotation: 360, transformOrigin: "center", ease: Linear.easeNone }, "startRotationRetrun");
wheelTl.fromTo(bottleFillGroup, 3, { rotation: 180, transformOrigin: "center" }, { rotation: 360, transformOrigin: "center", ease: Linear.easeNone }, "startRotationRetrun");
wheelTl.fromTo(spurGear, 3, { rotation: 360, transformOrigin: "center" }, { rotation: 720, transformOrigin: "center", ease: Linear.easeNone }, "startRotationRetrun");



// Note by default all timelines are added to the main GSAP timeline at t=0

