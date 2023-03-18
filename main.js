const displayCurrent = document.querySelector('.display_current');
const buttons =document.querySelectorAll('button');

buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       switch(btn.innerHTML){
        case 'CE':
            displayCurrent.innerHTML = '';
            break;
        default:
            displayCurrent.innerHTML += btn.innerHTML;
       }
    })
})