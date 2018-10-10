'use strict'

function handleStartQuiz() {
    $(".submit-btn").click(function (event) {
        event.preventDefault();
        renderQuestions(STATS.questionIndex);
    });
}

function handleSubmitAnswer() {
    $("form").on('submit', function (event) {
        event.preventDefault()
        const input = $("input:checked").val();
        const correctAnswer = DATA[STATS.questionIndex].correctAnswer;

        if (input === correctAnswer) {
            STATS.correct++;
            renderCorrectAnswer();
        } else {
            STATS.incorrect++;
            renderWrongAnswer();
        }
    });
}

function handleNextQuestion() {
    $("form").on('click', '.js-next-btn', function (event) {
        event.preventDefault();
        
        if (STATS.questionIndex + 1 === DATA.length) {
            renderFeedback();
        } else {
            STATS.questionIndex++;
            renderQuestions(STATS.questionIndex);
        }
    });
}

function handleRestartQuiz() {
    $(".js-form").on('click', '.js-again-btn', function (event) {
        event.preventDefault();
        location.reload();
    });
}

function handleListItemClick() {
    $('.js-form').on('click', 'li', function (event) {
        $(this).find('input').prop('checked', 'true');
    });
}

function handleQuizApp() {
    handleStartQuiz();
    handleListItemClick();
    handleSubmitAnswer();
    handleNextQuestion();
    handleRestartQuiz();
}

$(handleQuizApp);