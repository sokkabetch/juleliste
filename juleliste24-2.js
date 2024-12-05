function selectItem() {
    /*BILDE*/
    const listItem = document.getElementById("droplist").value;
    const selectImage = document.querySelector("img");

    selectImage.style.opacity = 0;

        setTimeout(() => {
    if (listItem === "option1") {
        selectImage.src = "https://shorturl.at/ai8J2";
    } else if (listItem === "option2"){
        selectImage.src = "https://shorturl.at/IAIVl";
    } else if (listItem === "option3"){
        selectImage.src = "https://shorturl.at/HM5hQ";
    } else if (listItem === "option4"){
        selectImage.src = "https://shorturl.at/OLWhu";
    } else if (listItem === "option5"){
        selectImage.src = "https://shorturl.at/VgNBT";
    } else if (listItem === "option6"){
        selectImage.src = "https://shorturl.at/GKpDI";
    } else if (listItem === "option7"){
        selectImage.src = "https://shorturl.at/Kz1Nm";
    } else if (listItem === "option8"){
        selectImage.src = "https://shorturl.at/JY8Ov";
    } else if (listItem === "option9"){
        selectImage.src = "https://shorturl.at/zGBrO";
    } else if (listItem === "option10"){
        selectImage.src = "https://shorturl.at/PnLLM";
    } else if (listItem === "option11"){
        selectImage.src = "https://tinyurl.com/4527d8t9"; 
    } else if (listItem === "option12"){
        selectImage.src = "https://tinyurl.com/2p9brk6p"; 
    }
    else {
        console.log("image not found");
    }
        selectImage.style.opacity = 1;
        }, 1000)
    /*PRIS*/
    const selectPrice = document.querySelector(".showprice");
    const selectValue = document.getElementById("droplist");
    if (selectValue.value === "option1") {
        selectPrice.innerText = " 10,000kr";
    } else if (selectValue.value === "option2"){
        selectPrice.innerText = " 1700kr";
    } else if (selectValue.value === "option3"){
        selectPrice.innerText = " 1000kr";
    } else if (selectValue.value === "option4"){
        selectPrice.innerText = " 1800kr";
    } else if (selectValue.value === "option5"){
        selectPrice.innerText = " 5500kr";
    } else if (selectValue.value === "option6"){
        selectPrice.innerText = " 1000kr";
    } else if (selectValue.value === "option7"){
        selectPrice.innerText = " 500kr";
    } else if (selectValue.value === "option8"){
        selectPrice.innerText = " 600kr";
    } else if (selectValue.value === "option9"){
        selectPrice.innerText = " 2000kr";
    } else if (selectValue.value === "option10"){
        selectPrice.innerText = " 2200kr";
    } else if (selectValue.value === "option11"){
        selectPrice.innerText = " 2400kr"
    } else if (selectValue.value === "option12"){
        selectPrice.innerText = " 1700kr"
    }
    else {
        selectPrice.innerText = "GRATIS!";
    }
    /*LINK*/
    const selectLinks = document.querySelector("showlink");
    if (selectValue.value === "option1") {
        selectLinks.href = "https://shorturl.at/CHdDO";
    } else if (selectValue.value === "option2") {
        selectLinks.href = "https://shorturl.at/DDczr";
    } else if (selectValue.value === "option3") {
        selectLinks.href = "https://shorturl.at/luwWt";
    } else if (selectValue.value === "option4") {
        selectLinks.href = "https://shorturl.at/q6wOt";
    } else if (selectValue.value === "option5") {
        selectLinks.href = "https://shorturl.at/fxzqE";
    } else if (selectValue.value === "option6") {
        selectLinks.href = "https://tinyurl.com/sossiritius";
    } else if (selectValue.value === "option7") {
        selectLinks.href = "https://shorturl.at/z89Gm";
    } else if (selectValue.value === "option8") {
        selectLinks.href = "https://tinyurl.com/2h2hfpm9";
    } else if (selectValue.value === "option9") {
        selectLinks.href = "https://tinyurl.com/35mycdvj";
    } else if (selectValue.value === "option10") {
        selectLinks.href = "https://tinyurl.com/2m36vhka";
    } else if (selectValue.value === "option11") {
        selectLinks.href = "https://tinyurl.com/y8pxz2up";
    } else if (selectValue.value === "option12") {
        selectLinks.href = "https://tinyurl.com/4k9z7mrp";
    }
}
/*opens link to item*/
function openLink() {
    const selectValue = document.getElementById("droplist").value;
    const links = {
        option1: "https://shorturl.at/CHdDO",
        option2: "https://shorturl.at/DDczr",
        option3: "https://shorturl.at/luwWt",
        option4: "https://shorturl.at/q6wOt",
        option5: "https://shorturl.at/fxzqE",
        option6: "https://tinyurl.com/sossiritius",
        option7: "https://tinyurl.com/rnep3nzd",
        option8: "https://tinyurl.com/2h2hfpm9",
        option9: "https://tinyurl.com/35mycdvj",
        option10: "https://tinyurl.com/2m36vhka",
        option11: "https://tinyurl.com/y8pxz2up",
        option12: "https://tinyurl.com/4k9z7mrp"
    }
    const link = links[selectValue];

    if (link) {
        window.open(link, "_blank");
    } else {
        console.log("sorry, no link found");
    }
}
/*christmas backgrounds*/
function christGround() {
    const selectHome = document.querySelector("body");
    const selectContainer = document.querySelector(".main-container");
    const randomChance = Math.random();
    
    if(randomChance <= 0.05 && randomChance > 0.005) {
        selectHome.classList.toggle("random_background");
        selectContainer.classList.toggle("random_background");
    } else if (randomChance > 0.05) {
        selectHome.classList.toggle("snowing_background");
        selectContainer.classList.toggle("nisse_background");
    } else {
        selectHome.classList.toggle("ultra_rare_background");
        selectContainer.classList.toggle("ultra_rare_background");
    }
}

const commonSongs = [
    "https://tinyurl.com/amazinggrace12518429",
    "https://tinyurl.com/49dkruwj",
    "https://tinyurl.com/mariahcarreeeeeyyyy",
    "https://tinyurl.com/froestysnygubb",
    "https://tinyurl.com/jinglebellerus",
    "https://tinyurl.com/holechirstler",
    "https://tinyurl.com/klanknissen",
    "https://tinyurl.com/helliggut",
    "https://tinyurl.com/tinselbyen111999",
    "https://tinyurl.com/stillenattlalala",
]
const rareSongs = [
    "https://tinyurl.com/snygubbe",
    "https://tinyurl.com/hardrockhallelujADADASDAS",
    "https://tinyurl.com/happierittejul"
]


/*function getRandomNumber() {
    return Math.floor(Math.random()*commonSongs.length);
}
let playedSongs = [];
const audioElement = document.querySelector("#audio_playback");
//const audioSource = document.querySelector("source");

function playRandomSong() {
    if (playedSongs.length === commonSongs.length) {
        playedSongs = [];
    }

    let randomIndex;
    do {
        randomIndex = getRandomNumber();
    } while (playedSongs.includes(randomIndex));

    playedSongs.push(randomIndex);
    audioElement.src = commonSongs[randomIndex];
    audioElement.play()
    console.log("playrandomsong triggered");
}
playRandomSong();
audioElement.addEventListener("ended", playRandomSong);

//turn on/off music
function turnOnAudio() {
    const selectAudio = document.querySelector("audio");
    selectAudio.volume = 0.05;
    selectAudio.play().catch(error => {
        console.log("playback failed: ", error);
    })
}
function turnOffAudio() {
    const selectAudio = document.querySelector("audio");
    selectAudio.pause();
} */

    let playedSongs = [];
    const audioElement = document.querySelector("#audio_playback");
    
    // Function to get a random number
    function getRandomNumber() {
        return Math.floor(Math.random() * commonSongs.length);
    }
    
    // Function to play a random song
    function playRandomSong() {
        if (playedSongs.length === commonSongs.length) {
            playedSongs = []; // Reset playlist when all songs have been played
        }
    
        let randomIndex;
        do {
            randomIndex = getRandomNumber();
        } while (playedSongs.includes(randomIndex)); // Ensure no repeats until all songs are played
    
        playedSongs.push(randomIndex);
        audioElement.src = commonSongs[randomIndex];
        audioElement.play().catch(err => {
            console.error("Playback failed:", err);
        });
        console.log("playRandomSong triggered");
    }
    
    // Turn audio on and start playing random songs
    function turnOnAudio() {
        const selectAudio = document.querySelector("#audio_playback");
        selectAudio.volume = 0.05; // Set volume
        playRandomSong(); // Start with a random song
        selectAudio.addEventListener("ended", playRandomSong); // Play the next song when the current one ends
    }
    
    // Turn audio off
    function turnOffAudio() {
        const selectAudio = document.querySelector("#audio_playback");
        selectAudio.pause(); // Pause audio
        selectAudio.removeEventListener("ended", playRandomSong); // Stop random song playback
    }
    
    // Optional: Add buttons for user interaction
    const startButton = document.querySelector("#playButton"); // Example button with ID `playButton`
    const stopButton = document.querySelector("#stopButton");
    
    startButton?.addEventListener("click", turnOnAudio);
    stopButton?.addEventListener("click", turnOffAudio);