const form = document.querySelector(".form");
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const secondName = document.querySelector('#secondName');
const phone = document.querySelector('#phone');
const agreeCheckbox = document.querySelector('#agree');
const info = document.querySelector('.info-container');
const title = document.querySelector('h1');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    fetch(`https://polinashneider.space/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: netali1053'
            },
            body: JSON.stringify({
                "name": nameInput.value,
                "secondName": secondName.value,
                "phone": phone.value,
                "email": email.value,
                "agree": agreeCheckbox.checked
            }),
        })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            if (data) {
                info.classList.remove('hidden');
                title.classList.add('hidden');
                form.classList.add('hidden');
                form.reset();

                const textOk = document.createElement('p');
                textOk.textContent = '✨Поздравляем! Ваша анкета успешно отправлена!✨';
                textOk.classList.add('paragraph');

                info.append(textOk);
            }
        })
        .catch((error) => {
            console.log(error);
        });
});