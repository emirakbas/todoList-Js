document.querySelector('#addButton').addEventListener('click', function() {
    console.log('Button clicked');
    const listElement = document.querySelector('#inputField').value;
    console.log(`Girilen değer: "${listElement}"`);
    if (listElement === '') {
        alert('Lütfen değer giriniz!');
        return;
    }

const listCreate = document.createElement('li');
listCreate.textContent = listElement;

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Sil';

listCreate.appendChild(deleteButton); // Oluşturulan li elementinin 'içine' butonu ekler.
document.querySelector('.elementList').appendChild(listCreate);

deleteButton.addEventListener('click', function() {
    listCreate.remove();
}); // Sil butonuna tıklanınca elementList içinde oluşturulan li elementini siler.

inputField.value = ''; // input alanını temizler.

});

document.querySelector('#inputField').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('#addButton').click();
    }
});

document.querySelector('#deleteAllButton').addEventListener('click', function() {
    document.querySelectorAll('.elementList').forEach(function(item) {
        console.log(item);
        item.remove();
    });
});