window.onload = function (e) {
    const phoneBtn = document.querySelector('#phone-js');
    const transferBtn = document.querySelectorAll('.transfer-btn');
    function formInputFocus() {
        const formField = document.querySelector('#sedi-orderform2-address-from');
        const formFieldTo = document.querySelector('#sedi-orderform2-address-to');
        const attr = this.getAttribute('data-name');
        if ( attr === 'transfer') {
            formField.value = 'Аэропорт Домодедово';
            formFieldTo.focus();
        } else {
            formField.focus();
        }
    }
    phoneBtn.addEventListener('click', formInputFocus);
    for (let i = 0; i < transferBtn.length; i++) {
        transferBtn[i].addEventListener('click', formInputFocus);
    }
};
