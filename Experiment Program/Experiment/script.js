// const text = "Die With a Smile";
let index = 0;
const text = `
You're the light, you're the night
You're the colour of my blood
You're the cure, you're the pain
You're the only thing I wanna touch
Never knew that it could mean so much, so much
You're the fear, I don't care
'Cause I've never been so high
Follow me through the dark
Let me take you past our satellites
You can see the world you brought to life, to life
`
const music = "Music Music Music 🎵🎶🎶🎶🎶🎵🎵🎵🎵🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶"

const lyrics = [
    "Your morning eyes, I could stare like watching stars",
    "I could walk you by, and I'll tell without a thought",
    "You'd be mine, would you mind if I took your hand tonight?",
    "Know you're all that I want this life",
    "I'll imagine we fell in love",
    "I'll nap under moonlight skies with you",
    "I think I'll picture us, you with the waves",
    "The ocean's colors on your face",
    "I'll leave my heart with your air",
    "So let me fly with you",
    "Will you be forever with me?"
];

for(let i = 0; i<lyrics.length; i++){
    console.log(`${i} : ${lyrics[i].length}`);
}

// let delay = 0;

// lyrics.forEach(line => {
//     let time = line.length > 40 ? 7000 : 5000; // Longer lines get 4 sec, shorter get 3 sec
//     setTimeout(() => console.log(line), delay);
//     delay += time;
// });