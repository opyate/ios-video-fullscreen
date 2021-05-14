const video1 = document.getElementById('video1');
const canvas1 = document.getElementById('canvas1');
const context1 = canvas1.getContext('2d');

const video2 = document.getElementById('video2');
const canvas2 = document.getElementById('canvas2');
const context2 = canvas2.getContext('2d');


const renderVideo = () => {
    // canvas1.width = video1.videoWidth;
    // canvas1.height = video1.videoHeight;
    context1.drawImage(video1, 0, 0, video1.videoWidth, video1.videoHeight);

    // canvas2.width = video2.videoWidth;
    // canvas2.height = video2.videoHeight;
    context2.drawImage(video2, 0, 0, video2.videoWidth, video2.videoHeight);
}

const tick = () => {
    renderVideo();
    requestAnimationFrame(tick);
}

window.requestAnimationFrame(tick)

function fullscreen(elementId) {
    let elementToFullscreen;

    switch (elementId) {
        case "video1": elementToFullscreen = video1; break;
        case "video2": elementToFullscreen = video2; break;
        case "canvas1": elementToFullscreen = canvas1; break;
        case "canvas2": elementToFullscreen = canvas2; break;
    }

    if (elementToFullscreen.requestFullscreen) {
        elementToFullscreen.requestFullscreen();
    } else if (elementToFullscreen.webkitRequestFullscreen) {
        elementToFullscreen.webkitRequestFullscreen();
    } else if (elementToFullscreen.msRequestFullScreen) {
        elementToFullscreen.msRequestFullScreen();
    }
}

document.addEventListener('click', (event) => {
    const btn = event.target;
    // only listen to buttons
    if (btn.tagName.toLowerCase() !== "button") return;
    const id = btn.dataset.elementid;
    fullscreen(id);
})
