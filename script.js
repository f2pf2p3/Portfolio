const gif = document.getElementById("gif");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

let currentPage = 1;
let busy = false;

function changeScreen(direction) {
    if (busy) return;

    // Do not switch if already on the requested page
    if ((direction === "left" && currentPage === 1) || (direction === "right" && currentPage === 2)) {
        return;
    }

    busy = true;

    // Reset animation classes
    gif.className = "";
    page1.className = "page";
    page2.className = "page";

    if (direction === "right") {
        page1.style.transform = "translateX(0)";
        page2.style.transform = "translateX(100%)";
    } else {
        page1.style.transform = "translateX(-100%)";
        page2.style.transform = "translateX(0)";
    }

    // Restart GIF animation
    void gif.offsetWidth;

    gif.classList.add(direction === "right" ? "move-left" : "move-right");

    // Start page animation after offset
    setTimeout(() => {
        if (direction === "right") {
            page1.classList.add("follow-left");
            page2.classList.add("show-right");
        } else {
            page2.classList.add("follow-right");
            page1.classList.add("show-left");
        }
    }, 550);

    // Cleanup after animation completes
    setTimeout(() => {
        currentPage = direction === "right" ? 2 : 1;

        page1.className = "page";
        page2.className = "page";

        if (currentPage === 2) {
            page1.style.transform = "translateX(-100%)";
            page2.style.transform = "translateX(0)";
        } else {
            page1.style.transform = "translateX(0)";
            page2.style.transform = "translateX(100%)";
        }

        gif.className = "";
        busy = false;
    }, 2500);
}