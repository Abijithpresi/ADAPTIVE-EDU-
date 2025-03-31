document.getElementById("submitTest").addEventListener("click", function () {
    let score = 0;

    // Get selected answers
    const answers = document.querySelectorAll("input[type=radio]:checked");
    answers.forEach((answer) => {
        score += parseInt(answer.value);
    });

    let resultText = "";
    
    if (score >= 10) {
        resultText = "You are classified as an 🟥 Expert. You will receive advanced study materials!";
    } else if (score >= 6) {
        resultText = "You are classified as a 🟡 Intermediate learner. You will get moderate-level resources.";
    } else {
        resultText = "You are classified as a 🟢 Beginner. You will receive foundational learning materials.";
    }

    // Show results
    document.getElementById("resultText").innerText = resultText;
    document.getElementById("resultSection").classList.remove("hidden");

    // Scroll to result
    document.getElementById("resultSection").scrollIntoView({ behavior: "smooth" });
let score = Object.values(responses).filter(ans => ans !== "").length;
    let student_id = "S001"; // This should be dynamic, based on logged-in user
});
