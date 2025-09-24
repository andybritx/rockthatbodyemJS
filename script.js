const lyricsElement = document.getElementById('lyrics');
const lyricsTimings = [
    { text: "I wanna da-", duration: 1500 },
    { text: "I wanna dance in the lights", duration: 2500 }, // Duração em milissegundos
    { text: "I wanna ro-", duration: 1300 }, 
    { text: "I wanna rock your body", duration: 2600 },
    { text: "I wanna go", duration: 1500 },
    { text: "I wanna go for a ride", duration: 2500 },
    { text: "Hop in the music and rock your body right", duration: 3900 },
    { text: "Rock that body", duration: 1000},
    { text: "come on, come on", duration: 1000},
    { text: "Rock that body", duration: 1000},
    { text: "(Rock that body)", duration: 1000},
    { text: "Rock that body", duration: 1200},
    { text: "come on, come on...", duration: 900},
    { text: "Rock that body", duration: 1600},
    { text: "Rock that body", duration: 1000},
    { text: "come on, come on...", duration: 1000},
    { text: "Rock that body", duration: 900},
    { text: "Rock your body", duration: 1100},
    { text: "Rock that body", duration: 950},
    { text: "come on, come on...", duration: 980},
    { text: "Rock that body", duration: 10000},

];

let lineIndex = 0;

function showNextLine() {
    if (lineIndex < lyricsTimings.length) {
        const currentLine = lyricsTimings[lineIndex];
        lyricsElement.textContent = currentLine.text;
        lyricsElement.classList.remove('visible');
        setTimeout(() => {
            lyricsElement.classList.add('visible');
        }, 50);

        setTimeout(() => {
            lyricsElement.classList.remove('visible');
            lineIndex++;
            showNextLine();
        }, currentLine.duration);
    } else {
        lineIndex = 0;
        setTimeout(showNextLine, 1000);
    }
}

document.addEventListener('DOMContentLoaded', showNextLine);