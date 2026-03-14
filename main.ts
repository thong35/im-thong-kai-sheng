music.play(music.createSoundExpression(
WaveShape.Sine,
0,
5000,
255,
0,
3000,
SoundExpressionEffect.None,
InterpolationCurve.Linear
), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.showString("Hello!")
})
