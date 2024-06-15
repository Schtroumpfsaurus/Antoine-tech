// Selecting the frame element
const frame = document.getElementById("frame");

// Calculate initial position to center the frame on the webpage
const initialX = (window.innerWidth - frame.offsetWidth) / 2;
const initialY = (window.innerHeight - frame.offsetHeight) / 2;

// Define initial position and direction
let x = initialX;
let y = initialY;
let dx = 3.5; // Change in x
let dy = 3.5; // Change in y

// Define custom padding
const padding = 5; // Padding around the frame

// Define custom limits with padding
const xMin = padding; // Minimum x-coordinate
const xMax = window.innerWidth  - padding; // Maximum x-coordinate
const yMin = padding; // Minimum y-coordinate
const yMax = window.innerHeight - padding; // Maximum y-coordinate

// Function to move the frame linearly with limits
function moveFrame() {
    // Update position
    x += dx;
    y += dy;

    // Check if the frame reaches the limits and reverse direction if needed
    if (x <= xMin || x >= xMax) {
        dx = -dx; // Reverse direction in x-axis
    }
    if (y <= yMin || y >= yMax) {
        dy = -dy; // Reverse direction in y-axis
    }

    // Ensure the frame stays within the custom limits
    x = Math.max(xMin, Math.min(x, xMax));
    y = Math.max(yMin, Math.min(y, yMax));

    // Apply the new position
    frame.style.left = x + "px";
    frame.style.top = y + "px";

    // Call moveFrame recursively
    requestAnimationFrame(moveFrame);
}

// Start moving the frame linearly
moveFrame();
