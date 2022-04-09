basic.clearScreen()
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
lcd1602.putString(
"GAS",
3,
0
)
lcd1602.putString(
"ALC",
7,
0
)
let val = 0
basic.forever(function () {
    lcd1602.putNumber(
    pins.analogReadPin(AnalogPin.P1),
    4,
    1
    )
    lcd1602.putNumber(
    pins.analogReadPin(AnalogPin.P2),
    9,
    1
    )
    basic.pause(1000)
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
})
