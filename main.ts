input.onButtonPressed(Button.A, function () {
    if (Letter == 25) {
        Letter = 0
    } else {
        Letter += 1
    }
    basic.showString("" + (Letters[Letter]))
})
input.onButtonPressed(Button.AB, function () {
    Letter = 0
    basic.showString("" + (Letters[Letter]))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.showString("" + (Letters[Letter]))
})
input.onButtonPressed(Button.B, function () {
    Message = "" + Message + Letters[Letter]
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("" + Message + " from " + My_UID)
    basic.showString(Message)
})
let Letters: string[] = []
let My_UID = 0
let Letter = 0
let Message = ""
Message = ""
Letter = 0
My_UID = randint(1, 99999)
Letters = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
radio.setGroup(1)
basic.showString("" + (Letters[Letter]))
radio.sendString("TX")
basic.forever(function () {
    if (input.lightLevel() < 30) {
        led.setBrightness(30)
    } else {
        led.setBrightness(input.lightLevel())
    }
})
