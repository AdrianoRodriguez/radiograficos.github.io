(function(){

    const sliders = [...document.querySelectorAll('.steps__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });
    
    const changePosition = (add)=>{
        const currentSteps = document.querySelector('.steps__body--show').dataset.id;
        value = Number(currentSteps);
        value += add;

        sliders[Number(currentSteps)-1].classList.remove('steps__body--show')
        if (value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('steps__body--show');

    };

})();