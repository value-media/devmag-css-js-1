window.onload = () => {
    const wahadlo = document.querySelector('.wahadlo');
    //console.log('load', wahadlo)
    wahadlo.addEventListener('transitionend', (e) => {
        //console.log('start', wahadlo)
        if (e.propertyName == 'transform') {
            //console.log({cl: wahadlo.classList.value})
            if (wahadlo.classList.contains('left'))
                wahadlo.classList.replace('left', 'top');
            else if (wahadlo.classList.contains('top')) 
                wahadlo.classList.replace('top', 'right')
            else if (wahadlo.classList.contains('right')) 
                wahadlo.classList.replace('right', 'bottom')
            else wahadlo.classList.replace('bottom', 'left')
        }
    });

    wahadlo.classList.add('top');
}