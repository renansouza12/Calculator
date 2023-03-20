const displayCurrent = document.querySelector('.display_current');
const displayPrevious = document.querySelector('.display_previous');
const buttons =document.querySelectorAll('button');

buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       switch(btn.innerHTML){
        case 'CE':
            displayCurrent.innerHTML = '';
            displayPrevious.innerHTML = '';
            break;
        case 'DEL':
            displayCurrent.innerHTML = '';
            break;
        case 'C':
            displayCurrent.innerHTML = displayCurrent.innerHTML.slice(0, -1);
            break
        case '=':
        validNumber();
            break;
        default:    
        displayCurrent.innerHTML.length > 15 ? alert("can't enter more 15 digits")  : displayCurrent.innerHTML += btn.innerHTML;
       } 

       btn.style.borderBottom = '3px';
       btn.style.borderRight = '1px';
       btn.style.borderLeft = '1px';

       setInterval(()=>{
        btn.style.borderBottom = '';
        btn.style.borderRight = '';
        btn.style.borderLeft = '';
       },200)
    })
})

function validNumber(){
    try{
        displayPrevious.innerHTML = displayCurrent.innerHTML;
        displayCurrent.innerHTML = eval(displayCurrent.innerHTML) ?? '';
           
    }catch{
        alert('Enter a valid number');
        displayPrevious.innerHTML = '';
    } 
}
