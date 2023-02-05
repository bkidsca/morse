control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    if (control.eventTimestamp() - start < 200000) {
        input2 = "" + input2 + "."
    } else {
        input2 = "" + input2 + "-"
    }
    basic.showString(morsecode[input2] || '', 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    start = control.eventTimestamp()
})
let start = 0
let input2 = ""
let morsecode: {[key:string]: string} = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
};
basic.forever(function () {
    if (control.micros() - start > 2000000) {
        input2 = ""
        basic.showString('', 0)
    }
})
