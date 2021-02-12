/* eslint-disable no-console */
const inputValues = document.querySelector('.input-value');
const fromTypes = document.querySelector('.from-type');
const toTypes = document.querySelector('.to-type');
const outputValue = document.querySelector('.outputValue');
const copybut = document.querySelector('.copy');

function MeterLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'meter') {
        output = inputValue * 1;
    } else if (totype === 'kilometer') {
        output = inputValue * 0.001;
        console.log(`reached meter logic: ${output}`);
    } else if (totype === 'centimeter') {
        output = inputValue * 100;
    } else if (totype === 'millimeter') {
        output = inputValue * 1000;
    } else if (totype === 'nanometer') {
        output = inputValue * 1000000000;
    } else if (totype === 'mile') {
        output = inputValue * 0.0006213712;
    } else if (totype === 'yard') {
        output = inputValue * 1.0936132983;
    } else if (totype === 'foot') {
        output = inputValue * 3.280839895;
    } else if (totype === 'inch') {
        output = inputValue * 39.37007874;
    } else if (totype === 'lightyear') {
        output = inputValue * 1.057000834e-16;
    }

    return output;
}

function KilometerLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'meter') {
        output = inputValue * 1000;
    } else if (totype === 'kilometer') {
        output = inputValue * 1;
        console.log(`reached meter logic: ${output}`);
    } else if (totype === 'centimeter') {
        output = inputValue * 100000;
    } else if (totype === 'millimeter') {
        output = inputValue * 1000000;
    } else if (totype === 'nanometer') {
        output = inputValue * 1000000000000;
    } else if (totype === 'mile') {
        output = inputValue * 0.6213711922;
    } else if (totype === 'yard') {
        output = inputValue * 1093.6132983;
    } else if (totype === 'foot') {
        output = inputValue * 3280.839895;
    } else if (totype === 'inch') {
        output = inputValue * 39370.07874;
    } else if (totype === 'lightyear') {
        output = inputValue * 1.057000834e-13;
    }

    return output;
}

function CentimeterLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'meter') {
        output = inputValue * 0.01;
    } else if (totype === 'kilometer') {
        output = inputValue * 0.00001;
        console.log(`reached meter logic: ${output}`);
    } else if (totype === 'centimeter') {
        output = inputValue * 1;
    } else if (totype === 'millimeter') {
        output = inputValue * 10;
    } else if (totype === 'nanometer') {
        output = inputValue * 10000000;
    } else if (totype === 'mile') {
        output = inputValue * 0.0000062137;
    } else if (totype === 'yard') {
        output = inputValue * 0.010936133;
    } else if (totype === 'foot') {
        output = inputValue * 0.032808399;
    } else if (totype === 'inch') {
        output = inputValue * 0.3937007874;
    } else if (totype === 'lightyear') {
        output = inputValue * 1.057000834e-18;
    }

    return output;
}

function MillimeterLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'meter') {
        output = inputValue * 0.001;
    } else if (totype === 'kilometer') {
        output = inputValue * 0.000001;
        console.log(`reached meter logic: ${output}`);
    } else if (totype === 'centimeter') {
        output = inputValue * 0.1;
    } else if (totype === 'millimeter') {
        output = inputValue * 1;
    } else if (totype === 'nanometer') {
        output = inputValue * 1000000;
    } else if (totype === 'mile') {
        output = inputValue * 6.213711922e-7;
    } else if (totype === 'yard') {
        output = inputValue * 0.0010936133;
    } else if (totype === 'foot') {
        output = inputValue * 0.0032808399;
    } else if (totype === 'inch') {
        output = inputValue * 0.0393700787;
    } else if (totype === 'lightyear') {
        output = inputValue * 1.057000834e-19;
    }

    return output;
}

function NanometerLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'meter') {
        output = inputValue * 9.999999999e-10;
    } else if (totype === 'kilometer') {
        output = inputValue * 1e-12;
        console.log(`reached meter logic: ${output}`);
    } else if (totype === 'centimeter') {
        output = inputValue * 1e-7;
    } else if (totype === 'millimeter') {
        output = inputValue * 0.000001;
    } else if (totype === 'nanometer') {
        output = inputValue * 1;
    } else if (totype === 'mile') {
        output = inputValue * 6.213711922e-13;
    } else if (totype === 'yard') {
        output = inputValue * 1.093613298e-9;
    } else if (totype === 'foot') {
        output = inputValue * 3.280839895e-9;
    } else if (totype === 'inch') {
        output = inputValue * 3.937007874e-8;
    } else if (totype === 'lightyear') {
        output = inputValue * 1.057000834e-25;
    }

    return output;
}

function MileLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'meter') {
        output = inputValue * 1609.344;
    } else if (totype === 'kilometer') {
        output = inputValue * 1.609344;
        console.log(`reached meter logic: ${output}`);
    } else if (totype === 'centimeter') {
        output = inputValue * 160934.4;
    } else if (totype === 'millimeter') {
        output = inputValue * 1609344;
    } else if (totype === 'nanometer') {
        output = inputValue * 1609344000000;
    } else if (totype === 'mile') {
        output = inputValue * 1;
    } else if (totype === 'yard') {
        output = inputValue * 1760;
    } else if (totype === 'foot') {
        output = inputValue * 5280;
    } else if (totype === 'inch') {
        output = inputValue * 63360;
    } else if (totype === 'lightyear') {
        output = inputValue * 1.70107795e-13;
    }

    return output;
}

function YardLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'meter') {
        output = inputValue * 0.9144;
    } else if (totype === 'kilometer') {
        output = inputValue * 0.0009144;
        console.log(`reached meter logic: ${output}`);
    } else if (totype === 'centimeter') {
        output = inputValue * 91.44;
    } else if (totype === 'millimeter') {
        output = inputValue * 914.4;
    } else if (totype === 'nanometer') {
        output = inputValue * 914400000;
    } else if (totype === 'mile') {
        output = inputValue * 0.0005681818;
    } else if (totype === 'yard') {
        output = inputValue * 1;
    } else if (totype === 'foot') {
        output = inputValue * 3;
    } else if (totype === 'inch') {
        output = inputValue * 36;
    } else if (totype === 'lightyear') {
        output = inputValue * 9.665215626e-17;
    }

    return output;
}

function FootLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'meter') {
        output = inputValue * 0.3048;
    } else if (totype === 'kilometer') {
        output = inputValue * 0.0003048;
        console.log(`reached meter logic: ${output}`);
    } else if (totype === 'centimeter') {
        output = inputValue * 30.48;
    } else if (totype === 'millimeter') {
        output = inputValue * 304.8;
    } else if (totype === 'nanometer') {
        output = inputValue * 304800000;
    } else if (totype === 'mile') {
        output = inputValue * 0.0001893939;
    } else if (totype === 'yard') {
        output = inputValue * 0.3333333333;
    } else if (totype === 'foot') {
        output = inputValue * 1;
    } else if (totype === 'inch') {
        output = inputValue * 12;
    } else if (totype === 'lightyear') {
        output = inputValue * 3.221738542e-17;
    }

    return output;
}

function InchLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'meter') {
        output = inputValue * 0.0254;
    } else if (totype === 'kilometer') {
        output = inputValue * 0.0000254;
        console.log(`reached meter logic: ${output}`);
    } else if (totype === 'centimeter') {
        output = inputValue * 2.54;
    } else if (totype === 'millimeter') {
        output = inputValue * 25.4;
    } else if (totype === 'nanometer') {
        output = inputValue * 25400000;
    } else if (totype === 'mile') {
        output = inputValue * 0.0000157828;
    } else if (totype === 'yard') {
        output = inputValue * 0.0277777778;
    } else if (totype === 'foot') {
        output = inputValue * 0.0833333333;
    } else if (totype === 'inch') {
        output = inputValue * 1;
    } else if (totype === 'lightyear') {
        output = inputValue * 2.684782118e-18;
    }

    return output;
}

function LightyearLogic(fromType, totype, inputValue) {
    let output = 1;
    if (totype === 'meter') {
        output = inputValue * 9460730472580044;
    } else if (totype === 'kilometer') {
        output = inputValue * 9460730472580;
        console.log(`reached meter logic: ${output}`);
    } else if (totype === 'centimeter') {
        output = inputValue * 946073047258004200;
    } else if (totype === 'millimeter') {
        output = inputValue * 9460730472580043000;
    } else if (totype === 'nanometer') {
        output = inputValue * 9.460730472e24;
    } else if (totype === 'mile') {
        output = inputValue * 5878625373183;
    } else if (totype === 'yard') {
        output = inputValue * 10346380656802248;
    } else if (totype === 'foot') {
        output = inputValue * 31039141970406748;
    } else if (totype === 'inch') {
        output = inputValue * 372469703644879100;
    } else if (totype === 'lightyear') {
        output = inputValue * 1;
    }

    return output;
}

function ConvertionLogic(fromType, toType, inputValue) {
    let outputval = 0;
    console.log(`${fromType} ${toType} ${inputValue}`);
    if (fromType === 'meter') {
        outputval = MeterLogic(fromType, toType, inputValue);
        console.log(`reached converstion logic: ${outputval}`);
    } else if (fromType === 'kilometer') {
        outputval = KilometerLogic(fromType, toType, inputValue);
    } else if (fromType === 'centimeter') {
        outputval = CentimeterLogic(fromType, toType, inputValue);
    } else if (fromType === 'millimeter') {
        outputval = MillimeterLogic(fromType, toType, inputValue);
    } else if (fromType === 'nanometer') {
        outputval = NanometerLogic(fromType, toType, inputValue);
    } else if (fromType === 'mile') {
        outputval = MileLogic(fromType, toType, inputValue);
    } else if (fromType === 'yard') {
        outputval = YardLogic(fromType, toType, inputValue);
    } else if (fromType === 'foot') {
        outputval = FootLogic(fromType, toType, inputValue);
    } else if (fromType === 'inch') {
        outputval = InchLogic(fromType, toType, inputValue);
    } else if (fromType === 'lightyear') {
        outputval = LightyearLogic(fromType, toType, inputValue);
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
