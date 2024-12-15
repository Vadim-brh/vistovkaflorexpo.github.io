if (!localStorage.getItem('firstVisit')) {
    alert("Нажимая на кнопку <ок>, вы подтверждаете, что ознакомились с тем, что сайт является курсовой работой студента и на самом деле никакой выставки нет.");
    localStorage.setItem('firstVisit', 'true');
}














const jsknopka = document.querySelector('.jsknopka');
const textknopka = document.querySelector('.textknopka');

    textknopka.addEventListener('mouseenter', () => {
        jsknopka.style.backgroundColor = '#07B934';
    });


    jsknopka.addEventListener('mouseenter', () => {
        jsknopka.style.backgroundColor = '#07B934';
    });

    
    jsknopka.addEventListener('mouseleave', () => {
        jsknopka.style.backgroundColor = '#80b918';
    });


    textknopka.addEventListener('mouseleave', () => {
        jsknopka.style.backgroundColor = '#80b918'; 
    });