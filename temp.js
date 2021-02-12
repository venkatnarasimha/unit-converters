const inputValues = document.querySelector('.input-value');
const fromTypes = document.querySelector('.from-type');
const toTypes = document.querySelector('.to-type');
const outputValue = document.querySelector('.outputValue');
const copybut = document.querySelector('.copy');
const general = document.querySelector('.general-info');

function KelvinLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'kelvin') {
        output = inputValue;
        general.value = `1 K = 1 K`;
    } else if (totype === 'celsius') {
        output = Number(inputValue) - 273.15;
        general.value = `1 K = -273.15 °C`;
    } else if (totype === 'fahrenheit') {
        output = Number(inputValue) * 1.8 - 459.67;
        general.value = `1 K = -457.87 °F`;
    }
    return output;
}

function CelsiusLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'kelvin') {
        output = Number(inputValue) + 273.15;
        general.value = `1 °C = 274.15 K`;
    } else if (totype === 'celsius') {
        output = Number(inputValue);
        general.value = `1 °C = 1 °C`;
    } else if (totype === 'fahrenheit') {
        output = Number(inputValue) * 1.8 + 32;
        general.value = `1 °C = 33.8 °F`;
    }
    return output;
}

function FahrenheitLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'kelvin') {
        output = (Number(inputValue) + 459.67) * 1.8;
        general.value = `1 °F = 255.92777778 K`;
    } else if (totype === 'celsius') {
        output = Number(inputValue) * 1.8 - 32;
        general.value = `1 °F = -17.222222222 °C`;
    } else if (totype === 'fahrenheit') {
        output = Number(inputValue);
        general.value = `1 °F = 1 °F`;
    }
    return output;
}

function ConvertionLogic(fromType, toType, inputValue) {
    let outputval = 1;
    console.log(`${fromType} ${toType} ${inputValue}`);
    if (fromType === 'kelvin') {
        outputval = KelvinLogic(fromType, toType, inputValue);
    } else if (fromType === 'celsius') {
        outputval = CelsiusLogic(fromType, toType, inputValue);
    } else if (fromType === 'fahrenhiet') {
        outputval = FahrenheitLogic(fromType, toType, inputValue);
    }
    return outputval;
}

inputValues.addEventListener('input', () => {
    console.log(toTypes.value);
    outputValue.value = ConvertionLogic(fromTypes.value, toTypes.value, inputValues.value);
});

fromTypes.addEventListener('change', () => {
    console.log(toTypes.value);
    outputValue.value = ConvertionLogic(fromTypes.value, toTypes.value, inputValues.value);
});

toTypes.addEventListener('change', () => {
    console.log(toTypes.value);
    outputValue.value = ConvertionLogic(fromTypes.value, toTypes.value, inputValues.value);
});

copybut.addEventListener('click', () => {
    const copy = document.querySelector('.outputValue');
    console.log('clicked:', copy);
    copy.focus();
    copy.select();
    document.execCommand('copy');
    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        console.log(`Copying text command was ${msg}`);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
});
