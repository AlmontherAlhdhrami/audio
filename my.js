const recognition = new webkitSpeechRecognition();

// Function to handle speech input
recognition.onresult = function (event) {
  const text = event.results[0][0].transcript.toLowerCase(); // Normalize to lowercase for comparison
  console.log("You said: " + text);

  if (text.includes("what is the time")) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    speak("The time is " + time);
  } else if (text.includes("what is your name")) {
    speak("My name is Kira");
  } else if (text.includes("yes")) {
    window.open("https://orgc55dbccf.crm4.dynamics.com/main.aspx?appid=3770b05e-000f-ef11-9f89-000d3ad9ca24", "_blank");
    speak("Opening PSSR link for you.");
  } else {
    speak("Sorry, I didn't understand that. Can you please repeat?");
  }
};

// Function to speak text aloud
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}



// Start listening for voice commands when the button is clicked
document.getElementById("start-btn").addEventListener("click", function () {
  speak("Should I launch PSSR?");
  
  // Adding a slight delay before starting recognition to ensure the question is asked
  setTimeout(() => {
    recognition.start();
  }, 2000);
});
