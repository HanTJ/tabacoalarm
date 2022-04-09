let gas = 0
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
9,
0
)
let val = 0
basic.forever(function () {
    lcd1602.putNumber(
    pins.analogReadPin(AnalogPin.P1),
    3,
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
    gas = pins.analogReadPin(AnalogPin.P1)
    if (gas > 400) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
