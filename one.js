const video1 = document.getElementById('video1');
const canvas1 = document.getElementById('canvas1');
const context1 = canvas1.getContext('2d');

const renderVideo = () => {
    // canvas1.width = video1.videoWidth;
    // canvas1.height = video1.videoHeight;
    context1.drawImage(video1, 0, 0, video1.videoWidth, video1.videoHeight);
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
        case "canvas1": elementToFullscreen = canvas1; break;
    }

    if (elementToFullscreen.requestFullscreen) {
        elementToFullscreen.requestFullscreen();
    } else if (elementToFullscreen.mozRequestFullScreen) {
        elementToFullscreen.mozRequestFullScreen();
    } else if (elementToFullscreen.webkitRequestFullscreen) {
        elementToFullscreen.webkitRequestFullscreen();
    } else if (elementToFullscreen.webkitEnterFullscreen) {
        // webkitRequestFullscreen was deprecated:
        // https://developer.apple.com/documentation/webkit/domelement/1476160-webkitrequestfullscreen
        elementToFullscreen.webkitEnterFullscreen();
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
