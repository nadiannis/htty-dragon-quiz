const correctAnswers = ['C', 'A', 'B', 'A', 'B', 'C', 'C', 'B', 'B', 'B', 'B', 'C', 'A', 'A', 'B', 'C', 'B', 'B', 'C', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const retake = document.querySelector('.retake');

form.addEventListener('submit', e => {
    e.preventDefault();

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value, form.q11.value, form.q12.value, form.q13.value, form.q14.value, form.q15.value, form.q16.value, form.q17.value, form.q18.value, form.q19.value, form.q20.value];

    let empty = 0;
    userAnswers.forEach(answer => {
        if (answer === '') {
            empty += 1;
        }
    });

    if (empty === 20) {
        form.nextElementSibling.classList.remove('display-none');
    } else {
        // Hide the empty message 
        if (!form.nextElementSibling.classList.contains('display-none')) {
            form.nextElementSibling.classList.add('display-none');
        }

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

                setTimeout(() => {
                    retake.classList.remove('display-none');
                }, 320);
            } else {
                output++;
            }
        }, 15);

        // Disable all radio buttons
        const radioButtons = form.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(btn => {
            btn.disabled = true;
        });

        document.querySelector('.quiz').style.color = '#FFA59A';

        // Disable the submit button
        const submitButton = form.querySelector('input[type="submit"]');
        submitButton.style.background = '#FFA59A';
        submitButton.disabled = true;

        // Mark the correct answer
        const questionsOpt = [form.q1, form.q2, form.q3, form.q4, form.q5, form.q6, form.q7, form.q8, form.q9, form.q10, form.q11, form.q12, form.q13, form.q14, form.q15, form.q16, form.q17, form.q18, form.q19, form.q20];
        questionsOpt.forEach((options, index) => {
            if (options.value !== correctAnswers[index]) {
                options.forEach(option => {
                    if (option.value === correctAnswers[index]) {
                        option.nextElementSibling.style.color = '#BADEFC';
                    }
                });
            }
        });
    }   
});

retake.querySelector('button').addEventListener('click', () => {
    location.reload();
});