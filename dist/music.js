const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "东风破",
        artist: '周杰伦',
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FZWJrM3dfTmNqbExvclFTV2Q0UU1XRUJUSHFSTGVXci1LcVBwVEsxMUhYUnVRP2U9MjBLTUZI.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588348816715&di=48336330e0a895956c68ba501d551757&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F06%2F22%2F146659044263625234.JPEG',
      },
      {
        name: '发如雪',
        artist: '周杰伦',
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FY0VVVkZXV1ZEbEVuc3dOanJOanBZTUJVb3M0OHkxYnBiZUdzVmpOV2c0QzBnP2U9aHdkdE5a.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588349252971&di=6225d2e82139d2a5fe2d3bc286f9deef&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201301%2F18%2F20130118235943_BZckY.thumb.700_0.jpeg',
      },
      {
        name: '夜的第七章',
        artist: '周杰伦&潘儿',
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FZWszcFFtcmMzaElpYTNIazRUclBXRUJDdEYzZGhLd1U0VGdXdEJWUHQzOFl3P2U9TWFMQVFz.mp3',
        cover: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3515339255,299950061&fm=26&gp=0.jpg',
      },
      {
        name: '一路向北',
        artist: '周杰伦',
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FWkZQZnVmRnFQOUZxYXFzeTZoN2tYc0JuUmJ3VXdDT2JMaXpBOXB0UUc1REVBP2U9MzFxZDdx.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588349252971&di=6225d2e82139d2a5fe2d3bc286f9deef&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201301%2F18%2F20130118235943_BZckY.thumb.700_0.jpeg',
      },
      {
        name: 'Civil War',
        artist: 'Guns N \' Roses' ,
        url: 'https://other-web-rc01-sycdn.kuwo.cn/3d30a2b39f8b8befab51fd9c8f09516a/5eac27d5/resource/n2/1/56/3330573613.mp3',
        cover: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1604755518,1099120615&fm=15&gp=0.jpg',
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