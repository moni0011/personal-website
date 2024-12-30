const windSound = document.getElementById('windSound');
const snowSound = document.getElementById('snowSound');
const snowflakesContainer = document.getElementById('snowflakes');
const soundSwitch = document.getElementById('soundSwitch');

let soundsPlaying = false;

// Snowflakes configuration
const numberOfSnowflakes = 70;
const snowflakeImages = [
    'assets/images/snowflake1.png',
    'assets/images/snowflake2.png'
];

function createSnowflake() {
    const snowflake = document.createElement('img');
    snowflake.classList.add('snowflake');
    snowflake.src = snowflakeImages[Math.floor(Math.random() * snowflakeImages.length)];
    snowflake.style.width = `${Math.random() * 25 + 10}px`;
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;

    document.body.appendChild(snowflake);

    // Remove snowflake after animation ends
    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

// Generate snowflakes periodically
setInterval(() => {
    createSnowflake();
}, 200);

// Toggle sounds
soundSwitch.addEventListener('click', () => {
    if (soundsPlaying) {
        windSound.pause();
        snowSound.pause();
        soundSwitch.textContent = '🍃';
    } else {
        windSound.play();
        snowSound.play();
        soundSwitch.textContent = '❌';
    }
    soundsPlaying = !soundsPlaying;
});
