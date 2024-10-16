// Центральная, калькулятор аренды
let tools = [
    {},
    {'tool':'perforator-sds-plus', 'rent':700, 'weight':4600},
    {'tool':'perforator-sds-max', 'rent':1000, 'weight':8200},
    {'tool':'otboinik-do-40dj', 'rent':1200, 'weight':8400},
    {'tool':'bolgarka-125mm', 'rent':600, 'weight':2300}
];
let form = document.forms.calcrent

form.days.oninput = rentCalculate
form.tool1.oninput = rentCalculate
form.tool2.oninput = rentCalculate
form.tool3.oninput = rentCalculate

function rentCalculate() {
    let days = +form.days.value
    let tool1 = +form.tool1.value
    let tool2 = +form.tool2.value
    let tool3 = +form.tool3.value
    let tool1rent = tool1 > 0 ? tools[tool1]['rent'] : 0;
    let tool2rent = tool2 > 0 ? tools[tool2]['rent'] : 0;
    let tool3rent = tool3 > 0 ? tools[tool3]['rent'] : 0;

    let howmanytools = 0
    
    let result = 0
    result = (tool1rent + tool2rent + tool3rent)* days;
    if(tool1 == 0) {
        document.getElementById('cost-tool-1').innerHTML = ''
    } else {
        document.getElementById('cost-tool-1').innerHTML = `${tool1rent} руб.`
        howmanytools = howmanytools + 1
    }
    if(tool2 == 0) {
        document.getElementById('cost-tool-2').innerHTML = ''
    } else {
        document.getElementById('cost-tool-2').innerHTML = `${tool2rent} руб.`
        howmanytools = howmanytools + 1
    }
    if(tool3 == 0) {
        document.getElementById('cost-tool-3').innerHTML = ''
    } else {
        document.getElementById('cost-tool-3').innerHTML = `${tool3rent} руб.`
        howmanytools = howmanytools + 1
    }
    
    document.getElementById('how-many-tools').innerHTML = `Инструментов: ${howmanytools}`
    document.getElementById('how-many-days').innerHTML = `Дней: ${days}`
    document.getElementById('rent-all-cost').innerHTML = `Стоимость: ${result} руб.`
}
rentCalculate();