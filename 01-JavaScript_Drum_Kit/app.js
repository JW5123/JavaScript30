function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // Stop the function if no audio is found
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // Skip if not a transform event
    this.classList.remove('playing'); // Remove the 'playing' class from the key
}

window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition); // Listen for transition end events
});