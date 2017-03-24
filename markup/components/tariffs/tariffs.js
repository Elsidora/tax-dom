let tabBtn = document.querySelectorAll('.tariff-toggle');
let slideItem = document.querySelectorAll('.tariff-item-toggle');

function slideChange(e) {
    let itemAttr = this.getAttribute('data-name');
    let slideItemAttr = [];
    for (let i = 0; i < tabBtn.length; i++) {
        tabBtn[i].classList.remove('tariffs__item_active');
        this.classList.add('tariffs__item_active');
    }
    for (let i = 0; i < slideItem.length; i++) {
        slideItem[i].classList.remove('tariff-item_active');
        slideItemAttr.push(slideItem[i].getAttribute('data-name'));
        for (let j = 0; j < slideItemAttr.length; j++) {
            if (itemAttr === slideItemAttr[j]) {
                slideItem[j].classList.add('tariff-item_active');
            }
        }
    }
}
for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', slideChange);
}
