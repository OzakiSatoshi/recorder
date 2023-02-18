// 再生するボタンを取得
const playButton = document.getElementById('play-button');

// 音声を再生する処理を追加
playButton.addEventListener('click', () => {
    const sound = new Howl({
        src: ['audio.mp3']
    });
    sound.play();
});
