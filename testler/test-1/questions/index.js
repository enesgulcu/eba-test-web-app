let soruSayisi = 12;

// verilen cevapların tutulacağı array
let studentAnswer = []; 

// Doğru cevaplar
let correctAnswer = [ //test 1 Cevap Anahtarı
    "A","B","C","D","A","B","C","D","A","B","C","D",
]; 

// tüm sorulara boş değer ataması
for(let i = 0; i<soruSayisi; i++){
    studentAnswer[i] = "X";
}

// DOM erişimleri
let backward_button = document.querySelector('.backward-button-container');
let forward_button = document.querySelector('.forward-button-container');
let question = document.querySelector('#question');
let showAnswerContainer = document.querySelector('.showAnswerContainer');
let showAnswerImg = document.querySelector('#showAnswerImg');
let select_answer = document.querySelector('.select-answer');
let question_container = document.querySelector('#question-container');
let checkAnswer = document.querySelector('.checkAnswer');
let answerContainer = document.querySelector('.answerContainer');
let info = document.querySelector('.info');
let info_correct = document.querySelector('.info_correct');
let info_wrong = document.querySelector('.info_wrong');
let info_blank = document.querySelector('.info_blank');



let answer_A = document.querySelector('#answer_A');
let answer_B = document.querySelector('#answer_B');
let answer_C = document.querySelector('#answer_C'); 
let answer_D = document.querySelector('#answer_D');

let question_number = 1;

// soruların cevaplanmasına göre cevap class ataması.
const myAnswer = () =>{
    let selectedOption = studentAnswer[question_number-1];
    if(selectedOption == "A"){
        answer_A.setAttribute('class','selectedOption');
        answer_B.setAttribute('class','noSelect');
        answer_C.setAttribute('class','noSelect');
        answer_D.setAttribute('class','noSelect');
    }
    else if(selectedOption == "B"){
        answer_A.setAttribute('class','noSelect');
        answer_B.setAttribute('class','selectedOption');
        answer_C.setAttribute('class','noSelect');
        answer_D.setAttribute('class','noSelect');
    }
    else if(selectedOption == "C"){
        answer_A.setAttribute('class','noSelect');
        answer_B.setAttribute('class','noSelect');
        answer_C.setAttribute('class','selectedOption');
        answer_D.setAttribute('class','noSelect');
    }
    else if(selectedOption == "D"){
        answer_A.setAttribute('class','noSelect');
        answer_B.setAttribute('class','noSelect');
        answer_C.setAttribute('class','noSelect');
        answer_D.setAttribute('class','selectedOption');
    }
    else{
        answer_A.setAttribute('class','noSelect');
        answer_B.setAttribute('class','noSelect');
        answer_C.setAttribute('class','noSelect');
        answer_D.setAttribute('class','noSelect');
    }
}

// soru sayısına göre butonların gösteriminin ayarlandığı yer
const hiddenButton = () =>{
    if(question_number > 1){
        backward_button.setAttribute('style','display:block');
        showAnswerContainer.setAttribute('style','display:block');
    }
    else if(question_number <= 1){
        backward_button.setAttribute('style','display:none');
    }
    if(question_number > soruSayisi){
        forward_button.setAttribute('style','display:none');
        showAnswerContainer.setAttribute('style','display:none');
        select_answer.setAttribute('style','display:none');
        checkAnswer.setAttribute('style','display:flex; justify-content: center;');
        question_container.setAttribute('style','display:none');
    }
    else if(question_number <= soruSayisi){
        forward_button.setAttribute('style','display:block');
        select_answer.setAttribute('style','display:flex');
        question_container.setAttribute('style','display:inline-block; position:relative;');
        checkAnswer.setAttribute('style','display:none');
        answerContainer.setAttribute('style','display:none');
        info.setAttribute('style','display:none');
    }
}

// ileri butonuna basıldığında tetiklenecek event
const forward_question = () =>{
    if(question_number <= soruSayisi){
        question_number++;
        myAnswer();
        hiddenButton();
        if(question_number <= soruSayisi){
            question.setAttribute('src',`images/${question_number}.png`);      
        }        
          
    }   
}

// geri butonuna basıldığında tetiklenecek event
const backward_question = () =>{
    if(question_number > 1){
        question_number--;
        myAnswer();
        hiddenButton();
        
        question.setAttribute('src',`images/${question_number}.png`);
    }    
}

// cevap butonlarından birisine basıldığında tetiklenecek event
const answer_Click = (e) => {
    if(question_number <= soruSayisi){
        studentAnswer[question_number-1] = e.target.value;
        myAnswer();
        hiddenButton();
        setTimeout(forward_question, 300);
         
    }    
}

// Cevap gösterme butonuna tıklandığında çalışacak fonksiyon
// Doğru Cevabı Gösterir!
const showAnswerButton = () =>{
    let correctOption = correctAnswer[question_number-1];

    if(correctOption == "A"){
        answer_A.setAttribute('class','correctOption');
        answer_B.setAttribute('class','noSelect');
        answer_C.setAttribute('class','noSelect');
        answer_D.setAttribute('class','noSelect');
    }
    else if(correctOption == "B"){
        answer_A.setAttribute('class','noSelect');
        answer_B.setAttribute('class','correctOption');
        answer_C.setAttribute('class','noSelect');
        answer_D.setAttribute('class','noSelect');
    }
    else if(correctOption == "C"){
        answer_A.setAttribute('class','noSelect');
        answer_B.setAttribute('class','noSelect');
        answer_C.setAttribute('class','correctOption');
        answer_D.setAttribute('class','noSelect');
    }
    else if(correctOption == "D"){
        answer_A.setAttribute('class','noSelect');
        answer_B.setAttribute('class','noSelect');
        answer_C.setAttribute('class','noSelect');
        answer_D.setAttribute('class','correctOption');
    }
    else{
        answer_A.setAttribute('class','noSelect');
        answer_B.setAttribute('class','noSelect');
        answer_C.setAttribute('class','noSelect');
        answer_D.setAttribute('class','noSelect');
    }
}

// Test bittiğinde butona basıldığında tetiklenecek fonksiyon
const finishTest = () =>{

    let correct = 0;
    let wrong = 0;
    let blank = 0;

    checkAnswer.setAttribute('style','display:none');
    answerContainer.setAttribute('style','display: flex;');

    for(let i = 0; i <soruSayisi; i++){

        const optionsContainer = document.createElement('div');
        optionsContainer.setAttribute('class','button_container');
        const numberContainer = document.createElement('div');
        const iconContainer = document.createElement('div');
        const icon = document.createElement('img');

        icon.setAttribute('style','width: 1.5rem; height: 1.5rem;');
        iconContainer.setAttribute('style','display: flex; align-content: center; justify-content: center; align-items: center; margin:0.2rem;');

        if(correctAnswer[i] == studentAnswer[i]){
            icon.setAttribute('src','../../../images/buttons/correct.png');
            correct++;
        }
        else if(studentAnswer[i] == "X"){
            icon.setAttribute('src','../../../images/buttons/blank.png');
            blank++;
        }
        else if(studentAnswer[i] != "X" && correctAnswer[i] != studentAnswer[i]){
            icon.setAttribute('src','../../../images/buttons/wrong.png');
            wrong++;
        }
        else{
            console.log("hata");
        }

         const option_A = document.createElement('button');
         const option_B = document.createElement('button');
         const option_C = document.createElement('button');
         const option_D = document.createElement('button');
         const showAnswer = document.createElement('span');


         const questionImage = document.createElement('img');
         showAnswer.setAttribute('class','showAnswerButtonClass');
         showAnswer.addEventListener("click", checkQuestionBtn);
        
         const number = document.createTextNode(` ${i+1}- `);
         const A = document.createTextNode("A");
         const B = document.createTextNode("B");
         const C = document.createTextNode("C");
         const D = document.createTextNode("D");

         const answerLook = document.createTextNode("Show Question");
         showAnswer.setAttribute('id',`resultBtn_${i+1}`);
         showAnswer.setAttribute('value',`${i+1}`);
         questionImage.setAttribute('id',`resultImg_${i+1}`);
         questionImage.setAttribute('value',`${i+1}`);
         questionImage.setAttribute('src',`./images/${i+1}.png`);
         questionImage.setAttribute('class',`resultAnswerImgNone`);

         iconContainer.appendChild(icon);
         numberContainer.appendChild(number);
         option_A.appendChild(A);
         option_B.appendChild(B);
         option_C.appendChild(C);
         option_D.appendChild(D);
         showAnswer.appendChild(answerLook);

        let correctOption = correctAnswer[i];
        

        if(correctOption == "A"){
            option_A.setAttribute('style','background-color:#02b400; color:white; border: 2px solid #027b00;font-weight: 500;');
        }
        else if(correctOption == "B"){
            option_B.setAttribute('style','background-color:#02b400; color:white; border: 2px solid #027b00;font-weight: 500;');
        }
        else if(correctOption == "C"){
            option_C.setAttribute('style','background-color:#02b400; color:white; border: 2px solid #027b00;font-weight: 500;');
        }
        else if(correctOption == "D"){
            option_D.setAttribute('style','background-color:#02b400; color:white; border: 2px solid #027b00;font-weight: 500;');
        }
        else{
            option_A.setAttribute('style','');
            option_B.setAttribute('style','');
            option_C.setAttribute('style','');
            option_D.setAttribute('style','');
        }

        let studentOption = studentAnswer[i];

        if(studentOption == "A"){
            option_A.setAttribute('class','selectByStudent');
        }
        else if(studentOption == "B"){
            option_B.setAttribute('class','selectByStudent');
        }
        else if(studentOption == "C"){
            option_C.setAttribute('class','selectByStudent');
        }
        else if(studentOption == "D"){
            option_D.setAttribute('class','selectByStudent');
        }
        else{
            option_A.setAttribute('class','');
            option_B.setAttribute('class','');
            option_C.setAttribute('class','');
            option_D.setAttribute('class','');
        }

        numberContainer.setAttribute('class','answer-number');
        optionsContainer.appendChild(iconContainer);
        optionsContainer.appendChild(numberContainer);
        optionsContainer.appendChild(option_A);
        optionsContainer.appendChild(option_B);
        optionsContainer.appendChild(option_C);
        optionsContainer.appendChild(option_D);
        optionsContainer.appendChild(showAnswer);

        answerContainer.appendChild(optionsContainer);
        answerContainer.appendChild(questionImage);

    }

    info.setAttribute('style','display:flex; justify-content: center; flex-direction: column; align-items: center; ');
    info_correct.innerHTML = `Corect: ${correct}`;
    info_wrong.innerHTML = `Wrong: ${wrong}`;
    info_blank.innerHTML = `Blank: ${blank}`;
}

const checkQuestionBtn = (e) =>{
    let showAnswerButtonClass = document.querySelectorAll(`.showAnswerButtonClass`);
    let btn_value = parseInt(e.target.attributes.value.value);
    let resultAnswerImg = document.querySelector(`#resultImg_${btn_value}`);
    let allAnswerImg = document.querySelectorAll(".resultAnswerImgShow");
    let selectAnswerClass = resultAnswerImg.attributes.class.nodeValue;

    for(let i = 0; i<allAnswerImg.length; i++){
        if(allAnswerImg[i]){
            allAnswerImg[i].setAttribute('class','resultAnswerImgNone');
           
        }
    }

    for(let j = 0; j<showAnswerButtonClass.length; j++){
        showAnswerButtonClass[j].style = "";
    }

    

    if(selectAnswerClass == "resultAnswerImgNone"){
        resultAnswerImg.setAttribute('class','resultAnswerImgShow');
        resultAnswerImg.setAttribute('style','border:0.1rem solid rgb(81, 81, 81); border-radius:1rem');
        e.target.style = ("background-color:rgb(81, 81, 81); color:white");
    }
    else{
        resultAnswerImg.setAttribute('class','resultAnswerImgNone'); 
    }  
}

// event listener ile click eventi gerçekleştiğinde çalışacak fonksiyonlar.
answer_A.addEventListener("click", answer_Click);
answer_B.addEventListener("click", answer_Click);
answer_C.addEventListener("click", answer_Click);
answer_D.addEventListener("click", answer_Click);

forward_button.addEventListener("click", forward_question);
backward_button.addEventListener("click", backward_question);

showAnswerImg.addEventListener("click", showAnswerButton);

checkAnswer.addEventListener("click", finishTest);

