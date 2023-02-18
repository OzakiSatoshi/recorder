// 録音するボタンを取得
const recordButton = document.getElementById('record-button');

// 録音する処理を追加
recordButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({audio: true})
    .then(stream => {
        const recorder = new RecordRTC(stream, {
            type: 'audio'
        });
        recorder.startRecording();
        // 録音を停止する処理を追加
        // （例：10秒後に自動停止する場合）
        setTimeout(() => {
            recorder.stopRecording(() => {
                const blob = recorder.getBlob();
                // 録音した音声データを保存する処理を追加
            });
        }, 10000);
    });
});
