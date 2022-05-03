(function(){
    const advantagesTitle =  [...document.querySelectorAll('.advantages__title')];

    advantagesTitle.forEach(advantages =>{
        advantages.addEventListener('click', ()=>{
            let height = 0;
            let answer = advantages.nextElementSibling;
            let addPadding = advantages.parentElement.parentElement;


            addPadding.classList.toggle('advantages__padding--add')
            advantages.children[0].classList.toggle('advantages__arrow--rotate')


            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }
            
            answer.style.height = `${height}px`;
        });
    });
})();