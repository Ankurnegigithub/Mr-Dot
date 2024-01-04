document.addEventListener('DOMContentLoaded', function () {
    const dotContainer = document.getElementById('dot-container');
    let previousDot;

    dotContainer.addEventListener('click', function (event) {
        // Remove the previous dot
        if (previousDot) {
            previousDot.remove();
        }

        // Create a new dot element
        const dot = document.createElement('div');
        dot.className = 'dot';

        // Calculate the position of the dot based on the click event
        const dotX = event.clientX - dotContainer.getBoundingClientRect().left;
        const dotY = event.clientY - dotContainer.getBoundingClientRect().top;

        // Set the position of the dot
        dot.style.left = `${dotX}px`;
        dot.style.top = `${dotY}px`;

        // Append the dot to the container
        dotContainer.appendChild(dot);

        // Save the reference to the current dot
        previousDot = dot;

        // Trigger the transition by changing opacity
        setTimeout(() => {
            dot.style.opacity = '1';
        }, 10);
    });
});
