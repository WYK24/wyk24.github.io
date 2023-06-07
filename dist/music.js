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
                    url: '/mp3/qifengle.mp3',
                    cover: 'http://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg?param=130y130'
                },
                {
                    name: '唯一',
                    artist: '告五人',
                    url: '/mp3/weiyi.mp3',
                    cover: 'http://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg?param=130y130'
                },
                {
                    name: '我记得',
                    artist: '赵雷',
                    url: '/mp3/wojide.mp3',
                    cover: 'http://p1.music.126.net/FCWD6ibS2JK2B3QAnXuzwQ==/109951167805892385.jpg?param=130y130'
                }

            ]
        });
    }
})();