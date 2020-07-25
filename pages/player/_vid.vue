<template>
  <div>
    <!-- 阿里云视频播放器样式 -->
    <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.8.8/skins/default/aliplayer-min.css" />

    <script type="text/javascript" charset="utf-8" src="https://g.alicdn.com/de/prismplayer/2.8.8/aliplayer-min.js"></script>

<!--    <script type="text/javascript" charset="utf-8" src="./aliplayercomponents-1.0.5.min.js"></script>-->

    <!-- 阿里云视频播放器脚本 -->
<!--    <script charset="utf-8" type="text/javascript" src="https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js" />-->
<!--    <script type="text/javascript" charset="utf-8" src="../../assets/js/aliplayercomponents-1.0.5.min.js"></script>-->
    <!-- 定义播放器dom -->
    <div id="J_prismPlayer" class="prism-player" />
  </div>
</template>

<script>
  import videoApi from "@/api/video";
    export default {
        head:{
                title: '测试',
                meta: [
                    { hid: 'description', name: 'description', content: '' }
                ],
                script: [
                    {src: '@/static/aliplayercomponents-1.0.5.min.js',
                    async:true}
                ]
        },
        props: {
        },
        asyncData({params,error}){
            return videoApi.getPlayAuthById(params.vid).then(res=>{
                return {playAuth:res.data.data.playAuth,vid:params.vid}
            })
        },
        methods: {
        },
        mounted() {//页面渲染之后执行
            // new Aliplayer({
            //     id: 'J_prismPlayer',
            //     width: '100%',
            //     autoplay: false,
            //     cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png',
            //     //根据视频凭证播放配置
            //     enctype:"1",
            //     vid:this.vid,
            //     playauth:this.playAuth,
            //     cover: 'http://guli.shop/photo/banner/1525939573202.jpg', // 封面
            //     qualitySort: 'asc', // 清晰度排序
            //
            //     mediaType: 'video', // 返回音频还是视频
            //     autoplay: false, // 自动播放
            //     isLive: false, // 直播
            //     rePlay: false, // 循环播放
            //     preload: true,
            //     controlBarVisibility: 'hover', // 控制条的显示方式：鼠标悬停
            //     useH5Prism: true, // 播放器类型：html5
            // },function(player){
            //     console.log('播放器创建好了。')
            // });


            var videoAdClose = function (videoAd) {
                /* Register the pause event to pause the ad. */
                videoAd.pauseVideoAd()
                var result = confirm('确定开通会员关闭广告吗？')
                if (result) {
                    /* Register the skip event to skip the ad. */
                    videoAd.closeVideoAd()
                } else {
                    /* Register the play event to play the ad. */
                    videoAd.playVideoAd()
                }
            }
            new Aliplayer({
                id: "J_prismPlayer",
                vid:this.vid,
                playauth:this.playAuth,
                width: "100%",
                height: "500px",
                autoplay: true,
                isLive: false,
                // components: [{
                //     name: 'VideoADComponent',
                //     type: AliPlayerComponent.VideoADComponent,
                //     args: ['https://player.alicdn.com/ad/citybrain.mp4', 'https://et.aliyun.com/brain/city', videoAdClose, 'VIP关闭广告']
                // }]
            }, function (player) {
                console.log("The player is created");
            });
        }
    };
</script>
