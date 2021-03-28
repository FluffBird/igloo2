let moisturereading = 0
let currenttemperature = 0
basic.forever(function () {
    OLED.init(128, 64)
    moisturereading = smarthome.ReadSoilHumidity(AnalogPin.P1)
    basic.pause(100)
    if (moisturereading < 1) {
        OLED.writeStringNewLine("Water Level : LOW")
        OLED.newLine()
        OLED.writeNumNewLine(moisturereading)
        for (let index = 0; index < 15; index++) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(100)
        }
    } else {
        OLED.writeStringNewLine("Water Level : ADEQUATE")
        OLED.newLine()
        OLED.writeNumNewLine(moisturereading)
    }
    OLED.clear()
    basic.pause(2000)
    currenttemperature = 0
    if (currenttemperature < smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P3)) {
        OLED.writeStringNewLine("Temperature : LOW")
        OLED.newLine()
        OLED.writeNumNewLine(currenttemperature)
        for (let index = 0; index < 15; index++) {
            pins.digitalWritePin(DigitalPin.P3, 1)
            basic.pause(100)
        }
    } else if (currenttemperature > 35) {
        OLED.writeStringNewLine("Temperature : HIGH")
        OLED.newLine()
        OLED.writeNumNewLine(currenttemperature)
        for (let index = 0; index < 15; index++) {
            pins.digitalWritePin(DigitalPin.P4, 1)
            basic.pause(100)
        }
    } else {
        OLED.writeStringNewLine("Temperature : ADEQUATE")
        OLED.newLine()
        OLED.writeNumNewLine(currenttemperature)
    }
    OLED.clear()
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(200)
    OLED.writeStringNewLine("loading.")
    basic.pause(200)
    OLED.writeStringNewLine("loading..")
    basic.pause(200)
    OLED.writeStringNewLine("loading...")
    basic.pause(200)
    OLED.writeStringNewLine("loading..")
    basic.pause(200)
    OLED.writeStringNewLine("loading...")
    basic.pause(200)
    OLED.writeStringNewLine("loading....")
    basic.pause(200)
    OLED.writeStringNewLine("loading....")
    basic.pause(200)
    OLED.writeStringNewLine("loading...")
    basic.pause(200)
    OLED.writeStringNewLine("loading..")
    basic.pause(200)
    OLED.writeStringNewLine("loading.")
    basic.pause(200)
    OLED.writeStringNewLine("loading..")
    basic.pause(200)
    OLED.writeStringNewLine("loading...")
    basic.pause(200)
    OLED.writeStringNewLine("loading....")
    basic.pause(200)
    OLED.writeStringNewLine("loading....")
    basic.pause(200)
    OLED.writeStringNewLine("loading...")
    basic.pause(200)
    OLED.writeStringNewLine("loading..")
    basic.pause(200)
    OLED.writeStringNewLine("loading.")
})
