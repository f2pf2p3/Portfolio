/* =========================================================
   GET ELEMENTS
   ========================================================= */

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const gif = document.getElementById("gif");


/* =========================================================
   CHANGE SCREEN
   ========================================================= */

function changeScreen(direction) {

    /*
     * Prevent the same GIF animation from being
     * affected by a previous transition.
     */
    gif.classList.remove("move-left", "move-right");

    page1.classList.remove("follow-left", "follow-right");
    page2.classList.remove("show-left", "show-right");

    /*
     * Force the browser to restart the animation.
     */
    void gif.offsetWidth;


    /* =====================================================
       MOVE LEFT
       ===================================================== */

    if (direction === "left") {

        // GIF starts on the right and moves left.
        gif.classList.add("move-left");

        /*
         * Wait 600ms before moving the page.
         *
         * This makes the GIF appear and move first,
         * then the page follows it.
         */
        setTimeout(() => {

            page1.classList.add("follow-left");
            page2.classList.add("show-left");

        }, 600);
    }


    /* =====================================================
       MOVE RIGHT
       ===================================================== */

    if (direction === "right") {

        // GIF starts on the left and moves right.
        gif.classList.add("move-right");

        /*
         * Wait 600ms before moving the page.
         */
        setTimeout(() => {

            page1.classList.add("follow-right");
            page2.classList.add("show-right");

        }, 600);
    }
}