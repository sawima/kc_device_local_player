export function config(){
    return {
        defaultDisplayImg: "https://s3.cn-northwest-1.amazonaws.com.cn/kcsignage-dev.1m2.fun/publicAssets/placeholder/1.png",
        localAssetSite:"http://localhost:8081/assets/",
        localPlayBook: "http://localhost:3002/getPlayBook",
        remoteDefaultPlayBook: "https://api.kimacloud.com/client-dev/getApp",
        remotePlayBook: "https://api.kimacloud.com/client-dev/getPlayBook"
    }
    // return {
    //     defaultDisplayImg: "https://s3.cn-northwest-1.amazonaws.com.cn/kcsignage-prod.1m2.fun/publicAssets/placeholder/1.png",
    //     localAssetSite:"http://localhost:8081/assets/",
    //     localPlayBook: "http://localhost:3002/getPlayBook",
    //     remoteDefaultPlayBook: "https://api.kimacloud.com/client-prod/getApp",
    //     remotePlayBook: "https://api.kimacloud.com/client-prod/getPlayBook"
    // }
}

export let demoData=[
    {
        assets:[
            {attribute:"http://kcsignage-dev.1m2.fun/publicAssets/placeholder/1.png",name:"1png"},
            {attribute:"http://kcsignage-dev.1m2.fun/publicAssets/placeholder/2.png",name:"2png"},
            {attribute:"http://kcsignage-dev.1m2.fun/publicAssets/placeholder/3.png",name:"3png"},
            {attribute:"http://kcsignage-dev.1m2.fun/publicAssets/placeholder/4.png",name:"4png"},
            {attribute:"http://kcsignage-dev.1m2.fun/publicAssets/placeholder/5.png",name:"5png"},
        ],
        type:"image",limit:100,regionName:"images",params:{duration:3000,effection:"slider"}
    },
]
