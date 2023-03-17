const buttons = document.querySelectorAll('button');
const display_current = document.querySelector('.display_current');

buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        display_current.innerHTML += btn.innerHTML;

        btn.style.borderBottom =  '2px';
        btn.style.borderRight =  '1px';
        btn.style.borderLeft =  '1px';
        setInterval(()=>{
            btn.style.borderBottom =  '';
            btn.style.borderRight =  '';
            btn.style.borderLeft =  '';
        },200)

    })
    
})
