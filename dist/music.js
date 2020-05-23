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
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FYzd4WTloalRuSktrdThSQ1BZdXZyNEJidTJYeEJWVzk0SkpXeWwxbkl2dkRBP2U9bzdEVnpt.mp3',
        cover: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1604755518,1099120615&fm=15&gp=0.jpg',
      },
      {
        name: '以父之名',
        artist: '周杰伦' ,
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FZk5kaS1XRVVSSkhuZmpkelpzUGFCNEIzQks1WExEV3hfMm54ZWFJcTlCZHV3P2U9N2g3MUZB.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588348816715&di=48336330e0a895956c68ba501d551757&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F06%2F22%2F146659044263625234.JPEG',
      },
      {
        name: '菊花台',
        artist: '周杰伦' ,
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FUzBsaDl5UUt3dE52YUk3MnUydnE5UUJaR1BkTTFHX2piUVJ1V3NlRkdZUjBBP2U9Qkh0eDc5.mp3',
        cover: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3515339255,299950061&fm=26&gp=0.jpg',
      },
      {
        name: '江南',
        artist: '林俊杰' ,
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FWXNWQjFBY2RndEx0dVNxNmNjdVp3a0JVdnFaNWt0REJLOGh2WXVPWHNBSlB3P2U9YUQ3VmN2.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588351782504&di=86d8ad07ed32f826ed94adaf2023759a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2Fb812c8fcc3cec3fd81ffd192dd88d43f86942717.jpg',
      },
      {
        name: '枫',
        artist: '周杰伦' ,
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FWjFlajR3TkpDTkFxS3ZMQ0hYUVc0c0JTTkxfNHNhbnd0ZU5wb1VQNnQ1bHlBP2U9Z1hrb0c2.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588349252971&di=6225d2e82139d2a5fe2d3bc286f9deef&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201301%2F18%2F20130118235943_BZckY.thumb.700_0.jpeg',
      },
      {
        name: '富士山下',
        artist: '陈奕迅' ,
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FZVUwWVFlVDh2aE90V19vUDhvQUcwWUI1LTVETG9Ea3JsaWk0eDcxb1NFbHNRP2U9aFhYaGln.mp3',
        cover: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2220740360,3219673503&fm=26&gp=0.jpg',
      },
      {
        name: '不为谁而作的歌',
        artist: '林俊杰' ,
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FVDFMR01tbW1jNU92cnBScEF6VmVEc0JDLTFrY0JLVU5NV2RiWW9wZUpaSnBBP2U9OTNEZkhY.mp3',
        cover: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1368364977,3690929948&fm=26&gp=0.jpg',
      },
      {
        name: '最佳损友',
        artist: '陈奕迅' ,
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FZnJJaFNsTDBTQkJyblozLThnRGFpd0JiSWVBQ1B4eC1TZEdTM21vYWxlVzlRP2U9c05BaWlU.mp3',
        cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=195604110,3093534144&fm=26&gp=0.jpg',
      },
      {
        name: '那些你很冒险的梦',
        artist: '林俊杰' ,
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FUnJpMWZKZTB6bEV0T2ZZNmRBelhGOEJXWHo2c0llRDJLdXdXRGk5YmR4cTlBP2U9V09HUUxE.mp3',
        cover: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3599512144,1535857295&fm=26&gp=0.jpg',
      },
      {
        name: 'Echoes',
        artist: 'Pink Floyd' ,
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FV1ltaG9tdC1qUkptWEdkQTZOUWY4OEJySl9rZHJrMFJUdHR0NkgwTjFQbkZBP2U9MXdVdFN4.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588397162510&di=1478abffced470df4500e5223cd0907b&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp57956775.jpg',
      },
      {
        name: 'Revenge(Creeper)',
        artist: 'MineCraft' ,
        url: 'https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9odXN0ZWR1Y24tbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvY25yZ2xzcV9odXN0X2VkdV9jbi9FWGhuR2V0d1pybE9sNkE1bWIxcXVXQUJhcXRmZFJaeWhqbWVUT1BwN056X2dnP2U9S0FuWE03.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588397274682&di=0e2e7f17c1cc9ebcdd99252610b42f1a&imgtype=0&src=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F32700000%2FCreeper-the-minecraft-creeper-32729200-1200-1200.png',
      }
    ]
});