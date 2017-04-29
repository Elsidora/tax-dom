window.onload = function (e) {
    const phoneBtn = document.querySelector('#phone-js');
    const transferBtn = document.querySelectorAll('.transfer-btn');
    function formInputFocus() {
        const formField = document.querySelector('#sedi-orderform2-address-from');
        const formFieldTo = document.querySelector('#sedi-orderform2-address-to');
        if (formField && formFieldTo) {
            formField.value = 'Аэропорт Домодедово';
            formFieldTo.focus();
        }
    }
    phoneBtn.addEventListener('click', formInputFocus);
    for (let i = 0; i < transferBtn.length; i++) {
        transferBtn[i].addEventListener('click', formInputFocus);
    }
};
