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
                    url: '\n' +
                        'https://m804.music.126.net/20230607151753/2be25e2578822d7f71ebb79685305c2b/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481716365/e62b/b339/991f/c39f4e87d52f6b48a5837f60d84f2a38.mp3?authSecret=0000018894a1387f0ea50aaba61118b9',
                    cover: 'http://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg?param=130y130'
                },
                {
                    name: '当(女声授权版)',
                    artist: '林宝馨',
                    url: '\n' +
                        'https://m804.music.126.net/20230607151459/91e7296fe6d26692cd8182277123c4e9/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/16683989481/f0c0/48d4/7767/39a3a2ed4881b709fd5a22a6d31e0fbb.mp3?authSecret=00000188949e914c0ed30aaba3c00808',
                    cover: 'http://p1.music.126.net/YjF-eNZ6a_7t0PeWP23nSw==/109951167740227942.jpg?param=130y130'
                },
                {
                    name: '遗失的心跳',
                    artist: '洛./1个球',
                    url: 'https://m804.music.126.net/20230607151652/e3c9cf59cfd0b7bab4297de9bf471197/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/21236409375/8e3b/08f5/f584/574df0cbb49daab44b7915bde1ce89b4.mp3?authSecret=0000018894a049681c910aaba0363cb4',
                    cover: 'http://p2.music.126.net/blUY6krGPGFMT5UeKuJk2g==/109951168002669109.jpg?param=130y130'
                },
                {
                    name: '我记得',
                    artist: '赵雷',
                    url: 'https://m804.music.126.net/20230607151331/4f157d9fc156b54ccc861e29b339515c/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/17718433824/acca/41eb/8112/efa4dce840121844afcb957bcb2d4fd1.mp3?authSecret=00000188949d398f10790aaba3ac1662',
                    cover: 'http://p1.music.126.net/FCWD6ibS2JK2B3QAnXuzwQ==/109951167805892385.jpg?param=130y130'
                }

            ]
        });
    }
})();