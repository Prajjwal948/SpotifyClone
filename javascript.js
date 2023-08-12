console.log("Welcome Spotify");
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPLay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSong=document.getElementById('masterSong');
myProgressBar.value=0;
//let songItems=Array.from(document.getElementsByClassName('songItem'));
//let songListPLay=Array.from(document.getElementsByClassName('songlistplay'));

let songs=[
    {songName: "Let Me Love You", filepath:"1.mp3", coverPath: "1.jpg"},
    {songName: "I Will Love You", filepath:"2.mp3", coverPath: "2.jpg"},
    {songName: "Hum tum Kitne", filepath:"3.mp3", coverPath: "3.jpg"},
    {songName: "Suna Hai Log Use", filepath:"4.mp3", coverPath: "10.jpg"},
]
/*songItems.forEach(element=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName").innerHTML=songs[i].songName;
})*/
//songListPLay.forEach(element=>{
 //   element.getElementsByTagName("span").innerHTML=songs[i].audioElement.duration;
//})
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currrentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        document.getElementById(songIndex.toString()).classList.remove('fa-play-circle');
        document.getElementById(songIndex.toString()).classList.add('fa-pause-circle');
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeUpdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

        //element.target.classList.remove("fa-pause-circle");
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        gif.style.opacity=1;
        console.log(e.target);
        masterSong.innerText=songs[songIndex].songName;
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
       // audioElement.src='${songIndex+1}.mp3';
       switch(songIndex)
       {
        case 0: audioElement.pause();
                 audioElement=new Audio('1.mp3');
                 //audioElement.play();
                 break;
        case 1: audioElement.pause();
                 audioElement=new Audio('2.mp3');
                 //audioElement.play();
                 break;
        case 2: audioElement.pause();
                 audioElement=new Audio('3.mp3');
                 //audioElement.play();
                 break;
        case 3: audioElement.pause();
                 audioElement=new Audio('4.mp3');
                 //audioElement.play();
                 break;
        default:
       }
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioElement.addEventListener('timeupdate',()=>{
            console.log('timeUpdate');
            progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
            myProgressBar.value=progress;
        })
    })
})
document.getElementById("previous").addEventListener('click',()=>{
    gif.style.opacity=1;
    document.getElementById(songIndex.toString()).classList.remove('fa-pause-circle');
    document.getElementById(songIndex.toString()).classList.add('fa-play-circle');
    audioElement.currentTime=0;
    if(songIndex<=0)
    {
        songIndex=songs.length-1;
    }
    else
    {
        songIndex-=1;
    }
      //  audioElement.src='${songIndex}.mp3';
      switch(songIndex)
      {
       case 0: audioElement.pause();
                audioElement=new Audio('1.mp3');
                //audioElement.play();
                break;
       case 1: audioElement.pause();
                audioElement=new Audio('2.mp3');
                //audioElement.play();
                break;
       case 2: audioElement.pause();
                audioElement=new Audio('3.mp3');
                //audioElement.play();
                break;
       case 3: audioElement.pause();
                audioElement=new Audio('4.mp3');
                //audioElement.play();
                break;
       default:
      }
       
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSong.innerText=songs[songIndex].songName;
        document.getElementById(songIndex.toString()).classList.remove('fa-play-circle');
        document.getElementById(songIndex.toString()).classList.add('fa-pause-circle');
        audioElement.addEventListener('timeupdate',()=>{
            console.log('timeUpdate');
            progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
            myProgressBar.value=progress;
        })
})
document.getElementById("next").addEventListener('click',()=>{
    gif.style.opacity=1;
    document.getElementById(songIndex.toString()).classList.remove('fa-pause-circle');
    document.getElementById(songIndex.toString()).classList.add('fa-play-circle');
    audioElement.currentTime=0;
    if(songIndex>=3)
    {
        songIndex=0;
    }
    else
    {
        songIndex+=1;
    }
   // audioElement.src='${songIndex}.mp3';
   switch(songIndex)
   {
    case 1: audioElement.pause();
             audioElement=new Audio('1.mp3');
             //audioElement.play();
             break;
    case 2: audioElement.pause();
             audioElement=new Audio('2.mp3');
             //audioElement.play();
             break;
    case 3: audioElement.pause();
             audioElement=new Audio('3.mp3');
             //audioElement.play();
             break;
    case 4: audioElement.pause();
             audioElement=new Audio('4.mp3');
             //audioElement.play();
             break;
    default:
   }
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSong.innerText=songs[songIndex].songName;
    document.getElementById(songIndex.toString()).classList.remove('fa-play-circle');
    document.getElementById(songIndex.toString()).classList.add('fa-pause-circle');

    audioElement.addEventListener('timeupdate',()=>{
        console.log('timeUpdate');
        progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value=progress;
    })
})
audioElement.addEventListener('ended',function()
{
    document.getElementById(songIndex.toString()).classList.remove('fa-pause-circle');
    document.getElementById(songIndex.toString()).classList.add('fa-play-circle');
    songIndex++;
    audioElement.src=(songIndex+1)+".mp3";
    audioElement.currentTime=0;
    audioElement.play();
    document.getElementById("masterSong").innerHTML=songs[songIndex].songName;
    document.getElementById(songIndex.toString()).classList.remove('fa-play-circle');
    document.getElementById(songIndex.toString()).classList.add('fa-pause-circle');
})