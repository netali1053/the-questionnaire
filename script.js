const form = document.querySelector(".form");
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const secondName = document.querySelector('#secondName');
const phone = document.querySelector('#phone');
const agreeCheckbox = document.querySelector('#agree');
const sendBtn = document.querySelector('#button');
const clearBtn = document.querySelector('#clear');
const info = document.querySelector('.info-container');
const title = document.querySelector('h1');

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    sendBtn.addEventListener('click', async function() {
        try {
            const request = await fetch(`https://polinashneider.space/user`, {
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

            const data = await request.json();

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

        } catch (error) {
            alert("Произошла ошибка!", error)
        }
    })
})