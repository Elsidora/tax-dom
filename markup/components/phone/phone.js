const phoneBtn = document.querySelector('#phone-js');
const transferBtn = document.querySelectorAll('.transfer-btn');
function formInputFocus() {
    const formField = document.querySelector('#sedi-orderform3-address-from');
    const formFieldTo = document.querySelector('#sedi-orderform3-address-to');
    const attr = this.getAttribute('data-name');
    if ( attr === 'transfer') {
        formFieldTo.focus();
    } else {
        formField.focus();
    }
}
phoneBtn.addEventListener('click', formInputFocus);
for (let i = 0; i < transferBtn.length; i++) {
    transferBtn[i].addEventListener('click', formInputFocus);
}
