document.addEventListener("DOMContentLoaded", () => {
    // Basic tooltips for debugging or info
    const nodes = document.querySelectorAll(".shape");
    nodes.forEach(node => {
        node.addEventListener("mouseover", () => {
            console.log(`You are at: ${node.id}`);
        });
    });
});
