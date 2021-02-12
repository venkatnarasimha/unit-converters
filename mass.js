/* eslint-disable no-console */

const inputValues = document.querySelector('.input-value');
const fromTypes = document.querySelector('.from-type');
const toTypes = document.querySelector('.to-type');
const outputValue = document.querySelector('.outputValue');
const copybut = document.querySelector('.copy');
const general = document.querySelector('.general-info');

function KilogramLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'kilogram') {
        output = inputValue * 1;
        general.value = `1 kg = 1 kg`;
    } else if (totype === 'gram') {
        output = inputValue * 1000;
        general.value = `1 kg = 1000 g`;
    } else if (totype === 'milligram') {
        output = inputValue * 1000000;
        general.value = `1 kg = 1000000 mg`;
    } else if (totype === 'ton') {
        output = inputValue * 0.001;
        general.value = `1 kg = 0.001 t`;
    } else if (totype === 'pound') {
        output = inputValue * 2.2046226218;
        general.value = `1 kg = 2.2046226218 lbs`;
    } else if (totype === 'ounce') {
        output = inputValue * 35.27396195;
        general.value = `1 kg = 35.27396195 oz`;
    } else if (totype === 'carat') {
        output = inputValue * 5000;
        general.value = `1 kg = 5000 ct`;
    }

    return output;
}

function GramLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'kilogram') {
        output = inputValue * 0.001;
        general.value = `1 g = 0.001 kg`;
    } else if (totype === 'gram') {
        output = inputValue * 1;
        general.value = `1 g = 1 g`;
    } else if (totype === 'milligram') {
        output = inputValue * 1000;
        general.value = `1 g = 1000 mg`;
    } else if (totype === 'ton') {
        output = inputValue * 0.000001;
        general.value = `1 g = 0.000001 t`;
    } else if (totype === 'pound') {
        output = inputValue * 0.0022046226;
        general.value = `1 g = 0.0022046226 lbs`;
    } else if (totype === 'ounce') {
        output = inputValue * 0.0352739619;
        general.value = `1 g = 0.0352739619 oz`;
    } else if (totype === 'carat') {
        output = inputValue * 5;
        general.value = `1 g = 5 ct`;
    }

    return output;
}

function MilligramLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'kilogram') {
        output = inputValue * 0.000001;
        general.value = `1 mg = 0.000001 kg`;
    } else if (totype === 'gram') {
        output = inputValue * 0.001;
        general.value = `1 mg = 0.001 g`;
    } else if (totype === 'milligram') {
        output = inputValue * 1;
        general.value = `1 mg =  1 mg`;
    } else if (totype === 'ton') {
        output = inputValue * 1e-9;
        general.value = `1 mg =   1e-9 t`;
    } else if (totype === 'pound') {
        output = inputValue * 0.0000022046;
        general.value = `1 mg =  0.0000022046 lbs`;
    } else if (totype === 'ounce') {
        output = inputValue * 0.000035274;
        general.value = `1 mg =   0.000035274 oz`;
    } else if (totype === 'carat') {
        output = inputValue * 0.005;
        general.value = `1 mg =   0.005 ct`;
    }
    return output;
}

function TonLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'kilogram') {
        output = inputValue * 1000;
        general.value = `1 t =  1000 kg`;
    } else if (totype === 'gram') {
        output = inputValue * 1000000;
        general.value = `1 t =  1000000 g`;
    } else if (totype === 'milligram') {
        output = inputValue * 1000000000;
        general.value = `1 t =   1000000000mg`;
    } else if (totype === 'ton') {
        output = inputValue * 1;
        general.value = `1 t =   1 t`;
    } else if (totype === 'pound') {
        output = inputValue * 2204.6226218;
        general.value = `1 t =   2204.6226218 lbs`;
    } else if (totype === 'ounce') {
        output = inputValue * 35273.96195;
        general.value = `1 t =   35273.96195 oz`;
    } else if (totype === 'carat') {
        output = inputValue * 5000000;
        general.value = `1 t =   5000000 ct`;
    }

    return output;
}

function PoundLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'kilogram') {
        output = inputValue * 0.45359237;
        general.value = `1 lbs = 0.45359237 kg`;
    } else if (totype === 'gram') {
        output = inputValue * 453.59237;
        general.value = `1 lbs = 453.59237 g`;
    } else if (totype === 'milligram') {
        output = inputValue * 453592.37;
        general.value = `1 lbs = 453592.37 mg`;
    } else if (totype === 'ton') {
        output = inputValue * 0.0004535924;
        general.value = `1 lbs = 0.0004535924 t`;
    } else if (totype === 'pound') {
        output = inputValue * 1;
        general.value = `1 lbs = 1 lbs`;
    } else if (totype === 'ounce') {
        output = inputValue * 16;
        general.value = `1 lbs = 16 oz`;
    } else if (totype === 'carat') {
        output = inputValue * 2267.96185;
        general.value = `1 lbs = 2267.96185 ct`;
    }

    return output;
}

function OunceLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'kilogram') {
        output = inputValue * 0.0283495231;
        general.value = `1 oz =  0.0283495231 kg`;
    } else if (totype === 'gram') {
        output = inputValue * 28.349523125;
        general.value = `1 oz = 28.349523125 g`;
    } else if (totype === 'milligram') {
        output = inputValue * 28349.523125;
        general.value = `1 oz = 28349.523125 mg`;
    } else if (totype === 'ton') {
        output = inputValue * 0.0000283495;
        general.value = `1 oz = 0.0000283495 t`;
    } else if (totype === 'pound') {
        output = inputValue * 0.0625;
        general.value = `1 oz = 0.0625 lbs`;
    } else if (totype === 'ounce') {
        output = inputValue * 1;
        general.value = `1 oz = 1 oz`;
    } else if (totype === 'carat') {
        output = inputValue * 141.74761563;
        general.value = `1 oz = 141.74761563 ct`;
    }

    return output;
}

function CaratLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'kilogram') {
        output = inputValue * 0.0002;
        general.value = `1 ct = 0.0002 kg`;
    } else if (totype === 'gram') {
        output = inputValue * 0.2;
        general.value = `1 ct = 0.2 g`;
    } else if (totype === 'milligram') {
        output = inputValue * 200;
        general.value = `1 ct = 200 mg`;
    } else if (totype === 'ton') {
        output = inputValue * 2e-7;
        general.value = `1 ct = 2e-7 t`;
    } else if (totype === 'pound') {
        output = inputValue * 0.0004409245;
        general.value = `1 ct = 0.0004409245 lbs`;
    } else if (totype === 'ounce') {
        output = inputValue * 0.0070547924;
        general.value = `1 ct = 0.0070547924 oz`;
    } else if (totype === 'carat') {
        output = inputValue * 1;
        general.value = `1 ct = 1 ct`;
    }

    return output;
}

function ConvertionLogic(fromType, toType, inputValue) {
    let outputval = 1;
    console.log(`${fromType} ${toType} ${inputValue}`);
    if (fromType === 'kilogram') {
        outputval = KilogramLogic(fromType, toType, inputValue);
    } else if (fromType === 'gram') {
        outputval = GramLogic(fromType, toType, inputValue);
    } else if (fromType === 'milligram') {
        outputval = MilligramLogic(fromType, toType, inputValue);
    } else if (fromType === 'ton') {
        outputval = TonLogic(fromType, toType, inputValue);
    } else if (fromType === 'pound') {
        outputval = PoundLogic(fromType, toType, inputValue);
    } else if (fromType === 'ounce') {
        outputval = OunceLogic(fromType, toType, inputValue);
    } else if (fromType === 'carat') {
        outputval = CaratLogic(fromType, toType, inputValue);
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
