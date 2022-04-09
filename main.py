lcd1602.set_address(lcd1602.I2C_ADDR.ADDR1)
lcd1602.put_string("ICBANQ", 3, 0)
val = 0

def on_forever():
    global val
    val += 1
    lcd1602.put_number(val, 7, 1)
    basic.pause(1000)
basic.forever(on_forever)
