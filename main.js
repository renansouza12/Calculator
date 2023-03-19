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
            break;
        case '=':
            displayPrevious.innerHTML = displayCurrent.innerHTML;
            displayCurrent.innerHTML = eval(displayCurrent.innerHTML) ?? '';
            break;
        default:
            displayCurrent.innerHTML += btn.innerHTML;;
       }
       console.log(displayCurrent.innerHTML);
    })
})