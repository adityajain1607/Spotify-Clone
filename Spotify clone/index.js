console.log("Welcome to spotify");


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterpaly = document.getElementById('masterplay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let song = [
    {songname: "Myine" , filePath: "songs/1.mp3" , coverPath: "cover/1.jpg"},
    {songname: "Arcade" , filePath: "songs/ARCADE.mp3" , coverPath: "cover/2.jpg"},
    {songname: "Billion" , filePath: "songs/BILLON.mp3" , coverPath: "cover/3.jpg"},
    {songname: "Let me down slowly" , filePath: "songs/LMDS.mp3" , coverPath: "cover/4.jpg"},
    {songname: "Paro" , filePath: "songs/PARO.mp3" , coverPath: "cover/5.jpg"},
    {songname: "Play date" , filePath: "songs/PD.mp3" , coverPath: "cover/6.jpg"},
    {songname: "Unstoppable" , filePath: "songs/UNSTOP.mp3" , coverPath: "cover/7.jpg"},
    {songname: "One kiss" , filePath: "songs/ONE.mp3" , coverPath: "cover/8.jpg"},
]

songitems.forEach((element , i) => {
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = song[i].songname;
})

masterpaly.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterpaly.classList.remove('fa-play-circle');
        masterpaly.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterpaly.classList.remove('fa-pause-circle');
        masterpaly.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=> {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value = progress; 
})

myProgressbar.addEventListener('change' , ()=> {
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongname.innerText = song[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterpaly.classList.remove('fa-play-circle');
        masterpaly.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=7){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongname.innerText = song[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterpaly.classList.remove('fa-play-circle');
    masterpaly.classList.add('fa-pause-circle'); 
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongname.innerText = song[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterpaly.classList.remove('fa-play-circle');
    masterpaly.classList.add('fa-pause-circle'); 
})