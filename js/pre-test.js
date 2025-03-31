// Function to start the Pre-Test
function startTest() {
    let startButton = document.querySelector(".start-test-btn");
    
    // Disable button after first click to prevent multiple redirects
    startButton.disabled = true;
    startButton.innerText = "Preparing Test...";
    startButton.style.opacity = "0.6";

    // Play a small "beep" sound (optional)
    let beepSound = new Audio("assets/beep.mp3");
    beepSound.play();

    // Show a motivational message before test starts
    let messages = [
        "🚀 Get ready to boost your skills!",
        "🎯 Let's see where you stand!",
        "📚 Knowledge is power! Let's begin!",
        "💡 Adapt. Learn. Succeed!"
    ];
    
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    let messageDiv = document.createElement("div");
    messageDiv.className = "motivation-message";
    messageDiv.innerHTML = `<p>${randomMessage}</p>`;
    document.querySelector(".test-section").appendChild(messageDiv);

    // Create a progress bar for a smooth transition effect
    let progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    document.querySelector(".test-section").appendChild(progressBar);

    let progress = 0;
    let interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            // Redirect to the actual pre-test page
            window.location.href = "test.html";
        }
    }, 300);  // Simulate loading every 300ms (adjustable)
}
