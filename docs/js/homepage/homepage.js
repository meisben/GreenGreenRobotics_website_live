
(function (window, document, undefined) {

    // code that should be taken care of right away

    window.onload = init;

    function init() {
        // the code to be called when the dom has loaded
        // #document has its nodes


        // jQuery
        $.getScript('/js/homepage/svg_bottles_animation.js', function () {
            console.log("Load was performed for js svg_bottles_animation.");
        });

        $.getScript('/js/homepage/svg_refill_setup.js', function () {
            console.log("Load was performed for js svg_refill_setup.");
        });

        $.getScript('/js/homepage/svg_circular_robotics.js', function () {
            console.log("Load was performed for js svg_circular_robotics.");
        });

        $.getScript('/js/homepage/svg_team_robot.js', function () {
            console.log("Load was performed for js svg_team_robot.");
        });

    }

})(window, document, undefined);