const fieldknopka = document.querySelector('.fieldknopka');
const textinfield = document.querySelector('.textinfield');

    textinfield.addEventListener('mouseenter', () => {
        fieldknopka.style.backgroundColor = '#07B934';
    });


    fieldknopka.addEventListener('mouseenter', () => {
        fieldknopka.style.backgroundColor = '#07B934';
    });

    
    fieldknopka.addEventListener('mouseleave', () => {
        fieldknopka.style.backgroundColor = '#80b918';
    });


    textinfield.addEventListener('mouseleave', () => {
        fieldknopka.style.backgroundColor = '#80b918'; 
    });
 


   












    document.getElementById('usersurname').addEventListener('input', function() {
        this.value = this.value.replace(/[^а-яА-ЯёЁ\s]/g, ''); 
    });
    document.getElementById('usersurname').addEventListener('change', function() {
        console.log('Фамилия пользователя: ' + this.value);
    });

    document.getElementById('username').addEventListener('input', function() {
        this.value = this.value.replace(/[^а-яА-ЯёЁ\s]/g, ''); 
    });
    document.getElementById('username').addEventListener('change', function() {
        console.log('Имя пользователя: ' + this.value);
    });

    document.getElementById('patronymic').addEventListener('input', function() {
        this.value = this.value.replace(/[^а-яА-ЯёЁ\s]/g, ''); 
    });
    document.getElementById('patronymic').addEventListener('change', function() {
        console.log('Отчество пользователя: ' + this.value);
    });

    document.getElementById('citizenship').addEventListener('input', function() {
        this.value = this.value.replace(/[^а-яА-ЯёЁ\s]/g, ''); 
    });
    document.getElementById('citizenship').addEventListener('change', function() {
        console.log('Гражданство пользователя: ' + this.value);
    });

    document.getElementById('usertelephonenumber').addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9\+\(\)\-\s]/g, '');
    });
    document.getElementById('usertelephonenumber').addEventListener('change', function() {
        console.log('Номер телефона пользователя: ' + this.value);
    });

    document.getElementById('Useremail').addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Z0-9@._-]/g, '');
    });
    document.getElementById('Useremail').addEventListener('change', function() {
        console.log('Почта пользователя: ' + this.value);
    });

    document.getElementById('userpassportseries').addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    document.getElementById('userpassportseries').addEventListener('change', function() {
        console.log('Серия паспорта пользователя ' + this.value);
    });

    document.getElementById('userpassportnumber').addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    })
    document.getElementById('userpassportnumber').addEventListener('change', function() {
        console.log('Номер паспорта пользователя: ' + this.value);
    });





























    let isRegistered = false; 
    let individualCode;
    
    document.getElementById('registrationButton').addEventListener('click', function() {
        
        const fields = [
            document.getElementById('usersurname'),
            document.getElementById('username'),
            document.getElementById('patronymic'),
            document.getElementById('citizenship'),
            document.getElementById('usertelephonenumber'),
            document.getElementById('Useremail'),
            document.getElementById('userpassportseries'),
            document.getElementById('userpassportnumber')
        ];
    
        const allFieldsFilled = fields.every(field => field.value.trim() !== '');
    
        if (isRegistered) {
            alert('Ошибка! Вы уже зарегистрированы. Ваш индивидуальный код для посещения выставки: ' + individualCode);
        } else if (allFieldsFilled) {
            individualCode = generateRandomCode(12); 
            alert('Поздравляю! Вы зарегистрированы. Ваш индивидуальный код для посещения выставки: ' + individualCode);
            isRegistered = true; 
        } else {
            alert('Ошибка! Не все поля заполнены.');
        }
    });
    
    function generateRandomCode(length) {
        let code = '';
        for (let i = 0; i < length; i++) {
            code += Math.floor(Math.random() * 10); 
        }
        return code;
    }
    