let lumina = 0
basic.showIcon(IconNames.Tortoise)
OLED.init(128, 64)
smarthome.crashSensorSetup(DigitalPin.P1)
pins.servoWritePin(AnalogPin.P5, 0)
basic.forever(function () {
    lumina = smarthome.ReadLightIntensity(AnalogPin.P2)
    if (lumina < 30) {
        OLED.clear()
        OLED.writeStringNewLine("Bine ati venit!")
        pins.servoWritePin(AnalogPin.P5, 90)
    }
    if (smarthome.crashSensor()) {
        OLED.clear()
        OLED.writeStringNewLine("ATENTIE: Usa se inchide!")
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P5, 0)
    }
})
