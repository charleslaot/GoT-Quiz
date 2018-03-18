'use strict'
    
function renderQuestions(index) {    
    cleanScreen(); 
    renderStats();    

    $(".js-row").prepend( 
        `               
        <div class="question">
            <h3>${DATA[index].question}</h3>                
        </div>            
        `
    );

    $(".js-form").prepend(
        `   
        <ul class="answersList">
            <li><input type="radio" name="choices" id="choiceOptionA" value="${DATA[index].optionA}" required>
                <label for="choiceOptionA">${DATA[index].optionA}</label>
            </li>
            <li><input type="radio" name="choices" id="choiceOptionB" value="${DATA[index].optionB}">
                <label for="choiceOptionB">${DATA[index].optionB}</label>
            </li>
            <li><input type="radio" name="choices" id="choiceOptionC" value="${DATA[index].optionC}">
                <label for="choiceOptionC">${DATA[index].optionC}</label>
            </li>
            <li><input type="radio" name="choices" id="choiceOptionD" value="${DATA[index].optionD}">
                <label for="choiceOptionD">${DATA[index].optionD}</label>
            </li>
            <li><input type="radio" name="choices" id="choiceOptionE" value="${DATA[index].optionE}">
                <label for="choiceOptionE">${DATA[index].optionE}</label>
            </li>
        </ul>                
        <button type="submit" class="submit-btn">
            Submit
        </button>                                 
        `           
    ); 
}

function renderCorrectAnswer() {
    cleanScreen();
    renderStats();

    $(".js-row").prepend(
        `
        <h2>Correct !</h2>
        `
    );  

    $(".js-form").append(
        `           
        <img class="answerImg" src="https://image.ibb.co/mpoEyH/00_Tyrion_OK.jpg" alt="Tyrion Lannister on Correct Answer">        
        <button type="submit" class="submit-btn js-next-btn">
           Next >>
        </button>
        `
    );

    
}

function renderWrongAnswer() {
    let answer = DATA[STATS.questionIndex].correctAnswer;
    cleanScreen();
    renderStats();

    $(".js-row").prepend(
        `
        <h2>Sorry. The correct answer is: ${answer}</h2>
        `    
    );    

    $(".js-form").append(
        `
        <img class="answerImg" src="https://image.ibb.co/g2XJQx/00_Tyrion_No_OK.jpg" alt="Tyrion Lannister on Wrong Answer">        
        <button type="submit" class="submit-btn js-next-btn">
          Next >>
        </button>
        `
    );        
}

function renderFeedback() {
    cleanScreen();   
    renderStats();

    if (STATS.correct >= 7){
        $(".js-row").prepend(
            `
            <h2>YOU ARE A HUGE FAN !</h2>
            <img class="answerImg" src="https://image.ibb.co/ftwysc/00_STARKSok_1_1.jpg" alt="Stark kids smiling">        
            `    
        );
    }   else {
            $(".js-row").prepend(
                `
                <h2>YOU ARE NOT A FAN YET !</h2>
                <img class="answerImg" src="https://image.ibb.co/nLgWCc/00_NEDok_1.jpg" alt="Ned with not a good face">   
                
                `    
            );
        }    

    $(".js-form").append(
        `        
        <button type="submit" class="submit-btn js-again-btn">
          Again ?
        </button>
        `
    );

}

function renderStats(){
    $(".js-header").prepend(
        `
        <div class="row">
            <div class="col-3 swordLeft">
                <img class="swords" src="https://image.ibb.co/c4dpyH/1sword_NEW.png" alt="Left Sword">
            </div>
            <div class="col-6 stats" style='text-align:center'>                        
                <p class="js-questionNum">Questions: ${STATS.questionIndex + 1} out of 10</p>
                <p class="js-scoreCorrect">Correct: ${STATS.correct}</p>
                <p class="js-scoreIncorrect">Incorrect: ${STATS.incorrect}</p>
            </div>       
            <div class="col-3 swordRight">
                <img class="swords" src="https://image.ibb.co/cBXUFx/swordNEW.png" alt="Right Sword">
            </div>
        </div>
        `
    );
}

function cleanScreen(){
    $(".js-header").empty();   
    $(".js-row").empty();   
    $(".js-form").empty();  
}