//APIを格納
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
//window.URLのAPIをすべてwindow.URLに統一
window.URL = window.URL || window.webkitURL;

if (!navigator.getUserMedia) {
    alert("カメラ未対応のブラウザです。");
}

// 変数
var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    video = document.getElementById("video"),
    btnStart = document.getElementById("start"),
    btnStop = document.getElementById("stop"),
    btnPhoto = document.getElementById("photo"),
    videoObj = {
        video: true,
        audio: false
    };

btnStart.addEventListener("click", function() {
    var localMediaStream;
    
    if (navigator.getUserMedia) {
        navigator.getUserMedia(videoObj, function(stream) {
            localMediaStream = stream;
            video.src = window.URL.createObjectURL(localMediaStream);
            
        }, function(error) {
            console.error("getUserMedia error: ", error.code);
        });
        
        btnStop.addEventListener("click", function() {
            localMediaStream.stop();
        });
        
        btnPhoto.addEventListener("click", function() {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            
        });
    }
});
