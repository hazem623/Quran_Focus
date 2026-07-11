let io = document.querySelector('.io');
let but = document.querySelector('.card button');
let file = document.createElement('input');

but.addEventListener('click', () => {
    but.style.display = 'none';
    file.type = 'file';
    file.style.display = 'none';
    document.body.appendChild(file);
    file.click();
})

file.addEventListener('change', () => {
    let audio = document.createElement('audio');
    audio.className = 'audio';
    audio.src = URL.createObjectURL(file.files[0]); // دي حاجه جديده اتعلمتها 
    audio.controls = true; // دي حاجه جديده اتعلمتها
    io.appendChild(audio); 
    audio.style.display = 'block';
    audio.style.width = '100%';
    audio.play();       
})
