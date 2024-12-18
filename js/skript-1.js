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

    document.getElementById('Useremail').addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Z0-9@._-]/g, '');
    });
    document.getElementById('Useremail').addEventListener('change', function() {
        console.log('Почта пользователя: ' + this.value);
    });

    document.getElementById('usertelephonenumber').addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9\+\(\)\-\s]/g, '');
    });
    document.getElementById('usertelephonenumber').addEventListener('change', function() {
        console.log('Номер телефона пользователя: ' + this.value);
    });

    document.getElementById('visit').addEventListener('change', function() {
        console.log('Пользователь хочет посетить выставку ' + this.value);
    });




    
    
    
    const visitInput = document.getElementById('visit');

  visitInput.addEventListener('input', function(event) {
    const inputValue = event.target.value;

    
    const validDates = document.getElementById('dates').querySelectorAll('option');
    let found = false;
    for (let i = 0; i < validDates.length; i++) {
        if (validDates[i].value === inputValue) {
            found = true;
            break;
        }
    }

    if (!found) {
      event.target.value = ""; 
      alert("Пожалуйста, выберите дату из списка."); 
    }

  });








    /*let isRegistered = false; 
    let individualCode;
    
    document.getElementById('registrationButton').addEventListener('click', function() {
        
        const fields = [
            document.getElementById('usersurname'),
            document.getElementById('username'),
            document.getElementById('patronymic'),
            document.getElementById('Useremail'),
            document.getElementById('usertelephonenumber'),
            document.getElementById('visit'),
        ];
    
        const allFieldsFilled = fields.every(field => field.value.trim() !== '');
    
        if (isRegistered) {
            alert('Вы уже зарегистрированы. Ваш индивидуальный код для посещения выставки: ' + individualCode);
        } else if (allFieldsFilled) {
            individualCode = generateRandomCode(12); 
            alert(`Поздравляю! Вы можете посетить нашу выставку ${visit}. Покажите этот индивидуальный код: ${individualCode} на входе в выставочный центр`);
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
    }*/
        let isRegistered = false;
        let individualCode;
        
        document.getElementById('registrationButton').addEventListener('click', function() {
        
            const fields = [
                document.getElementById('usersurname'),
                document.getElementById('username'),
                document.getElementById('patronymic'),
                document.getElementById('Useremail'),
                document.getElementById('usertelephonenumber'),
                document.getElementById('visit'),
            ];
        
            const allFieldsFilled = fields.every(field => field.value.trim() !== '');
            const visitDate = document.getElementById('visit').value; // Получаем значение поля visit
            if (isRegistered) {
                alert(`Вы уже зарегистрированы на ${visitDate}. Ваш индивидуальный код для посещения выставки: ${individualCode}`);
            } else if (allFieldsFilled) {
                individualCode = generateRandomCode(12);
                alert(`Поздравляем! Вы можете посетить нашу выставку ${visitDate}. Пожалуйста, покажите этот индивидуальный код: ${individualCode} на входе`);
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
    