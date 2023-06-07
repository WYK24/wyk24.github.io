!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
        oldLoadAp && oldLoadAp();

        new APlayer({
            container: document.getElementById('aplayer'),
            fixed: true,
            autoplay: false,
            loop: 'all',
            order: 'random',
            theme: '#b7daff',
            preload: 'none',
            audio: [
                {
                    name: '起风了',
                    artist: '买辣椒也用券',
                    url: 'http://m704.music.126.net/20230607145106/6faabb3b4bb5dc6bf8167b56c0d08b99/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481716365/e62b/b339/991f/c39f4e87d52f6b48a5837f60d84f2a38.mp3?authSecret=000001889488b28a188b0aaba5fa03fa',
                    cover: 'http://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg?param=130y130'
                },
                {
                    name: '当(女声授权版)',
                    artist: '林宝馨',
                    url: 'http://m704.music.126.net/20230607142729/159aa848ace4c0e6abecd6d0151ae1bc/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/16683989481/f0c0/48d4/7767/39a3a2ed4881b709fd5a22a6d31e0fbb.mp3?authSecret=00000188947311fb1ed10aaba04b17ca',
                    cover: 'http://p1.music.126.net/YjF-eNZ6a_7t0PeWP23nSw==/109951167740227942.jpg?param=130y130'
                },
                {
                    name: '遗失的心跳',
                    artist: '洛./1个球',
                    url: 'http://m704.music.126.net/20230607145025/fc6dd41a2d68d393c8d7c4ffc833abc4/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/21236409375/8e3b/08f5/f584/574df0cbb49daab44b7915bde1ce89b4.mp3?authSecret=0000018894881382151d0aaba0aea49c',
                    cover: 'https://p1.music.126.net/xSsrTys10fu6UlAjVuRBtg==/109951165683609378.jpg?param=200y200'
                },
                {
                    name: '我记得',
                    artist: '赵雷',
                    url: 'http://m704.music.126.net/20230607143058/360fe8aecde0868af7e73c06543eead2/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/17718433824/acca/41eb/8112/efa4dce840121844afcb957bcb2d4fd1.mp3?authSecret=000001889476418d00af0aaba049a018',
                    cover: 'http://p1.music.126.net/FCWD6ibS2JK2B3QAnXuzwQ==/109951167805892385.jpg?param=130y130'
                }

            ]
        });
    }
})();