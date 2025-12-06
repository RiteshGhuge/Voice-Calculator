let text = document.getElementById('text');
let res = document.getElementById("result");

const recognition = new SpeechRecognition(); // Or new webkitSpeechRecognition();
recognition.lang = 'en-US'; // Set language

function listen() {
    return new Promise((resolve) => {
        recognition.start();

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            audioText = transcript // Display in your HTML element
            let replacedText = audioText.toLowerCase().replaceAll(".","").replaceAll(",","").replaceAll("plus", "+").replaceAll("minus", "-").replaceAll("into", "*").replaceAll("divide", "/")
                .replaceAll("one", 1)
                .replaceAll("two", 2)
                .replaceAll("three", 3)
                .replaceAll("four", 4)
                .replaceAll("five", 5)
                .replaceAll("six", 6)
                .replaceAll("seven", 7)
                .replaceAll("eight", 8)
                .replaceAll("nine", 9)
                .replaceAll("ten", 10)

                .replaceAll("eleven", 11)
                .replaceAll("twelve", 12)
                .replaceAll("thirteen", 13)
                .replaceAll("fourteen", 14)
                .replaceAll("fifteen", 15)
                .replaceAll("sixteen", 16)
                .replaceAll("seventeen", 17)
                .replaceAll("eighteen", 18)
                .replaceAll("nineteen", 19)

                .replaceAll("twenty", 20)
                .replaceAll("thirty", 30)
                .replaceAll("forty", 40)
                .replaceAll("fifty", 50)
                .replaceAll("sixty", 60)
                .replaceAll("seventy", 70)
                .replaceAll("eighty", 80)
                .replaceAll("ninety", 90)

                .replaceAll("hundred", 100);

            text.textContent = replacedText;
            forAudio = eval(replacedText)
            res.textContent = `the result is ${forAudio}`
            let demo = 10;
            resolve(demo);
        };
    });
}
function autoSpeak(text) {
    const utter = new SpeechSynthesisUtterance(text);

    // Cancel anything currently speaking
    speechSynthesis.cancel();

    // If voices are not loaded yet
    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.onvoiceschanged = () => {
            speechSynthesis.speak(utter);
        };
    } else {
        speechSynthesis.speak(utter);
    }
}



async function calc() {
    const text = await listen();  // Wait until voice input completed
        await autoSpeak(`The result is ${forAudio}`);// Speak it after listening
}
calc();

