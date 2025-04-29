let submit = document.getElementById("submit");
let result = document.getElementById("result");

submit.addEventListener("click", function (event) {
    event.preventDefault();

    const q1 = document.querySelector('input[name="q1"]:checked')?.value.trim().toLowerCase();
    const q2 = document.querySelector('input[name="q2"]:checked')?.value.trim().toLowerCase();
    const q3 = document.querySelector('input[name="q3"]:checked')?.value.trim().toLowerCase();
    const q4 = document.querySelector('input[name="q4"]:checked')?.value.trim().toLowerCase();
    const q5 = document.querySelector('input[name="q5"]:checked')?.value.trim().toLowerCase();

    if (!q1 || !q2 || !q3 || !q4 || !q5) {
        result.textContent = "Attend all the Quiz";
        result.style.color = "red";
        return;
    }

    const correctAnswers = {
        q1: 'var',
        q2: 'string',
        q3: 'netscape',
        q4: 'both',
        q5: 'console.log("hello world")'
    };

    let score = 0;
    if (q1 === correctAnswers.q1) score++;
    if (q2 === correctAnswers.q2) score++;
    if (q3 === correctAnswers.q3) score++;
    if (q4 === correctAnswers.q4) score++;
    if (q5 === correctAnswers.q5) score++;

    result.textContent = "Score is: " + score;
    result.style.color = "green";
});
