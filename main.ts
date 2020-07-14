music.onEvent(MusicEvent.MelodyEnded, function () {
    basic.clearScreen()
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    basic.showString("MI'mLoveIt")
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("C - C G F - E - ", 240)
    music.playMelody("D D - D F F E D ", 240)
    music.playMelody("C - C F E F E F ", 240)
    music.playMelody("C - C F E F E F ", 240)
    music.playMelody("C - C G F - E - ", 240)
    music.playMelody("D D - D F F E D ", 240)
    music.playMelody("C - C F E F E F ", 240)
    music.playMelody("C - C F E F E F ", 240)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("D D D D G G G G ", 240)
    music.playMelody("F F F F A A A A ", 240)
    music.playMelody("B B B B B B B B ", 240)
    music.playMelody("B B B B F E D C ", 240)
})
