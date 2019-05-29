const correctAnswers = ['C', 'A', 'B', 'A', 'B', 'C', 'C', 'B', 'B', 'B', 'B', 'C', 'A', 'A', 'B', 'C', 'B', 'B', 'C', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value, form.q11.value, form.q12.value, form.q13.value, form.q14.value, form.q15.value, form.q16.value, form.q17.value, form.q18.value, form.q19.value, form.q20.value];

    // Calculate the score
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 5;
        }
    });

    // Display the score on page
    scrollTo(0, 0);
    result.classList.remove('display-none');  

    // Animate the score
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);

            // setTimeout(() => {
            //     retake.classList.remove('display-none');
            // }, 350);
        } else {
            output++;
        }
    }, 15);
});