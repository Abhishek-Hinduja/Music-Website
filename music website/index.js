var songs = [

    {   
        id:1,
        ImageSrc: "./thumbnail/1.jpg",
        audiosSrc: "./audio/1.mp3",
        title: "4 Yaar"
    },

    
    {   
        id:2,
        ImageSrc: "./thumbnail/2.jpg",
        audiosSrc: "./audio/2.mp3",
        title: "Dont Tell Me"
    },

    {   
        id:3,
        ImageSrc: "./thumbnail/3.jpg",
        audiosSrc: "./audio/3.mp3",
        title: "8 Parche"
    },

    {   
        id:4,
        ImageSrc: "./thumbnail/4.jpg",
        audiosSrc: "./audio/4.mp3",
        title: "Shikaar - Parry Sarpanch"
    },

    {   
        id:5,
        ImageSrc: "./thumbnail/5.jpg",
        audiosSrc: "./audio/5.mp3",
        title: "Meriwali sardarni"
    },

    {   
        id:6,
        ImageSrc: "./thumbnail/6.jpg",
        audiosSrc: "./audio/6.mp3",
        title: "Param Sundari"
    },

    {   
        id:7,
        ImageSrc: "./thumbnail/7.jpg",
        audiosSrc: "./audio/7.mp3",
        title: "Defaulter"
    },

    {   
        id:8,
        ImageSrc: "./thumbnail/8.jpg",
        audiosSrc: "./audio/8.mp3",
        title: "Kabhi Tumhe"
    },

    {   
        id:9,
        ImageSrc: "./thumbnail/9.jpg",
        audiosSrc: "./audio/9.mp3",
        title: "Kache Pakke Yaar"
    },

    {   
        id:10,
        ImageSrc: "./thumbnail/10.jpg",
        audiosSrc: "./audio/10.mp3",
        title: "Hostel"
    },

    {   
        id:11,
        ImageSrc: "./thumbnail/11.jpg",
        audiosSrc: "./audio/11.mp3",
        title: "Ik Tera"
    },

]

function playAudio(songid){
    
    const song = songs.find(function(son,index){
        return son.id === songid
    })

    document.getElementById("thumbnail").src = song.ImageSrc;
    document.getElementById("audiio_player").src = song.audiosSrc;
    document.getElementById("audio_player_title").innerText = song.title;
    document.getElementById("audiio_player").play();

}

