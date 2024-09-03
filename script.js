document.querySelector('#addButton').addEventListener('click', function() {
    console.log('Button clicked');
    const listElement = document.querySelector('#inputField').value;
    console.log(`Girilen değer: "${listElement}"`);
    if (listElement === '') {
        alert('Lütfen değer giriniz!');
        return;
    }

const listCreate = document.createElement('li');
console.log(listCreate);
listCreate.textContent = listElement;

document.querySelector('.elementList').appendChild(listCreate);

inputField.value = ''; // input alanını temizler.

});

document.querySelector('#inputField').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('#addButton').click();
    }
});