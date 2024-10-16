console.log('Файл main.js подключен')

// Свой счетчик, сколько чиним инструменты
const repair__years = document.querySelector('#repair__years');
const repair__months = document.querySelector('#repair__months');
const repair__days = document.querySelector('#repair__days');
const repair__hours = document.querySelector('#repair__hours');
const repair__minutes = document.querySelector('#repair__minutes');
const repair__seconds = document.querySelector('#repair__seconds');

const startRepairDate = new Date(2011, 0, 1, 0, 0, 0); // Начали ремонт

function updateRepairCounter () {
    const currentDate = new Date(); // Создает объект Date для текущего времени
    const currentTimeMilliseconds = currentDate.getTime();
    const startRepairDateMilliseconds = startRepairDate.getTime();

    const repairDiff = currentTimeMilliseconds - startRepairDateMilliseconds;

    // Перевод в года (сколько лет ремонтируем)
    const repairYearsOld = Math.floor(repairDiff / 1000 / 60 / 60 / 24 / 30 / 12);
    const repairMonthsOld = Math.floor(repairDiff / 1000 / 60 / 60 / 24 / 30) % 12;
    const repairDaysOld = Math.floor(repairDiff / 1000 / 60 / 60 / 24) % 30;
    const repairHoursOld = Math.floor(repairDiff / 1000 / 60 / 60) % 24;
    const repairMinutesOld = Math.floor(repairDiff / 1000 / 60) % 60;
    const repairSecondsOld = Math.floor(repairDiff / 1000) % 60;

    repair__years.innerText = repairYearsOld;
    repair__months.innerText = repairMonthsOld < 10 ? '0' + repairMonthsOld : repairMonthsOld;
    repair__days.innerText = repairDaysOld < 10 ? '0' + repairDaysOld : repairDaysOld;
    repair__hours.innerText = repairHoursOld < 10 ? '0' + repairHoursOld : repairHoursOld;
    repair__minutes.innerText = repairMinutesOld < 10 ? '0' + repairMinutesOld : repairMinutesOld;
    repair__seconds.innerText = repairSecondsOld < 10 ? '0' + repairSecondsOld : repairSecondsOld;
};

setInterval(updateRepairCounter, 1000);

// Свой счетчик - аренда инструментов
const rent__years = document.querySelector('#rent__years');
const rent__months = document.querySelector('#rent__months');
const rent__days = document.querySelector('#rent__days');
const rent__hours = document.querySelector('#rent__hours');
const rent__minutes = document.querySelector('#rent__minutes');
const rent__seconds = document.querySelector('#rent__seconds');

const startRentDate = new Date(2020, 12, 16, 14, 15, 0); // Начали сдавать в аренду

function updateRentCounter () {
    const currentDate = new Date(); // Создает объект Date для текущего времени
    const currentTimeMilliseconds = currentDate.getTime();
    const startRentDateMilliseconds = startRentDate.getTime();

    const rentDiff = currentTimeMilliseconds - startRentDateMilliseconds;

    // Перевод в года (сколько лет ремонтируем)
    const rentYearsOld = Math.floor(rentDiff / 1000 / 60 / 60 / 24 / 30 / 12);
    const rentMonthsOld = Math.floor(rentDiff / 1000 / 60 / 60 / 24 / 30) % 12;
    const rentDaysOld = Math.floor(rentDiff / 1000 / 60 / 60 / 24) % 30;
    const rentHoursOld = Math.floor(rentDiff / 1000 / 60 / 60) % 24;
    const rentMinutesOld = Math.floor(rentDiff / 1000 / 60) % 60;
    const rentSecondsOld = Math.floor(rentDiff / 1000) % 60;

    rent__years.innerText = rentYearsOld;
    rent__months.innerText = rentMonthsOld < 10 ? '0' + rentMonthsOld : rentMonthsOld;
    rent__days.innerText = rentDaysOld < 10 ? '0' + rentDaysOld : rentDaysOld;
    rent__hours.innerText = rentHoursOld < 10 ? '0' + rentHoursOld : rentHoursOld;
    rent__minutes.innerText = rentMinutesOld < 10 ? '0' + rentMinutesOld : rentMinutesOld;
    rent__seconds.innerText = rentSecondsOld < 10 ? '0' + rentSecondsOld : rentSecondsOld;
};
setInterval(updateRentCounter, 1000);

// Центральный раздел - ремонт - карусель
// Элементы на странице
const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function (slide, index) {

    // Скрываем все слайды кроме первого
    if (index !== 0) {
        slide.classList.add('hidden');
    }

    // Добавляем индексы для слайдов
    slide.dataset.index = index;    

    // Добавляем data атрибут active для первого / активного слайда
    sliderItems[0].setAttribute('data-active', '');

    // Клик по слайдам
    slide.addEventListener('click', function () {
        // Скрываем текущий слайд
        slide.classList.add('hidden')
        slide.removeAttribute('data-active');

        // Рассчитываем индекс след слайда
        // 1. Простой вариант ( по строкам)
        // let nextSlideIndex;
        // if (index + 1 === sliderItems.length) {
        //     nextSlideIndex = 0;
        // } else {
        //     nextSlideIndex = index + 1
        // }

        // 2. Второй вариант ( тпернарный оператор )
        const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

        // Находим след слайд
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        // Отображаем след слайд
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
    })
});

btnNext.onclick = function () {
    console.log('Next Slide');

    // Скрываем текщий слайд
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Показываем след слайд
    const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}

btnPrev.onclick = function () {
    console.log('Prev Slide');

    // Скрываем текщий слайд
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Показываем след слайд
    const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    // const navLinks = document.getElementById('left__menu');
    const navLinks = document.getElementById('left');

    burger.addEventListener('click', () => {
        console.log('Нажали на бургер.');
        navLinks.classList.toggle('show');
    });
});

// Светлая тёмная тема
let checkbox = document.querySelector('.theme-checkbox')

if(localStorage.getItem('theme') == 'true') {
  theme.setAttribute('href', '/css/theme-dark.css')
  checkbox.checked = true
}

checkbox.onchange = function() {
  if(this.checked) {
    localStorage.setItem('theme', true)
    theme.setAttribute('href', '/css/theme-dark.css')
  } else {
    localStorage.setItem('theme', false)
    theme.setAttribute('href', '/css/theme-light.css')
  }
}

// Центральная страница карусель
let bntLeft = document.querySelector('#carousel__btn-left');
let bntRight = document.querySelector('#carousel__btn-right');
let carouselImage = document.querySelector('#cental-carousel-photo');
let countImage = 1;
let hr1 = document.querySelector('#central-carousel__hr1');
let hr2 = document.querySelector('#central-carousel__hr2');
let hr3 = document.querySelector('#central-carousel__hr3');
let hr4 = document.querySelector('#central-carousel__hr4');

bntRight.addEventListener('click', function(e) {
    if(countImage < 4) {
        console.log('Нажали кнопку вправо')
        document.querySelector(`.central-carousel__hr${countImage}`).classList.toggle('active');
        countImage = countImage + 1;
        document.querySelector(`.central-carousel__hr${countImage}`).classList.toggle('active');
        console.log(`Считчик картиток значение: ${countImage}`)
        carouselImage.src = `img/central-carousel-${countImage}.jpg`;
    } else {
        console.log('Нажали кнопку вправо')
        document.querySelector(`.central-carousel__hr${countImage}`).classList.toggle('active');
        countImage = 1;
        document.querySelector(`.central-carousel__hr${countImage}`).classList.toggle('active');
        console.log(`Считчик картиток значение: ${countImage}`)
        carouselImage.src = `img/central-carousel-${countImage}.jpg`;
    }

})
bntLeft.addEventListener('click', function(e) {
    if(countImage > 1) {
        console.log('Нажали кнопку вправо')
        document.querySelector(`.central-carousel__hr${countImage}`).classList.toggle('active');
        countImage = countImage - 1;
        document.querySelector(`.central-carousel__hr${countImage}`).classList.toggle('active');
        console.log(`Считчик картиток значение: ${countImage}`)
        carouselImage.src = `img/central-carousel-${countImage}.jpg`;
    } else {
        console.log('Нажали кнопку вправо')
        document.querySelector(`.central-carousel__hr${countImage}`).classList.toggle('active');
        countImage = 4;
        document.querySelector(`.central-carousel__hr${countImage}`).classList.toggle('active');
        console.log(`Считчик картиток значение: ${countImage}`)
        carouselImage.src = `img/central-carousel-${countImage}.jpg`;
    }
})

// Центральная, калькулятор аренды
let tools = [
    {},
    {'tool':'perforator-sds-plus', 'rent':700, 'weight':4600},
    {'tool':'perforator-sds-max', 'rent':1000, 'weight':8200},
    {'tool':'otboinik-do-40dj', 'rent':1200, 'weight':8400},
    {'tool':'bolgarka-125mm', 'rent':600, 'weight':2300}
];
let form = document.forms.calcrent

let calcRentAddBtn = document.querySelector('#calcRentAddBtn')
let calcRentTools = 2
let calcRentAddBlock = document.querySelector('#central-calc-rent__add-tool')
let calcRentToolSample = document.querySelector('#central-calc-rent__tool-sample')

calcRentAddBtn.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('Нажали кнопку - Добавить инструмент')
    calcRentTools = calcRentTools + 1
    console.log(`Сейчас полей для выбора стало: ${calcRentTools}`)
    let calcRentToolSampleNew = calcRentToolSample.cloneNode(true);
    calcRentToolSampleNew.querySelector('p').textContent = `Инструмент ${calcRentTools}:`
    calcRentToolSampleNew.querySelectorAll('p')[1].id = `cost-tool-${calcRentTools}`
    calcRentToolSampleNew.querySelectorAll('p')[1].innerHTML = ''
    calcRentToolSampleNew.querySelector('select').setAttribute('name', `tool${calcRentTools}`)
    calcRentAddBlock.before(calcRentToolSampleNew)
    calcRentToolSampleNew.oninput = rentCalculate
    
})
form.addEventListener('submit', function(e) {
    e.preventDefault()
    rentCalculate()
})
document.querySelector('#daysInput').addEventListener('input', rentCalculate)
form.tool1.oninput = rentCalculate
form.tool2.oninput = rentCalculate

function rentCalculate() {
    console.log('Функция rentCalculate сработала')
    let days = +form.days.value
    document.getElementById('how-many-days').innerHTML = `Дней: ${days}`
    let howmanytools = 0
    let allselect = form.querySelectorAll('select')
    console.log(allselect[0].value)
    console.log(allselect[1].value)
    for(item of allselect) {
        if(+item.value !== 0) {
            howmanytools = howmanytools + 1
            console.log(item.closest('.central-calc-rent__tool').querySelectorAll('p')[1])
            let toolRent = tools[+item.value]['rent']
            console.log(toolRent)
            item.closest('.central-calc-rent__tool').querySelectorAll('p')[1].innerHTML = `${toolRent} руб.`
        } else {
            item.closest('.central-calc-rent__tool').querySelectorAll('p')[1].innerHTML = ``
        }
        document.getElementById('how-many-tools').innerHTML = `Инструментов: ${howmanytools}`
    }

    let allprice = 0
    for(item of allselect) {
        if(+item.value !== 0) {
            allprice = allprice + tools[+item.value]['rent']
        }
        if(allprice > 0) {
            document.getElementById('rent-all-cost').innerHTML = `Стоимость: ${allprice*days} руб.`
        } else {
            document.getElementById('rent-all-cost').innerHTML = `Стоимость: 0 руб.`
        }
        
    }
}

rentCalculate()

// Форма обратной связи
let token = '7035535087:AAEYdhGanhlIfsOV-dghwjLCPbvDG5Rrn3M';
let chat_id = '-1002412754023';
let uri_api = `https://api.telegram.org/bot${token}/sendMessage`;

document.getElementById('form-feedback').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b> Сообщение от клиента с сайта тест</b>\n`;
    message += `<b>Отправитель: </b>${this.name.value}\n`;
    message += `<b>Почта клиента: </b>${this.email.value}\n`;
    message += `<b>Сообщение от клиента: </b>${this.textmessage.value}\n`;

    axios.post(uri_api, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = '';
        this.email.value = '';
        this.textmessage.value = '';
        document.getElementById('form-feedback__notification').classList.toggle('hidden')
        setTimeout(function() {
            document.getElementById('form-feedback__notification').classList.toggle('hidden')
        }, 5000);
    })
    .catch((err) => {
        console.log(err);
        let errorMessage = err.message;
        document.querySelectorAll('#form-feedback__notification-error p')[1].innerHTML = `Ошибка: ${errorMessage}`
        document.getElementById('form-feedback__notification-error').classList.toggle('hidden')
        setTimeout(function() {
            document.getElementById('form-feedback__notification-error').classList.toggle('hidden')
        }, 5000);
    })
    .finally(() => {
        console.log('Отправка сообщения завершена.')
    })
})

