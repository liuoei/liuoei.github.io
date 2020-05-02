const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "东风破",
        artist: '周杰伦',
        url: 'http://mp.111ttt.cn/mp3music/79479.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588348816715&di=48336330e0a895956c68ba501d551757&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F06%2F22%2F146659044263625234.JPEG',
      },
      {
        name: '发如雪',
        artist: '周杰伦',
        url: 'http://mp.111ttt.cn/mp3music/118990.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588349252971&di=6225d2e82139d2a5fe2d3bc286f9deef&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201301%2F18%2F20130118235943_BZckY.thumb.700_0.jpeg',
      },
      {
        name: '夜的第七章',
        artist: '周杰伦&潘儿',
        url: 'http://antiserver.kuwo.cn/anti.s?useless=resource&format=mp3&rid=MUSIC_228907&response=res&type=convert_url&br=320kmp3&file=link.mp3',
        cover: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3515339255,299950061&fm=26&gp=0.jpg',
      },
      {
        name: '一路向北',
        artist: '周杰伦',
        url: 'http://sr.sycdn.kuwo.cn/e7f682cb8fb2bf7cecdb3ad3c867c7d4/5eac25f3/resource/n3/38/86/2397999236.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588349252971&di=6225d2e82139d2a5fe2d3bc286f9deef&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201301%2F18%2F20130118235943_BZckY.thumb.700_0.jpeg',
      },
      {
        name: 'Civil War',
        artist: 'Guns N \' Roses' ,
        url: 'https://other-web-rc01-sycdn.kuwo.cn/3d30a2b39f8b8befab51fd9c8f09516a/5eac27d5/resource/n2/1/56/3330573613.mp3',
        cover: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1604755518,1099120615&fm=15&gp=0.jpg',
      },
      {
        name: 'Stairway to Heaven',
        artist: 'Led Zeppelin' ,
        url: 'https://rl01-sycdn.kuwo.cn/2f93cb29d90c03bde8e64fdd2bd5f370/5eac294f/resource/n3/60/5/3619797768.mp3',
        cover: 'https://i0.wp.com/thetmca.com/files/2016/06/stairwaytoheaven.jpg?resize=225%2C225',
      },
      {
        name: '将故事写成我们',
        artist: '林俊杰' ,
        url: 'http://sr.sycdn.kuwo.cn/2384b99a7b5a9b13f8daef814ce462f5/5eac2a22/resource/n3/41/76/1299028305.mp3',
        cover: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1233466124,1861943571&fm=26&gp=0.jpg',
      },
      {
        name: '以父之名',
        artist: '周杰伦' ,
        url: 'http://mp.111ttt.cn/mp3music/238210.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588348816715&di=48336330e0a895956c68ba501d551757&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F06%2F22%2F146659044263625234.JPEG',
      },
      {
        name: '菊花台',
        artist: '周杰伦' ,
        url: 'http://mp.111ttt.cn/mp3music/138804.mp3',
        cover: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3515339255,299950061&fm=26&gp=0.jpg',
      },
      {
        name: '江南',
        artist: '林俊杰' ,
        url: 'http://mp.111ttt.cn/mp3music/3209103.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588351782504&di=86d8ad07ed32f826ed94adaf2023759a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2Fb812c8fcc3cec3fd81ffd192dd88d43f86942717.jpg',
      },
      {
        name: '千里之外',
        artist: '周杰伦&费玉清' ,
        url: 'http://mp.111ttt.cn/mp3music/138810.mp3',
        cover: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3515339255,299950061&fm=26&gp=0.jpg',
      },
      {
        name: '搁浅',
        artist: '周杰伦' ,
        url: 'https://sh-download-ipv6.ftn.qq.com/ftn_handler/2252e2958a5613cb614a443c7e70137bb438da54c448a1bc70dac26f05efa70eba0727a1d922090108e1273cf0c37853f50ad61b906e1d11baaf4cf7863c2faa/?fname=%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%90%81%E6%B5%85.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588351818551&di=4d6727570412e7df89e850611209add7&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F2e5abc33760dbcf098e451f3c1c0f5a13812c6d6.jpg',
      },
      {
        name: '枫',
        artist: '周杰伦' ,
        url: 'http://mp.111ttt.cn/mp3music/118987.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588349252971&di=6225d2e82139d2a5fe2d3bc286f9deef&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201301%2F18%2F20130118235943_BZckY.thumb.700_0.jpeg',
      },
      {
        name: '富士山下',
        artist: '陈奕迅' ,
        url: 'http://mp.111ttt.cn/mp3music/404567.mp3',
        cover: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2220740360,3219673503&fm=26&gp=0.jpg',
      },
      {
        name: '不为谁而作的歌',
        artist: '林俊杰' ,
        url: 'http://win.web.rh01.sycdn.kuwo.cn/f74215d12db99b8ddf3c6439b0a3bf51/5eac2a66/resource/n3/54/13/4260426518.mp3',
        cover: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1368364977,3690929948&fm=26&gp=0.jpg',
      },
      {
        name: '最佳损友',
        artist: '陈奕迅' ,
        url: 'http://mp.111ttt.cn/mp3music/124335.mp3',
        cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=195604110,3093534144&fm=26&gp=0.jpg',
      },
      {
        name: '那些你很冒险的梦',
        artist: '林俊杰' ,
        url: 'http://win.web.ra01.sycdn.kuwo.cn/361dda2ff54f143b17f5ad15945f991e/5eac2a40/resource/n3/320/91/36/513306116.mp3',
        cover: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3599512144,1535857295&fm=26&gp=0.jpg',
      }
    ]
});