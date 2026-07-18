// ==========================
// Select Elements
// ==========================

const card = document.querySelector(".card");
const io = document.querySelector(".io");
const button = document.querySelector(".card button");
const video = document.querySelector(".background-video");

const playBtn = document.querySelector(".player-controls .fa-play");
const pauseBtn = document.querySelector(".player-controls .fa-pause");
const volumeBtn = document.querySelector(".player-controls .fa-volume-high");
const muteBtn = document.querySelector(".player-controls .fa-volume-xmark");

const surahName = document.querySelector(".surah-name");

// ==========================
// Dynamic Elements
// ==========================

const audio = document.createElement("audio");
audio.className = "audio";
audio.controls = true;
audio.style.display = "none";

const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.accept = "audio/*";
fileInput.style.display = "none";

const videoInput = document.createElement("input");
videoInput.type = "file";
videoInput.accept = "video/*";
videoInput.style.display = "none";

const backgroundButton = document.createElement("button");
backgroundButton.className = "butVid";
backgroundButton.textContent = "تغيير الخلفية";

document.body.append(fileInput, videoInput, backgroundButton);

// ==========================
// Card Animation
// ==========================

function cardAnimation() {

    card.style.transform = "translateY(-5px) scale(1.02)";
    card.style.opacity = ".95";
    card.style.boxShadow = "0 0 45px rgba(255,255,255,.18)";

    setTimeout(() => {

        card.style.transform = "";
        card.style.opacity = "";
        card.style.boxShadow = "";

    }, 250);

}

// ==========================
// Format File Name
// ==========================

function formatFileName(file) {

    let name = file.name;

    if (name.length > 40) {

        name = name.slice(0, 40) + "...";

    }

    if (name.length <= 5) {

        name = "اسم الملف غير مناسب";

    }

    return name;

}

// ==========================
// Play Audio
// ==========================

function playAudio(file) {

    if (!io.contains(audio)) {

        io.appendChild(audio);

    }

    audio.src = URL.createObjectURL(file);

    audio.play();

}

// ==========================
// Change Background
// ==========================

function changeBackground(file) {

    video.classList.add("fade-out");

    setTimeout(() => {

        video.src = URL.createObjectURL(file);

        video.load();

        video.play().catch(() => {});

    }, 300);

}

video.addEventListener("loadeddata", () => {

    video.classList.remove("fade-out");

});

// ==========================
// Events
// ==========================

// Choose Audio

button.addEventListener("click", () => {

    fileInput.click();

});

fileInput.addEventListener("change", () => {

    const selectedFile = fileInput.files[0];

    if (!selectedFile) return;

    if (!selectedFile.type.startsWith("audio/")) {

        alert("من فضلك اختر ملف صوت.");

        return;

    }

    cardAnimation();

    surahName.textContent = formatFileName(selectedFile);

    button.textContent = "اختار سورة ثانية";

    playAudio(selectedFile);

});

// Change Background

backgroundButton.addEventListener("click", () => {

    videoInput.click();

});

videoInput.addEventListener("change", () => {

    const selectedVideo = videoInput.files[0];

    if (!selectedVideo) return;

    if (!selectedVideo.type.startsWith("video/")) {

        alert("من فضلك اختر ملف فيديو.");

        return;

    }

    changeBackground(selectedVideo);

});

// ==========================
// Audio Controls
// ==========================

playBtn.addEventListener("click", () => {

    audio.play();

});

pauseBtn.addEventListener("click", () => {

    audio.pause();

});

muteBtn.addEventListener("click", () => {

    audio.muted = true;

});

volumeBtn.addEventListener("click", () => {

    audio.muted = false;

});

