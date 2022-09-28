//CVC Information
let cvc = document.querySelector('.cvc');
let cvcValue = document.querySelector('#cvc');
let cvcError = document.querySelector('.errorCVC');

cvcValue.addEventListener('input', ()=>{
    if (cvcValue.value == '') {
        cvc.textContent = '000';
    }

    if (isNaN(cvcValue.value)) {
        cvcValue.style.outlineColor = 'hsl(0, 100%, 66%)';
        showError(cvcError, 'Numbers Only', true)
        cvcError.style.display =  'inline';
    } else {
        showError(cvcError, '', false)
        cvcValue.style.outlineColor = 'hsl(278, 68%, 11%)';
    }

    cvc.textContent = cvcValue.value;
})

//Card Number Information
let cardNumber = document.querySelector('.card-number');
let cardNumberValue = document.querySelector('#number');
let cnError = document.querySelector('.errorCN');

cardNumberValue.addEventListener('input', ()=>{
    let char = /[A-z]/g;
    if(char.test(cardNumberValue.value)){
        cardNumberValue.style.outlineColor = 'hsl(0, 100%, 66%)';
        showError(cnError, 'Numbers Only');

    } else {
        cardNumberValue.value = cardNumberValue.value.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        cardNumber.textContent = cardNumberValue.value;
        cardNumberValue.style.outlineColor = 'hsl(278, 68%, 11%)';
        showError(cnError, '', false);
    }


    if (cardNumberValue.value == '') {
        cardNumber.textContent = '0000 0000 0000 0000';
    }
})

//Card Holder Information
let cardHolder = document.querySelector('.card-holder');
let cardHolderValue = document.querySelector('#cardholder');

cardHolderValue.addEventListener('input', ()=>{
    cardHolder.textContent = cardHolderValue.value;
})

//MM and YY Information
let mm = document.querySelector('.mm');
let mmValue = document.querySelector('#mm');
let yy = document.querySelector('.yy');
let yyValue = document.querySelector('#yy');
let mmyyError = document.querySelector('.errorMMYY');

mmValue.addEventListener('input', ()=>{
    let char = /[A-z]/g;
    if(char.test(mmValue.value)){
        mmValue.style.outlineColor = 'hsl(0, 100%, 66%)';
        showError(mmyyError, 'Numbers Only');
    } else {
        mm.textContent = mmValue.value;
        mmValue.style.outlineColor = 'hsl(278, 68%, 11%)';
        showError(mmyyError, '', false);
    }

    if (mmValue.value == '') {
        mm.textContent = '00';
    }
})

yyValue.addEventListener('input', ()=>{
    let char = /[A-z]/g;
    if(char.test(yyValue.value)){
        yyValue.style.outlineColor = 'hsl(0, 100%, 66%)';
        showError(document.querySelector('.errorYY'), 'Numbers Only', true);
    } else {
        yy.textContent = yyValue.value;
        yyValue.style.outlineColor = 'hsl(278, 68%, 11%)';
        showError(document.querySelector('.errorYY'), '', false);
    }

    if (yyValue.value == '') {
        yy.textContent = '00';
    }
})

const btnConfirm = document.querySelector('.submit');
const confirmed = document.querySelector('.confirmed');

btnConfirm.addEventListener('click', (e)=>{
    e.preventDefault();

    if (cardHolderValue.value == '' || cardNumberValue.value == '' || cardNumberValue.value.length < 19 || mmValue.value == '' || yyValue.value == '' || cvcValue.value == '') {return}
    if (document.body.innerText.includes('Numbers Only')) {return}   
    
    document.querySelector('.form').style.display = 'none';
    confirmed.style.display = 'flex';
    
})

function showError(div, message, appearance = true) {
    div.textContent = message;
}