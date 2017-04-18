window.onload = function (e) {
    const phoneBtn = document.querySelector('#phone-js');
    phoneBtn.addEventListener('click', function () {
        const formField = document.querySelector('#sedi-orderform2-address-from');
        formField.focus();
    });
};
