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
    }
    else if(question_number <= soruSayisi){
        forward_button.setAttribute('style','display:block');
        select_answer.setAttribute('style','display:flex');
    }
}

// ileri butonuna basıldığında tetiklenecek event
const forward_question = () =>{
    if(question_number <= soruSayisi){
        question_number++;
        myAnswer();
        hiddenButton();
        question.setAttribute('src',`images/${question_number}.png`);
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

// event listener ile click eventi gerçekleştiğinde çalışacak fonksiyonlar.
answer_A.addEventListener("click", answer_Click);
answer_B.addEventListener("click", answer_Click);
answer_C.addEventListener("click", answer_Click);
answer_D.addEventListener("click", answer_Click);

forward_button.addEventListener("click", forward_question);
backward_button.addEventListener("click", backward_question);

showAnswerImg.addEventListener("click", showAnswerButton);