const music = new Audio('/static/audio/1.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `<h5>Unholy <br>
        <div class="subtitle">Badscandal feat. Nito-Onna</div>`,
        poster:"/static/img/1-1.jpg",
    },
    {
        id: 2,
        songName: `Rockstar<br>
        <div class="subtitle">Dynoro Ilkay Sencanr</div>`,
        poster:"/static/img/2.jpg",
    },
    {
        id: 3,
        songName: `Candy Shop<br>
        <div class="subtitle">CryJaxx (feat. Junior Charles)</div>`,
        poster: "/static/img/3.jpg",
    },
    {
        id: 4,
        songName: `Bloody Mary <br>
        <div class="subtitle">Nito-Onna</div>`,
        poster: "/static/img/4.jpg",
    },
    {
        id: 5,
        songName: `Not Fair <br>
        <div class="subtitle">Niklas Dee, Old Jim feat. Enny-Mae</div>`,
        poster: "/static/img/5.jpg",
    },
    {
        id: 6,
        songName: `Numb <br>
        <div class="subtitle">Arc North</div>`,
        poster: "/static/img/6.jpg",
    },
    {
        id: 7,
        songName: `I'm Good <br>
        <div class="subtitle">Poylow, Yohan Gerberr</div>`,
        poster: "/static/img/7.jpg",
    },
    {
        id: 8,
        songName: `Ghost Town<br>
        <div class="subtitle">VIZE feat. Joris Sava & July</div>`,
        poster: "/static/img/8.jpg",
    },
    {
        id: 9,
        songName: `Faded <br>
        <div class="subtitle">Arc North and Cour</div>`,
        poster: "/static/img/9.jpg",
    },
    {
        id: 10,
        songName: `You Right <br>
        <div class="subtitle">Nedevelir, Neil Bronson, LO RA Cover) (Magic Cover Release)</div>`,
        poster: "/static/img/10.jpg",
    },
    {
        id: 11,
        songName: `In My Mind <br>
        <div class="subtitle">Dynoro</div>`,
        poster: "/static/img/11.jpg",
    },
    {
        id: 12,
        songName: `Tourner Dans Le Vide  <br>
        <div class="subtitle">(Badscandal Cover)</div>`,
        poster: "/static/img/12.jpg",
    },
    {
        id: 13,
        songName: `Stereo Hearts (Ft. Kris Norton) <br>
        <div class="subtitle">EQRIC, PHARAØH, Britt</div>`,
        poster: "/static/img/13.jpg",
    },
    {
        id: 14,
        songName: `Daddy DJ <br>
        <div class="subtitle">Nito-Onna, Harddope Cover</div>`,
        poster: "/static/img/14.jpg",
    },
    {
        id: 15,
        songName: `Push Up (Main Edit)<br>
        <div class="subtitle">Creeds</div>`,
        poster: "/static/img/15.jpg",
    },
    {
        id: 16,
        songName: `Can’t Feel My Face <br>
        <div class="subtitle">(IntoAlter, PACANI, DVO Cover) </div>`,
        poster: "/static/img/16.jpg",
    },
    {
        id: 17,
        songName: `How We Do  <br>
        <div class="subtitle">Lamedy, Mantara, Don Barleone Coverr</div>`,
        poster: "/static/img/17.jpg",
    },
    {
        id: 18,
        songName: `Belly Dancer<br>
        <div class="subtitle">Imanbek feat. BYOR</div>`,
        poster: "/static/img/18.jpg",
    },
    {
        id: 19,
        songName: `We Can't Stop <br>
        <div class="subtitle">(Poylow, Rich Fayden, Stayer Cover)</div>`,
        poster: "/static/img/19.jpg",
    },
    {
        id: 20,
        songName: `Rude <br>
        <div class="subtitle">Dream Chaos</div>`,
        poster: "/static/img/20.jpg",
    },

]

// IMAGES ADDED TO RORE

Array.from(document.getElementsByClassName('songitem')).forEach((e, i) => {
    // e.getElementsByTagName('img')[0].src = songs[i].poster;   //HERE SOMTHING WRONG IMAGES NOT VISIABLE IF COMMENT IMAGES VISIBLE
    e.getElementsByTagName('img').src = songs[i].poster;   // IF REMOVE [0] IT ALSO WORK I THINK 
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

const masterPlay = document.getElementById('masterPlay');
const wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }

});


const makeallplays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');

    });
}


const makeallbackground = () => {
    Array.from(document.getElementsByClassName('songitem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    });
}


// PLAYING CLICKED SONG  AND CHANGING IMAGES WITH PLAY PAUSE CONNECTION

let index = 0;
const poster_master_play = document.getElementById('poster_master_play');
const download_music = document.getElementById('download_music');
const title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `/static/audio/${index}.mp3`;
        poster_master_play.src = `/static/img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        // DOWNLOAD FUNCTIONS START
        download_music.href = `/static/audio/${index}.mp3`;


        
        // CHANGING TITLE
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName); /// DOWNLOADED FILE NAME CHANGER GETTING FROM TITLE
        });

        // IT WILL HIGHLIGHT THE THE SONG PLAYING

        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeallplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

    });
});

// SEEKBAR WORKING 
const currentStart = document.getElementById('currentStart');
const currentEnd = document.getElementById('currentEnd');
const seek = document.getElementById('seek');
const bar2 = document.getElementById('bar2');
const dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    // console.log(music_dur);

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;

    let progressbar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressbar;

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

});

// seek bar adjusted when mouse changes its time

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () =>{
    if(vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

//NEXT PREVOES

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if(index < 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }

    music.src = `/static/audio/${index}.mp3`;
        poster_master_play.src = `/static/img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        
        // CHANGING TITLE
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            title.innerHTML = songName;
        });

        // IT WILL HIGHLIGHT THE THE SONG PLAYING

        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeallplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});

next.addEventListener('click', () => {
    index ++;
    if(index > Array.from(document.getElementsByClassName('songitem')).length) {
        index = 1;
    }

    music.src = `/static/audio/${index}.mp3`;
        poster_master_play.src = `/static/img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        
        // CHANGING TITLE
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            title.innerHTML = songName;
        });

        // IT WILL HIGHLIGHT THE THE SONG PLAYING

        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeallplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});


//POPULAR SONGS RIGHT - LEFT SCROLL FUNCTION

const pop_song_left = document.getElementById('pop_song_left');
const pop_song_right = document.getElementById('pop_song_right');
const pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=> {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', ()=> {
    pop_song.scrollLeft -= 330;
});

//POPULAR ARTISTS RIGHT - LEFT SCROLL FUNCTION

const pop_art_left = document.getElementById('pop_art_left');
const pop_art_right = document.getElementById('pop_art_right');
const item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', ()=> {
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click', ()=> {
    item.scrollLeft -= 330;
});




//// SHUFFLE BUTTON ACTIVATION
let shuffle = document.getElementsByClassName('shuffle')[0];


/// THIS FUNCTION WILL SWITCH BETWEEN MUSIC NOTE || SHUFFLE || REPEAT {1:NEXT MUSIC, 2:RANDOM, 3:SAME SONG}\
/// THIS ONLY SHIWTCH ICONS

shuffle.addEventListener('click', () => {

        let a = shuffle.innerHTML;

        switch (a) {
            case "next":

                shuffle.classList.add('bi-arrow-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = 'repeat';
                break;

            case "repeat":

                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.add('bi-shuffle');
                shuffle.innerHTML = 'random';
                break;

            case "random":

                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = 'next';
                break;
        }
});


/// THIS FUNCTION WILL SWITCH SONG ACCORDING IT IS IN REPEAT OR SHUFFLE OR NEXT


////THIS WILL NEXT SONG //////

const next_music = () => {

    index ++;  ///ONLY CHANGED THIS ++;
    // console.log(index);
    music.src = `/static/audio/${index}.mp3`;
    poster_master_play.src = `/static/img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    // DOWNLOAD FUNCTIONS START
    download_music.href = `/static/audio/${index}.mp3`;


    
    // CHANGING TITLE
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName); /// DOWNLOADED FILE NAME CHANGER GETTING FROM TITLE
    });

    // IT WILL HIGHLIGHT THE THE SONG PLAYING

    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeallplays();
    el.target.classList.remove('bi-play-fill');
    el.target.classList.add('bi-pause-fill');
    wave.classList.add('active1');

}



////THIS WILL PLAY SAME SONG //////

const repeat_music = () => {

    index;  ///ONLY CHANGED THIS ;
    // console.log(index);
    music.src = `/static/audio/${index}.mp3`;
    poster_master_play.src = `/static/img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    // DOWNLOAD FUNCTIONS START
    download_music.href = `/static/audio/${index}.mp3`;


    
    // CHANGING TITLE
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName); /// DOWNLOADED FILE NAME CHANGER GETTING FROM TITLE
    });

    // IT WILL HIGHLIGHT THE THE SONG PLAYING

    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeallplays();
    el.target.classList.remove('bi-play-fill');
    el.target.classList.add('bi-pause-fill');
    wave.classList.add('active1');

}

const random_music = () => {

    index;  ///ONLY CHANGED THIS ;
    // console.log(index);
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }


    music.src = `/static/audio/${index}.mp3`;
    poster_master_play.src = `/static/img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    // DOWNLOAD FUNCTIONS START
    download_music.href = `/static/audio/${index}.mp3`;


    
    // CHANGING TITLE
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName); /// DOWNLOADED FILE NAME CHANGER GETTING FROM TITLE
    });

    // IT WILL HIGHLIGHT THE THE SONG PLAYING

    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeallplays();
    el.target.classList.remove('bi-play-fill');
    el.target.classList.add('bi-pause-fill');
    wave.classList.add('active1');

}


///THIS FUNCTION TRACK MUSIC WITH |ENDED| FUNCTION AND CHNAGES PATH AND GUIDE OTHER TOOO

music.addEventListener('ended', () =>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
    
        case  'next':
            next_music();
            break;
        
        case 'random':
            random_music();
            break;
    }
});

 
/// SEARXHBAR START


let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');

    card.href = "#" + id;

    card.innerHTML = ` 
    <img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>
    `;

    search_results.appendChild(card);

});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
    }
})
///SEARCHBAR  ENDS

