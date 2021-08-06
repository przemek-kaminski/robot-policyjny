function policyjne_światła () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.BLUE)
    basic.pause(80)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.BLUE)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
    basic.pause(80)
}
loops.everyInterval(1, function () {
    policyjne_światła()
})
loops.everyInterval(1, function () {
    music.playMelody("A G A G A G A G ", 200)
    music.setVolume(140)
})
basic.forever(function () {
    serial.writeLine("" + (DFRobotMaqueenPlus.readSpeed(Motors1.M1)))
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 80)
    if (DFRobotMaqueenPlus.readSpeed(Motors1.M1) < 15) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 50)
        basic.pause(200)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 80)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 0)
    }
})
